import SeparatedTable from "@/components/SeparatedTable/SeparatedTable";
import StatusBox from "@/components/StatusBox/StatusBox";
import UInput from "@/components/UInput/UInput";
import CButton from "@/components/button/button";
import { Box, Flex } from "@chakra-ui/react";
import { useRef } from "react";

export default function IssueHistory(): React.ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const tHead = [
    "ID рецепта",
    "создан",
    "Выдан",
    "Пациент",
    "КОЛ-ВО",
    "Статус",
    "Действия",
  ];
  const bodyData = [
    {
      userId: "ER123456",
      date: "02/06/2023 (11:30)",
      issued: "02/06/2023 (11:30)",
      patient: "Зилола Алимова",
      quantity: "2/5 назначений",
      status: <StatusBox status="issued" />,
      action: (
        <CButton text="Детали" buttonType="button" variant="blackButton" />
      ),
    },
  ];
  const handleChange = (): void => {
    if (inputRef.current !== null) {
      console.log(inputRef.current.value);
    }
  };
  return (
    <Flex direction="column" p={4} rowGap={4}>
      <Box>
        <UInput
          placeholder="Поиск по ID рецепта"
          icon="/assets/search.svg"
          inputRef={inputRef}
          onChange={handleChange}
        />
      </Box>
      <SeparatedTable headData={tHead} bodyData={bodyData} />
    </Flex>
  );
}
