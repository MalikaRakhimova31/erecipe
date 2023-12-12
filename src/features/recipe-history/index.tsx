import { Box, Flex } from "@chakra-ui/react";
// import historyData from "@/components/mock/historyData";
import { useMemo, useRef, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import UInput from "@/components/UInput/UInput";
import { useParams } from "react-router-dom";
import format from "date-fns/format";
import PatientBox from "@/components/PatientBox.tsx/PatientBox";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import { useHaveAccessTo } from "@/helpers/have-access-to";
import {
  doctorRecipeHistoryTH,
  ministryRecipeHistoryTH,
} from "@/components/mock/tableHeaders";
import SeparatedTable from "@/components/SeparatedTable/SeparatedTable";
import StatusBox from "@/components/StatusBox/StatusBox";
import { useDebounce } from "usehooks-ts";
import { UseGetAllUsers, UseGetPatientRecipes } from "../create-recipe/api";

const pageSize = 8;
export default function RecipeHistory(): React.ReactElement {
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 3000);
  const [currentPage, setCurrentPage] = useState(1);
  const { id: patientId } = useParams();
  const ministryTable = useHaveAccessTo("ministry-recipe-history-table");
  const doctorTable = useHaveAccessTo("doctor-recipe-history-table");

  const { data: patientRecipes, isLoading } = UseGetPatientRecipes({
    queryParams: {
      patient: patientId?.split("&")[0],
      page_size: pageSize,
      page: currentPage,
      search: debounced,
    },
    open: !(patientId == null),
  });

  const { data: patientInfo, isLoading: isPatientLoading } = UseGetAllUsers({
    queryParams: {
      search: patientId?.split("&")[1],
    },
    open: !(patientId == null),
  });

  const historyData = useMemo(
    () =>
      patientRecipes?.results?.map((result: any) => ({
        id: result?.uid,
        created: format(new Date(result.created_at), "yyyy-MM-dd"),
        expire: "30 дней",
        version: "2 версии",
        status: <StatusBox status={result.status} />,
      })),
    [patientRecipes],
  );

  const historyDataDoctor = useMemo(
    () =>
      patientRecipes?.results?.map((result: any) => ({
        id: result?.uid,
        created: format(new Date(result.created_at), "yyyy-MM-dd"),
        expire: "30 дней",
        version: "2 версии",
        status: <StatusBox status={result.status} />,
        edit: (
          <Flex
            borderRadius="full"
            border="1px solid #E7EAF0"
            alignItems="center"
            justifyContent="center"
            height={9}
            w={9}
          >
            <PencilIcon />
          </Flex>
        ),
      })),
    [patientRecipes],
  );

  return (
    <Flex columnGap="16px" w="full" minH="82vh" p="4">
      <Flex direction="column" rowGap="16px" flex="1">
        <UInput
          icon="/assets/search.svg"
          placeholder="Поиск по ID рецепта"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="string"
        />
        {historyData?.length > 0 ? (
          <Flex direction="column" justifyContent="space-between" h="100%">
            {ministryTable && (
              <SeparatedTable
                headData={ministryRecipeHistoryTH}
                bodyData={historyData}
                path="/patients/recipe-version"
                loading={isLoading}
              />
            )}
            {doctorTable && (
              <SeparatedTable
                headData={doctorRecipeHistoryTH}
                bodyData={historyDataDoctor}
                path="/patients/recipe-version"
                loading={isLoading}
              />
            )}
            <Pagination
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
              totalCount={patientRecipes.count}
              siblingCount={1}
            />
          </Flex>
        ) : (
          <EmptyBox
            icon="/assets/patientsBig.svg"
            title="История рецептов пуста"
            description="Здесь будет отображаться история всех рецептов, выписанных пациенту"
          />
        )}
      </Flex>
      <Box width="29.4%">
        <PatientBox
          searchRef={searchRef}
          patientInfo={patientInfo?.results[0]}
          isLoading={isPatientLoading}
        />
      </Box>
    </Flex>
  );
}

function PencilIcon(): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.33333 18.3335H16.6667"
        stroke="#0ABAB5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.5734 3.05228L12.1913 2.43436C13.2151 1.41055 14.875 1.41055 15.8988 2.43436C16.9226 3.45816 16.9226 5.11807 15.8988 6.14187L15.2809 6.75979M11.5734 3.05228C11.5734 3.05228 11.6506 4.36535 12.8092 5.52395C13.9678 6.68255 15.2809 6.75979 15.2809 6.75979M11.5734 3.05228L5.89254 8.7331C5.50777 9.11788 5.31538 9.31027 5.14993 9.52239C4.95475 9.77263 4.78742 10.0434 4.65089 10.3299C4.53515 10.5727 4.44911 10.8308 4.27704 11.3471L3.54787 13.5346M15.2809 6.75979L9.60006 12.4406C9.21529 12.8254 9.0229 13.0178 8.81077 13.1832C8.56054 13.3784 8.28979 13.5457 8.00331 13.6823C7.76046 13.798 7.50234 13.8841 6.98611 14.0561L4.79861 14.7853M4.79861 14.7853L4.26389 14.9635C4.00985 15.0482 3.72977 14.9821 3.54042 14.7927C3.35106 14.6034 3.28495 14.3233 3.36963 14.0693L3.54787 13.5346M4.79861 14.7853L3.54787 13.5346"
        stroke="#0ABAB5"
        strokeWidth="1.5"
      />
      <path
        d="M12.8092 5.52395C11.6506 4.36536 11.5734 3.05228 11.5734 3.05228L5.89254 8.7331C5.50777 9.11788 5.31538 9.31027 5.14993 9.52239C4.95475 9.77263 4.78742 10.0434 4.65089 10.3299C4.53515 10.5727 4.44911 10.8308 4.27704 11.3471L3.54787 13.5346L4.79861 14.7853L6.98611 14.0561C7.50234 13.8841 7.76046 13.798 8.00331 13.6823C8.28979 13.5457 8.56054 13.3784 8.81077 13.1832C9.0229 13.0178 9.21529 12.8254 9.60006 12.4406L15.2809 6.75979C15.2809 6.75979 13.9678 6.68255 12.8092 5.52395Z"
        fill="#EBFAF9"
      />
      <path
        d="M12.1913 2.43436L11.5734 3.05228C11.5734 3.05228 11.6506 4.36536 12.8092 5.52395C13.9678 6.68255 15.2809 6.75979 15.2809 6.75979L15.8988 6.14187C16.9226 5.11807 16.9226 3.45816 15.8988 2.43436C14.875 1.41055 13.2151 1.41055 12.1913 2.43436Z"
        fill="#EBFAF9"
      />
      <path
        d="M11.5734 3.05228L12.1913 2.43436C13.2151 1.41055 14.875 1.41055 15.8988 2.43436C16.9226 3.45816 16.9226 5.11807 15.8988 6.14187L15.2809 6.75979M11.5734 3.05228C11.5734 3.05228 11.6506 4.36535 12.8092 5.52395C13.9678 6.68255 15.2809 6.75979 15.2809 6.75979M11.5734 3.05228L5.89254 8.7331C5.50777 9.11788 5.31538 9.31027 5.14993 9.52239C4.95475 9.77263 4.78742 10.0434 4.65089 10.3299C4.53515 10.5727 4.44911 10.8308 4.27704 11.3471L3.54787 13.5346M15.2809 6.75979L9.60006 12.4406C9.21529 12.8254 9.0229 13.0178 8.81077 13.1832C8.56054 13.3784 8.28979 13.5457 8.00331 13.6823C7.76046 13.798 7.50234 13.8841 6.98611 14.0561L4.79861 14.7853M4.79861 14.7853L4.26389 14.9635C4.00985 15.0482 3.72977 14.9821 3.54042 14.7927C3.35106 14.6034 3.28495 14.3233 3.36963 14.0693L3.54787 13.5346M4.79861 14.7853L3.54787 13.5346"
        stroke="#0ABAB5"
        strokeWidth="1.5"
      />
    </svg>
  );
}
