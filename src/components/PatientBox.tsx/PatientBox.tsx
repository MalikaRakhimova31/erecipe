import { Text, Flex, Box } from "@chakra-ui/react";
import { type RefObject } from "react";
import CButton from "../button/button";
import generatePatientInfo from "./generatePatientInfo";
import SkeletonPatientBox from "./SkeletonPatientBox";

interface Props {
  searchRef: RefObject<HTMLInputElement>;
  patientInfo: any;
  // eslint-disable-next-line react/require-default-props
  isLoading?: boolean;
}

export default function PatientBox({
  searchRef,
  patientInfo,
  isLoading = false,
}: Props): React.ReactElement {
  const userInfo = generatePatientInfo(patientInfo);
  const handleFocus = (): void => {
    if (searchRef.current != null) {
      searchRef.current.focus();
    }
  };

  return (
    <Box bg="white" borderRadius="8px" border="1px solid #E7EAF0" w="full">
      <Box p="20px" borderBottom="1px solid #E7EAF0">
        <Text
          fontWeight={500}
          fontSize="16px"
          color="secondary.main"
          textAlign="center"
        >
          Информация о пациенте
        </Text>
      </Box>
      {!isLoading ? (
        <Flex alignItems="center" justifyContent="center" h={400}>
          {Boolean(patientInfo) && Object.keys(patientInfo).length > 0 ? (
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              rowGap="16px"
              w="full"
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                width="90px"
                height="90px"
                borderRadius="50%"
              >
                <img
                  src="/assets/users/user.svg"
                  alt="user"
                  className="object-cover w-full h-full"
                />
              </Flex>
              <Text color="secondary.main" fontSize="16px" fontWeight={500}>
                {userInfo?.name}
              </Text>
              <Text color="#8E93AA" fontSize="14px" fontWeight={400}>
                {userInfo?.birthdate}
              </Text>
              <Flex
                borderTop="1px solid #E7EAF0"
                mt="20px"
                direction="column"
                w="100%"
              >
                {userInfo?.tableData.map((el) => (
                  <Flex
                    key={el.title}
                    alignItems="center"
                    w="full"
                    justifyContent="space-between"
                    borderBottom="1px solid #E7EAF0"
                    height="max-content"
                  >
                    <Flex
                      py="15px"
                      px="24px"
                      alignItems="center"
                      justifyContent="center"
                      borderRight="1px solid #E7EAF0"
                      w="120px"
                    >
                      <Text color="#8E93AA" fontSize="14px" fontWeight={400}>
                        {el.title}
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent="flex-end"
                      alignItems="center"
                      py="15px"
                      px="24px"
                    >
                      <Text>{el.value}</Text>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          ) : (
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              rowGap="16px"
              maxWidth="260px"
            >
              <Flex align="center" justifyContent="center">
                <img
                  src="/assets/userPlaceholder-lg.svg"
                  alt="user placeholder"
                />
              </Flex>
              <Text fontWeight="500" fontSize="16px" color="secondary.main">
                Выберите пациента
              </Text>
              <Text fontWeight="400" fontSize="14px" color="grey">
                Используйте поиск по ПИНФЛ/серии паспорта, чтобы найти пациента{" "}
              </Text>
              <CButton
                variant="solid"
                text="Поиск"
                buttonType="button"
                padding="auto 20px"
                onClick={handleFocus}
              />
            </Flex>
          )}
        </Flex>
      ) : (
        <SkeletonPatientBox />
      )}
    </Box>
  );
}
