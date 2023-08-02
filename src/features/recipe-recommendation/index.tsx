import { Box, Flex } from "@chakra-ui/react";
import CTabs from "@/components/CTabs/CTabs";
import UInput from "@/components/UInput/UInput";
import { useRef } from "react";
import CButton from "@/components/button/button";
import Header from "./views/Header";
import TitleText from "./views/TitleText";
import RecipeTable from "./views/RecipeTable";
import DrugQuantity from "./views/DrugQuantity";

export default function RecipeRecommendation(): React.ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const tHead = [
    "нАЗВАНИЕ лекарства",
    "МНН",
    "кол-во/лекарственная форма",
    "Действия",
  ];
  const bData = [
    {
      name: "Конкор, таблетки покрыт.плен.об. 5 мг 50 шт",
      mnn: "Бисопрол",
      quantityform: <DrugQuantity />,
      action: (
        <CButton text="Выбрать" buttonType="button" variant="statusButton" />
      ),
    },
    {
      name: "Конкор, таблетки покрыт.плен.об. 5 мг 50 шт",
      mnn: "Бисопрол",
      quantityform: <DrugQuantity />,
      action: (
        <CButton text="Выбрать" buttonType="button" variant="statusButton" />
      ),
    },
  ];
  const onChange = (): void => {
    if (inputRef.current !== null) {
      const inputValue = inputRef.current.value;
      console.log(inputValue);
    }
  };
  const tabs = ["Назначение #1"];
  return (
    <>
      <Header />
      <Box p={4}>
        <CTabs tabs={tabs}>
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
              <TitleText title="МНН" text="Бисопролол" />
              <TitleText
                title="Примечание"
                text="В случае появления аллергической реакции, прекратить использование препарата и немедленно обратиться к врачу"
              />
            </Flex>
            <Flex p={4} direction="column" rowGap="16px" w="77%" flex={1}>
              <UInput
                icon="/assets/search.svg"
                placeholder="Поиск лекарств"
                inputRef={inputRef}
                onChange={onChange}
              />
              <RecipeTable headData={tHead} bodyData={bData} />
            </Flex>
          </Flex>
        </CTabs>
      </Box>
    </>
  );
}
