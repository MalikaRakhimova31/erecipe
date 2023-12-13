/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// /* eslint-disable @typescript-eslint/restrict-template-expressions */
// /* eslint-disable func-names */
// /* eslint-disable prefer-destructuring */
// /* eslint-disable prefer-arrow-callback */
// /* eslint-disable no-constant-condition */
// /* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { groups } from "@/config/permissions";
import setItem from "@/helpers/set-item";
import redirectToSSO from "../../../../helpers/login";
import useAuthStore from "../../../../stores/authStore";

export default function AuthCallback(): any {
  const [response, setResponse] = useState(null);
  const setUserInfo = useAuthStore((state: any) => state.setUserInfo);
  const navigate = useNavigate();
  const getToken = (url: any, params: any, success: any, error: any) => {
    const request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8",
    );
    request.onload = function () {
      let body = {};
      try {
        body = JSON.parse(request.response);
      } catch (e) {}
      if (request.status === 200) {
        success(request, body);
      } else {
        error(request, body);
        console.log("get token error");
        void redirectToSSO();
      }
    };
    request.onerror = function () {
      error(request, {});
      // console.log("get token error")
    };
    const body = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");
    request.send(body);
  };

  const parseQueryString = (string: any) => {
    if (string === "") {
      return {};
    }
    const segments = string.split("&").map((s: any) => s.split("="));
    const queryString: any = {};
    segments.forEach((s: any) => (queryString[s[0]] = s[1]));
    return queryString;
  };

  useEffect(() => {
    const q = parseQueryString(window.location.search.substring(1));
    console.log(q);

    // if (q.error) {
    //   // alert("Error returned from authorization server: " + q.error);
    //   document.getElementById(
    //     "error_details",
    //   ).innerText = `${q.error}\n\n${q.error_description}`;
    //   document.getElementById("error").classList = "";
    // }

    if (q.code !== null) {
      getToken(
        "https://test-sso.ssv.uz/oauth/token",
        {
          grant_type: "authorization_code",
          code: q.code,
          client_id: `${import.meta.env.VITE_CLIENT_ID}`,
          redirect_uri: `${import.meta.env.VITE_REDIRECT_URL}/auth/callback`,
          code_verifier: localStorage.getItem("pkce_code_verifier"),
          claims: "organization",
        },
        function (_request: any) {
          axios
            .get(`${import.meta.env.VITE_BASE_URL}/api/v1/get-token/`, {
              params: {
                // token: body.access_token,
                token: "rKaO28fQmQx83F7W39vk",
              },
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              localStorage.setItem("access_token", res.data.token);
              setUserInfo(res.data);
              const userGroup = res.data.user.groups.find(
                (group: { name: string }) => group.name in groups,
              );
              if (typeof userGroup !== "undefined") {
                setItem("role", userGroup.name);
              }
              navigate("/");
            })
            .catch((err) => {
              console.log("res error", err);
            });
        },
        function (_request: any, error: any) {
          setResponse(error.error_description);
        },
      );
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    response ?? <div />
  );
}
