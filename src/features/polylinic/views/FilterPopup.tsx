import CModal from "@/components/CModal/CModal";
import CSelect from "@/components/CSelect/CSelect";
import CButton from "@/components/button/button";
import { type MProps } from "@/types";
import {
  Box,
  Flex,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface inputProps {
  area: string;
  city: string;
  region: string;
}

interface FormValues {
  items: inputProps[];
}

export default function FilterPopup({
  isOpen,
  onClose,
}: MProps): React.ReactElement {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      items: [],
    },
  });
  const options = [
    { value: "all", label: "Все области" },
    { value: "tashkent", label: "Ташкентская область" },
    { value: "karakalpak", label: "Республика Каракалпакстан" },
    { value: "andijan", label: "Андижанская область" },
  ];

  const onSubmit = (): void => {
    console.log("data");
    onClose();
  };

  return (
    <CModal isOpen={isOpen} onClose={onClose}>
      <Box width="475px">
        <ModalHeader>Фильтр</ModalHeader>
        <form
          onSubmit={() => {
            handleSubmit(onSubmit);
          }}
        >
          <ModalBody>
            <Flex
              width="full"
              direction="column"
              rowGap={4}
              alignItems="flex-start"
              justifyContent="flex-start"
              id="filter-popup-select"
            >
              <Box width="100%">
                <CSelect
                  title="Выберите область"
                  placeholder="Выберите из списка"
                  control={control}
                  name="area"
                  options={options}
                  isSearchable
                  isClearable
                />
              </Box>
              <Box width="100%">
                <CSelect
                  title="Выберите город"
                  placeholder="Выберите из списка"
                  control={control}
                  name="city"
                  options={options}
                  isSearchable
                  isClearable
                />
              </Box>
              <Box width="100%">
                <CSelect
                  title="Выберите район"
                  placeholder="Выберите из списка"
                  control={control}
                  name="region"
                  options={options}
                  menuPlacement="top"
                  isSearchable
                  isClearable
                />
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justifyContent="flex-end" columnGap={6}>
              <CButton
                buttonType="button"
                onClick={onClose}
                variant="outline"
                text="Очистить"
              />
              <CButton
                buttonType="button"
                onClick={onClose}
                variant="solid"
                text="Применить"
              />
            </Flex>
          </ModalFooter>
        </form>
      </Box>
    </CModal>
  );
}
