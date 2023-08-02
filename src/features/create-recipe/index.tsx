/* eslint-disable @typescript-eslint/no-misused-promises */
import RecipeAccordion from "@/components/RecipeAccordion/RecipeAccordion";
import {
  Box,
  Flex,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type * as z from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import CButton from "@/components/button/button";
import type React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import USelect from "@/components/USelect/USelect";
import PatientBox from "@/components/PatientBox.tsx/PatientBox";
import CModal from "@/components/CModal/CModal";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { type SelectionMenuProps } from "@/types";
import FormSchema from "./validation";
import {
  UseGetAllUsers,
  UseGetPatientRecipes,
  UseGetRecipeId,
  UseGetUserById,
  UseSendRecipeItems,
} from "./api";
import generateUserOptions from "./views/generateUserOptions";

export default function CreateRecipe(): React.ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [patientInfo, setPatientInfo] = useState({});
  const [options, setOptions] = useState<SelectionMenuProps[] | null>();
  const searchRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams", searchParams.get("id"));
  type FormValues = z.infer<typeof FormSchema>;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (containerRef.current != null) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  const { fields, append } = useFieldArray({
    control,
    name: "items",
  });

  const handleAdd = (): void => {
    if (Object.keys(patientInfo).length > 0) {
      setCount(count + 1);
      append({
        mnn: { value: "", label: "" },
        unit: { value: "", label: "" },
        method: { value: "", label: "" },
        note: "",
      });
    } else if (searchRef.current != null) {
      searchRef.current.focus();
    }
  };

  const { mutate: getUserById } = UseGetUserById({
    onSuccess: (res) => {
      if (res !== null) {
        setPatientInfo(res);
      } else setPatientInfo({});
    },
  });
  const { mutate: getRecipeId } = UseGetRecipeId({
    onSuccess: (res) => {
      localStorage.setItem("recipeId", res.id);
    },
  });

  const { mutate: sendRecipeItems } = UseSendRecipeItems({
    onSuccess: () => {
      toast.success("Рецепт отправлен успешно", {
        icon: <img src="/assets/toastifySuccess.svg" alt="success" />,
        position: "top-center",
      });
    },
  });

  useEffect(() => {
    if (searchParams.get("nnuzb")?.length != null) {
      getUserById({
        search: searchParams.get("nnuzb"),
      });
      getRecipeId({
        patient: Number(searchParams.get("id")),
      });
    }
  }, [searchParams.get("nnuzb")]);

  const { data: allUsers } = UseGetAllUsers();
  const { data: patientRecipes } = UseGetPatientRecipes({
    queryParams: {
      patient: searchParams.get("id"),
    },
    open: !(searchParams.get("id")?.length == null),
  });

  console.log("patientRecipes", patientRecipes);

  useEffect(() => {
    if (allUsers?.results) {
      setOptions(generateUserOptions(allUsers.results));
    }
  }, [allUsers]);

  const onSubmit = (data: any): void => {
    console.log("create recipe", data);
    sendRecipeItems({
      id: localStorage.getItem("recipeId"),
      data: {
        items: data.items.map((item: any) => ({
          note: item.note,
          mnn: Number(item.mnn.value),
          unit: Number(item.unit.value),
          method: Number(item.method.value),
        })),
      },
    });
  };
  return (
    <>
      <Box bg="transparent" p="16px" w="100%">
        <Flex columnGap="16px">
          <Box w="71%">
            <Box mb="15px">
              <USelect
                options={options}
                placeholder="Обычный рецепт"
                isDisabled
                searchIcon={false}
              />
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex
                direction="column"
                justifyContent="space-between"
                maxHeight="82vh"
              >
                <Box maxHeight="100%" overflowY="scroll" ref={containerRef}>
                  <Flex direction="column" rowGap="16px">
                    <RecipeAccordion
                      control={control}
                      fields={fields}
                      errors={errors}
                    />
                  </Flex>
                </Box>
                <Box mt={fields?.length ? "15px" : 0}>
                  <CButton
                    icon={<img src="/assets/create.svg" alt="add icon" />}
                    text="Добавить назначение"
                    buttonType="button"
                    variant="unstyled"
                    onClick={handleAdd}
                    isFull
                  />
                  <Flex
                    width="100%"
                    alignItems="center"
                    justifyContent="flex-end"
                    mt="36px"
                  >
                    <Flex
                      w="34%"
                      alignItems="center"
                      justifyContent="flex-end"
                      columnGap="16px"
                    >
                      <CButton
                        text="Отменить"
                        buttonType="button"
                        variant="outline"
                        onClick={onOpen}
                        disabled={fields.length === 0}
                      />
                      <CButton
                        text="Отправить рецепт"
                        variant="solid"
                        buttonType="submit"
                        disabled={fields.length === 0}
                      />
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </form>
          </Box>
          <Box width="29%">
            <Flex direction="column" rowGap="16px">
              <USelect
                options={options}
                placeholder="Поиск по ПИНФЛ/серии паспорта"
                // isClearable
                isSearchable
                searchRef={searchRef}
                value={
                  searchParams.get("id")?.length
                    ? options?.find(
                        (el) =>
                          el.label?.split("/")[0] === searchParams.get("id"),
                      )
                    : undefined
                }
                searchIcon
                onChange={(e) => {
                  setSearchParams({
                    nnuzb: e.label?.split("/")[0],
                    id: e.value,
                  });
                }}
              />
              <PatientBox searchRef={searchRef} patientInfo={patientInfo} />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <CModal isOpen={isOpen} onClose={onClose}>
        <>
          <ModalHeader>Подтвердите действие</ModalHeader>
          <ModalBody maxW="25rem">
            <Text textAlign="center">
              Вы уверены, что хотите отменить создание е-рецепта? Все данные
              будут утеряны
            </Text>
          </ModalBody>
          <ModalFooter>
            <CButton
              buttonType="button"
              onClick={onClose}
              variant="ghost"
              text="Отмена"
            />
            <CButton
              buttonType="button"
              onClick={onClose}
              variant="danger"
              text="Удалить"
            />
          </ModalFooter>
        </>
      </CModal>
    </>
  );
}
