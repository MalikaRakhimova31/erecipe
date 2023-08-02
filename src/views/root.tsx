import "@/lib/to-capital-case";
import SideBar from "@/components/SideBar/SideBar";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { getToken } from "@/features/auth/api";
import { useCallback, useEffect } from "react";
import Header from "@/components/Header/Header";
import PermissionProvider from "@/providers/permission-provider";
import { type userRoleProps } from "@/types";

export default function Root(): React.ReactElement {
  const mutation = useMutation({ mutationFn: getToken });
  const verifier = localStorage.getItem("pkce_code_verifier");

  const getQueryParams = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("code") != null) {
      const code = urlParams.get("code");

      const data = {
        grant_type: "authorization_code",
        code: code ?? "",
        code_verifier: verifier ?? "",
        redirect_uri: "http://localhost:3000",
        client_id: import.meta.env.VITE_CLIENT_ID,
      };

      mutation.mutate(data);
      if (mutation.isSuccess) {
        console.log("mutation.data", mutation);
      }
      if (mutation.isError) {
        console.log("mutation.error", mutation.error);
      }
    }
  }, [verifier]);

  useEffect(() => {
    void getQueryParams();
  }, [getQueryParams]);

  const role: userRoleProps = import.meta.env.VITE_ROLE;
  return (
    <PermissionProvider permission={role}>
      <Flex>
        <SideBar />
        <Flex direction="column" flex={1}>
          <Header />
          <Outlet />
        </Flex>
      </Flex>
    </PermissionProvider>
  );
}
