import {
  Box,
  Flex,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import UInput from "@/components/UInput/UInput";
import USelect from "@/components/USelect/USelect";
import Restricted from "@/providers/restricted";
import { roles } from "@/config/permissions";
import {
  erecipeMinistryTH,
  pharmacyRecipeTH,
} from "@/components/mock/tableHeaders";
import SelectionWithCheckBox from "@/components/SelectionWithCheckBox/SelectionWithCheckBox";
import CModal from "@/components/CModal/CModal";
import CButton from "@/components/button/button";
import statusSelectionOption from "@/components/mock/options";
import SeparatedTable from "@/components/SeparatedTable/SeparatedTable";
import Pagination from "@/components/Pagination/Pagination";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import ExcelBtn from "./views/ExcelBtn";
import useRecipeState from "./views/state";

export default function ERecipes(): React.ReactElement {
  const {
    isMinistry,
    isStatusBtn,
    setFilter,
    filter,
    handleSubmit,
    onSubmit,
    control,
    regionsOption,
    valleyOptions,
    cityOptions,
    polyclinicOptions,
    reset,
    statusOptions,
    setParams,
    search,
    setSearch,
    ministryTB,
    recipeLoading,
    currentPage,
    recipes,
    setCurrentPage,
    PAGE_SIZE,
    setIsExported,
    isFetching,
    isPharmacy,
    pharmacyTB,
  } = useRecipeState();

  if (recipes?.count === 0) {
    <EmptyBox
      title="Список врачей пуст"
      description="Здесь будет отображаться список всех врачей, которые работают по всей РУз"
      icon="/assets/doctors.svg"
    />;
  }
  console.log("isPharmacy", isPharmacy);

  return (
    <>
      <Flex p={4} w="full" direction="column" rowGap={4}>
        <Flex w="full" columnGap="16px">
          <UInput
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            icon="/assets/search.svg"
            placeholder="Поиск по ID рецепта/ПИНФЛ "
          />
          {isMinistry && (
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
              onClick={() => {
                setFilter(true);
              }}
            >
              <FilterIcon />
              <Text fontWeight={500} fontSize="16px" color="secondary.main">
                Фильтр<span className="text-[#8E93AA] ml-1">(0)</span>
              </Text>
            </Flex>
          )}
          {isStatusBtn && (
            <Box width="30%">
              <USelect
                searchIcon={false}
                options={statusSelectionOption}
                placeholder="Все статусы"
                // isMulti
                isClearable
                onChange={(e) => {
                  console.log(e);
                }}
              />
            </Box>
          )}
          <Restricted to={[roles.healthMinistry, roles.mainDoctor]}>
            <Box flex={2}>
              <ExcelBtn
                onClick={() => {
                  setIsExported(true);
                }}
                loading={isFetching}
              />
            </Box>
          </Restricted>
        </Flex>
        {recipes?.count === 0 ? (
          <Box
            bg="white"
            borderRadius={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minH="89vh"
          >
            <EmptyBox
              title="Список врачей пуст"
              description="Здесь будет отображаться список всех врачей, которые работают по всей РУз"
              icon="/assets/doctors.svg"
            />
          </Box>
        ) : (
          <>
            {isMinistry && (
              <SeparatedTable
                headData={erecipeMinistryTH}
                bodyData={ministryTB}
                loading={recipeLoading}
                hasPath
                path="erecipes/recipe-version"
              />
            )}
            {isPharmacy && (
              <SeparatedTable
                headData={pharmacyRecipeTH}
                bodyData={pharmacyTB}
                loading={recipeLoading}
              />
            )}
          </>
        )}
        <Pagination
          currentPage={currentPage}
          totalCount={recipes?.count ?? 0}
          pageSize={PAGE_SIZE}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
          siblingCount={1}
        />
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
                    title="Выберите статус"
                    placeholder="Выберите из списка"
                    control={control}
                    name="status"
                    options={statusOptions}
                    menuPlacement="top"
                    isSearchable
                    isClearable
                    // isMulti
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
