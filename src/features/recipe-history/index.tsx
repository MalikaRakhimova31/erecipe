import RecipeHistoryCard from "@/components/RecipeHistoryCard/RecipeHistoryCard";
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
// import historyData from "@/components/mock/historyData";
import { useMemo, useRef, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import UInput from "@/components/UInput/UInput";
import { useParams } from "react-router-dom";
import format from "date-fns/format";
import TableSkeleton from "@/components/TableSkeleton/TableSkeleton";
import PatientBox from "@/components/PatientBox.tsx/PatientBox";
import EmptyBox from "@/components/EmptyBox/EmptyBox";
import { useSearchParams } from "react-router-dom";
import { UseGetAllUsers, UseGetPatientRecipes } from "../create-recipe/api";

const pageSize = 8;
export default function RecipeHistory(): React.ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const { id: patientId } = useParams();

  const theader = [
    "ID рецепта",
    "создан",
    "Действует",
    "кол-во версий",
    "Статус",
    "Действия",
  ];

  const { data: patientRecipes, isLoading } = UseGetPatientRecipes({
    queryParams: {
      patient: patientId?.split("&")[0],
      page_size: pageSize,
      page: currentPage,
      search: searchParams.get("id"),
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
        status: result.status,
      })),
    [patientRecipes],
  );

  console.log("patientRecipes===>", patientRecipes);
  return (
    <Flex columnGap="16px" w="full" minH="82vh" p="4">
      <Flex direction="column" rowGap="16px" flex="1">
        <UInput
          icon="/assets/search.svg"
          placeholder="Поиск по ID рецепта"
          inputRef={inputRef}
          onChange={(e) => {
            setSearchParams({ id: e.target.value });
          }}
          type="string"
        />
        {historyData?.length > 0 ? (
          <Flex direction="column" justifyContent="space-between" h="100%">
            {isLoading !== true ? (
              <>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        {theader.map((th: string, index) => (
                          <Th
                            borderBottom="none"
                            key={`${th}`}
                            paddingLeft={index === 0 ? `16px` : 0}
                            paddingRight={index === 0 ? `16px` : 0}
                          >
                            {th}
                          </Th>
                        ))}
                      </Tr>
                    </Thead>
                    <Tbody>
                      {historyData?.map((el: any) => (
                        <>
                          <RecipeHistoryCard
                            id={el.id}
                            created={el.created}
                            expire={el.expire}
                            version={el.version}
                            status={el.status}
                          />
                          <Tr h={5} />
                        </>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
                <Pagination
                  currentPage={currentPage}
                  totalCount={patientRecipes?.count}
                  pageSize={pageSize}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                  }}
                  siblingCount={1}
                />
              </>
            ) : (
              <TableSkeleton />
            )}
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
