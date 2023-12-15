import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import UInput from "@/components/UInput/UInput";
import CButton from "@/components/button/button";
import { useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./views/Header";
import TitleText from "./views/TitleText";
import RecipeTable from "./views/RecipeTable";
import DrugQuantity from "./views/DrugQuantity";
import { getRecipeItem, sendRecipe } from "./api";
import { UseGetRecipeDrug } from "../create-recipe/api";
import { type OrderType } from "./types";
import ConfirmPopup from "./views/ConfirmPopup";

interface ItemsProps {
  recipe_id: number;
  id: number;
  isSelected: boolean;
  drug: string;
  recipe_item: number;
  total: number;
}

export default function RecipeRecommendation(): React.ReactElement {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: recipeDrugList } = UseGetRecipeDrug(!(id == null));
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [leave, setLeave] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [rowIndex, setRowIndex] = useState<number>();
  const { data, isLoading } = useQuery({
    queryKey: ["RECIPE_ITEM", id],
    queryFn: async () => {
      const res = await getRecipeItem({
        recipe__uid: id,
      });
      return res;
    },
  });

  const mutationFn = async (formData: OrderType): Promise<void> => {
    if (typeof id === "string") {
      await sendRecipe(formData);
    }
  };

  const { mutate, isLoading: sendRecipeLoading } = useMutation({
    mutationFn,
    onSuccess: () => {
      toast.success("Рецепт отправлен успешно", {
        icon: <img src="/assets/toastifySuccess.svg" alt="success" />,
        position: "top-center",
      });
      setConfirm(false);
      navigate(-1);
    },
    onError: () => {
      setConfirm(false);
    },
  });

  const tHead = [
    "нАЗВАНИЕ лекарства",
    "МНН",
    "лекарственная форма",
    "Действия",
  ];

  const arr = useMemo(
    () =>
      data?.results.map((el) => ({
        id: el.id,
        title: `Назначение #${el.id}`,
        mnn: el.mnn.name.ru,
        note: el.note,
        table: recipeDrugList?.results?.map((drug: any, index: any) => ({
          drug: drug?.name,
          mnn: el.mnn.name.ru,
          drugForm: <DrugQuantity />,
          action: items.some(
            (item) => item.id === el.id && rowIndex === index,
          ) ? (
            <Box width="91px">
              <CButton
                icon={<TickIcon />}
                buttonType="button"
                variant="bordered"
                isFull
                onClick={() => {
                  setRowIndex(undefined);
                  setItems((prevItems) =>
                    prevItems.filter(
                      (item) => !(item.id === el.id && rowIndex === index),
                    ),
                  );
                }}
              />
            </Box>
          ) : (
            <CButton
              text="Выбрать"
              buttonType="button"
              variant="statusButton"
              onClick={() => {
                setItems((prevItems) => [
                  ...prevItems,
                  {
                    isSelected: true,
                    id: el.id,
                    drug: drug?.id,
                    recipe_item: el.id,
                    total: 0,
                    recipe_id: el.recipe,
                  },
                ]);
                setRowIndex(index);
              }}
              disabled={items.some((item) => item.id === el.id)}
            />
          ),
        })),
      })),
    [data?.results, items, recipeDrugList?.results, rowIndex],
  );

  return (
    <>
      <Header
        leave={leave}
        confirm={confirm}
        setLeave={setLeave}
        setConfirm={setConfirm}
        items={items}
      />
      <Box p={4}>
        <Tabs variant="enclosed">
          <TabList>
            {arr?.map((el, index) => (
              <Tab
                tabIndex={el.id}
                key={el.id}
                borderTopLeftRadius={index === 0 ? "none" : "8px"}
              >
                {el.title}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {arr?.map((el) => (
              <TabPanel key={el.id}>
                <Flex h="full">
                  <Flex
                    width="23%"
                    py={4}
                    px={5}
                    borderRight="1px solid #E7EAF0"
                    h="82vh"
                    direction="column"
                    rowGap="16px"
                  >
                    <TitleText title="МНН" text={el.mnn} />
                    <TitleText title="Примечание" text={el.note} />
                  </Flex>
                  <Flex p={4} direction="column" rowGap="16px" w="77%" flex={1}>
                    <UInput
                      icon="/assets/search.svg"
                      placeholder="Поиск лекарств"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    <RecipeTable
                      headData={tHead}
                      bodyData={el.table}
                      loading={isLoading}
                    />
                  </Flex>
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
      <ConfirmPopup
        open={confirm}
        onClose={() => {
          setConfirm(false);
        }}
        loading={sendRecipeLoading}
        onClick={() => {
          mutate({
            recipe: items[0].recipe_id,
            pharmacy: "",
            items: items.map((item) => ({
              drug: item.drug,
              recipe_item: item.recipe_item,
              total: 0,
            })),
          });
        }}
      />
    </>
  );
}

function TickIcon(): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
    >
      <path
        d="M23.0245 12.501C23.0245 18.0374 18.5364 22.5255 13.0001 22.5255C7.46369 22.5255 2.97559 18.0374 2.97559 12.501C2.97559 6.96467 7.46369 2.47656 13.0001 2.47656C18.5364 2.47656 23.0245 6.96467 23.0245 12.501Z"
        fill="white"
      />
      <path
        d="M6.9707 11.9706L10.9706 15.9705L18.9705 8.4707"
        stroke="#0ABAB5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
