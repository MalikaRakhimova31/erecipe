import {
  Box,
  Flex,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import CCalendar from "@/components/Calendar/CCalendar";
import { useState } from "react";
import UInput from "@/components/UInput/UInput";
import { Outlet, useSearchParams } from "react-router-dom";
import format from "date-fns/format";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import JoinedTable from "@/components/JoinedTable/JoinedTable";
import Pagination from "@/components/Pagination/Pagination";
import {
  healthPatientsTH,
  mainDoctorPatientsTH,
} from "@/components/mock/tableHeaders";
import CModal from "@/components/CModal/CModal";
import SelectionWithCheckBox from "@/components/SelectionWithCheckBox/SelectionWithCheckBox";
import CButton from "@/components/button/button";
import usePatientState from "./views/state";

function PatientsHome(): React.ReactElement {
  const {
    isCalendar,
    patients,
    isFilter,
    healthPatientsTB,
    PAGE_SIZE,
    patientssLoading,
    currentPage,
    setCurrentPage,
    search,
    setSearch,
    regionsOption,
    cityOptions,
    valleyOptions,
    polyclinicOptions,
    specializationOptions,
    reset,
    handleSubmit,
    onSubmit,
    control,
    filter,
    setFilter,
    setParams,
    setFilterDate,
    mainDoctorPatientsTB,
    isMainDoctor,
  } = usePatientState();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterModal = (): void => {
    setFilter(true);
  };
  const [value, setValue] = useState(new Date());

  const handleChange = (e: Date): void => {
    setFilterDate(e);
  };

  return (
    <>
      <Outlet />
      <Flex columnGap="16px" padding="16px">
        {isCalendar && (
          <Box flex="1">
            <CCalendar
              value={value}
              onChange={(e: any) => {
                setSearchParams({
                  visited: format(new Date(e), "yyyy-MM-dd"),
                });
                handleChange(e);
                setValue(e);
              }}
            />
            {searchParams.has("visited") && (
              <Box
                mt={4}
                onClick={() => {
                  searchParams.delete("visited");
                  setFilterDate(undefined);
                  setSearchParams(searchParams);
                }}
              >
                <Text
                  fontWeight={500}
                  fontSize={16}
                  color="errorColor"
                  textAlign="right"
                  cursor="pointer"
                >
                  Сбросить
                </Text>
              </Box>
            )}
          </Box>
        )}
        <Flex flex="5" direction="column" rowGap="16px">
          <Flex alignItems="center" columnGap="16px">
            {isFilter && (
              <>
                <UInput
                  placeholder="Поиск по ПИНФЛ/серии паспорта"
                  icon="/assets/search.svg"
                  type="string"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
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
              </>
            )}
          </Flex>
          <Box
            bg="white"
            borderRadius="8px"
            px="20px"
            border="1px solid #E7EAF0"
            minH="82vh"
            w="100%"
          >
            <Flex direction="column" justifyContent="space-between" h="100%">
              {patients?.results.length !== null &&
              patients?.results.length !== 0 ? (
                <JoinedTable
                  headData={
                    isMainDoctor ? mainDoctorPatientsTH : healthPatientsTH
                  }
                  bodyData={
                    isMainDoctor ? mainDoctorPatientsTB : healthPatientsTB
                  }
                  // hasPath
                  path="patients"
                  loading={patientssLoading}
                />
              ) : (
                <EmptyBox
                  icon="/assets/patientsBig.svg"
                  title="Список пациентов пуст"
                  description="Здесь будет отображаться список Ваших пациентов, которым вы выписывали рецепт"
                />
              )}
              <Pagination
                currentPage={currentPage}
                totalCount={patients?.count ?? 0}
                pageSize={PAGE_SIZE}
                onPageChange={(page) => {
                  setCurrentPage(page);
                }}
                siblingCount={1}
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <CModal
        isOpen={filter}
        onClose={() => {
          setFilter(false);
        }}
      >
        <Box width="475px">
          <ModalHeader>Фильтр</ModalHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  <SelectionWithCheckBox
                    title="Выберите область"
                    control={control}
                    name="area"
                    options={regionsOption}
                    placeholder="Выберите из списка"
                    // isMulti
                    isClearable
                    isSearchable
                  />
                </Box>
                <Box width="100%">
                  <SelectionWithCheckBox
                    title="Выберите город"
                    placeholder="Выберите из списка"
                    control={control}
                    name="city"
                    options={cityOptions}
                    isSearchable
                    isClearable
                    // isMulti
                  />
                </Box>
                <Box width="100%">
                  <SelectionWithCheckBox
                    title="Выберите район"
                    placeholder="Выберите из списка"
                    control={control}
                    name="region"
                    options={valleyOptions}
                    menuPlacement="top"
                    isSearchable
                    isClearable
                    // isMulti
                  />
                </Box>
                <Box width="100%">
                  <SelectionWithCheckBox
                    title="Выберите поликлинику"
                    placeholder="Выберите из списка"
                    control={control}
                    name="polyclinic"
                    options={polyclinicOptions}
                    isSearchable
                    isClearable
                    isMulti
                  />
                </Box>
                <Box width="100%">
                  <SelectionWithCheckBox
                    title="Выберите специализацию"
                    placeholder="Выберите из списка"
                    control={control}
                    name="specialization"
                    options={specializationOptions}
                    menuPlacement="top"
                    isSearchable
                    isClearable
                    isMulti
                  />
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Flex width="100%" justifyContent="flex-end" columnGap={6}>
                <CButton
                  buttonType="button"
                  onClick={() => {
                    setFilter(false);
                    reset();
                    setParams(() => ({
                      region: "",
                      organization: "",
                      practitioner_role: "",
                    }));
                  }}
                  variant="outline"
                  text="Очистить"
                />
                <CButton buttonType="submit" variant="solid" text="Применить" />
              </Flex>
            </ModalFooter>
          </form>
        </Box>
      </CModal>
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
