import CButton from "@/components/button/button";
import redirectToSSO from "@/helpers/login";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Auth(): React.ReactElement {
  return (
    <Box padding="16px" w="100%" height="92vh">
      <Flex alignItems="center" columnGap="16px" h="100vh">
        <Box
          borderRadius="8px"
          borderWidth="1px"
          borderColor="border"
          h="100%"
          w="25%"
          overflow="hidden"
        >
          <img
            src="/assets/background.png"
            alt="bg"
            className="h-full object-cover"
          />
        </Box>
        <Box
          bg="white"
          borderRadius="8px"
          px="100px"
          py="50px"
          h="100%"
          flex="1"
          w="75%"
        >
          <Flex
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
          >
            <Flex alignItems="center" columnGap="10px" color="secondary.main">
              <img src="/assets/logo.svg" alt="Compant Logo" />
              <Text textTransform="uppercase" fontWeight="bold">
                e-recept
              </Text>
            </Flex>
            <Flex
              direction="column"
              rowGap="24px"
              maxW="60%"
              alignItems="center"
            >
              <Text
                fontWeight="600"
                fontSize="32px"
                color="secondary.main"
                textAlign="center"
              >
                Добро пожаловать в E-recept!
              </Text>
              <Text
                color="grey"
                fontWeight={400}
                fontSize="18px"
                textAlign="center"
              >
                Пожалуйста, авторизируйтесь через единую систему Министерства
                Здравохранения
              </Text>
              <Box mt="32px">
                <CButton
                  text="Войти с помощью sso.ssv.uz"
                  variant="solid"
                  buttonType="button"
                  onClick={() => {
                    void redirectToSSO();
                  }}
                  rightIcon={<img src="/assets/ssologo.svg" alt="sso logo" />}
                />
              </Box>
            </Flex>
            <Flex />
          </Flex>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
}
