import { Box, Flex, Text } from "@chakra-ui/react";
import CCalendar from "@/components/Calendar/CCalendar";
import { useRef, useState } from "react";
import UInput from "@/components/UInput/UInput";
import Restricted from "@/providers/restricted";
import PatientsTable from "./views/PatientsTable";
import FilterPopup from "../doctors/views/FilterPopup";

function PatientsHome(): React.ReactElement {
  const [filter, setFilter] = useState<boolean>(false);
  const handleFilterModal = (): void => {
    setFilter(true);
  };
  const [value, setValue] = useState(new Date());
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (): void => {
    if (inputRef.current !== null) {
      console.log("ref", inputRef.current.value);
    }
  };

  const handleChange = (e: Date): void => {
    setValue(e);
  };
  return (
    <>
      <Flex columnGap="16px" padding="16px">
        <Restricted to={["DOCTOR", "MAIN_DOCTOR"]}>
          <Box flex="1">
            <CCalendar
              value={value}
              onChange={(e: any) => {
                handleChange(e);
              }}
            />
          </Box>
        </Restricted>
        <Flex flex="5" direction="column" rowGap="16px">
          <Flex alignItems="center" columnGap="16px">
            <UInput
              placeholder="Поиск по ПИНФЛ/серии паспорта"
              icon="/assets/search.svg"
              inputRef={inputRef}
              onChange={handleSearch}
            />
            <Restricted to={["MINZDRAV"]}>
              <Flex
                alignItems="center"
                justifyContent="center"
                columnGap="12px"
                border="1px solid #E7EAF0"
                borderRadius="8px"
                height="48px"
                px="20px"
                bg="white"
                cursor="pointer"
                onClick={handleFilterModal}
              >
                <FilterIcon />
                <Text fontWeight={500} fontSize="16px" color="secondary.main">
                  Фильтр<span className="text-[#8E93AA] ml-1">(0)</span>
                </Text>
              </Flex>
            </Restricted>
          </Flex>
          <PatientsTable />
        </Flex>
      </Flex>
      <FilterPopup
        isOpen={filter}
        onClose={() => {
          setFilter(false);
        }}
      />
    </>
  );
}

export default PatientsHome;

function FilterIcon(): React.ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.91663 11.666C9.29734 11.666 10.4166 12.7853 10.4166 14.166C10.4166 15.5467 9.29734 16.666 7.91663 16.666C6.53591 16.666 5.41663 15.5467 5.41663 14.166C5.41663 12.7853 6.53591 11.666 7.91663 11.666Z"
        stroke="#393D4E"
        strokeWidth="1.5"
      />
      <path
        d="M12.0834 3.33396C10.7027 3.33396 9.58337 4.45325 9.58337 5.83396C9.58337 7.21468 10.7027 8.33396 12.0834 8.33396C13.4641 8.33396 14.5834 7.21468 14.5834 5.83396C14.5834 4.45325 13.4641 3.33396 12.0834 3.33396Z"
        stroke="#393D4E"
        strokeWidth="1.5"
      />
      <path
        d="M12.5 14.1328L18.3333 14.1328"
        stroke="#393D4E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5 5.79883L1.66667 5.79883"
        stroke="#393D4E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1.66663 14.1328L3.33329 14.1328"
        stroke="#393D4E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.3334 5.79883L16.6667 5.79883"
        stroke="#393D4E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
