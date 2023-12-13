/* eslint-disable @typescript-eslint/restrict-template-expressions */
import "@/lib/to-capital-case";
import SideBar from "@/components/SideBar/SideBar";
import { Flex } from "@chakra-ui/react";
import { Navigate, Outlet, useMatch } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { getToken } from "@/features/auth/api";
import { useCallback, useEffect } from "react";
import Header from "@/components/Header/Header";
import getItem from "@/helpers/get-item";

export default function Root(): React.ReactElement {
  const mutation = useMutation({ mutationFn: getToken });
  const verifier = localStorage.getItem("pkce_code_verifier");
  const role = getItem("role");

  console.log("role", role);

  const getQueryParams = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("code") != null) {
      const code = urlParams.get("code");

      const data = {
        grant_type: "authorization_code",
        code: code ?? "",
        code_verifier: verifier ?? "",
        redirect_uri: import.meta.env.VITE_REDIRECT_URL,
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

  const match = useMatch("/");

  if (match !== null) {
    return (
      <Navigate
        to={`${role === "pharmacy" ? "/erecipes" : "/dashboard"}`}
        replace
      />
    );
  }

  return (
    <Flex>
      <SideBar />
      <Flex direction="column" flex={1}>
        <Header />
        <Outlet />
      </Flex>
    </Flex>
  );
}
