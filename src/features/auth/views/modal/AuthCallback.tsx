/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// /* eslint-disable @typescript-eslint/restrict-template-expressions */
// /* eslint-disable func-names */
// /* eslint-disable prefer-destructuring */
// /* eslint-disable prefer-arrow-callback */
// /* eslint-disable no-constant-condition */
// /* eslint-disable @typescript-eslint/restrict-plus-operands */
// import FullLoader from "@/components/Loaders/FullLoader";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import redirectToSSO from "../../../../helpers/login";
// import useAuthStore from "../../../../stores/authStore";

// export default function AuthCallback(): any {
//   const [response, setResponse] = useState(null);
//   const setUserInfo = useAuthStore((state: any) => state.setUserInfo);
//   const navigate = useNavigate();
//   const getToken = (url: any, params: any, success: any, error: any): any => {
//     const request = new XMLHttpRequest();
//     request.open("POST", url, true);
//     request.setRequestHeader(
//       "Content-Type",
//       "application/x-www-form-urlencoded; charset=UTF-8",
//     );
//     request.onload = function () {
//       let body = {};
//       try {
//         body = JSON.parse(request.response);
//       } catch (e) {}
//       if (request.status === 200) {
//         success(request, body);
//       } else {
//         error(request, body);
//         console.log("get token error");
//         void redirectToSSO();
//       }
//     };
//     request.onerror = function () {
//       error(request, {});
//       // console.log("get token error")
//     };
//     const body = Object.keys(params)
//       .map((key) => `${key}=${params[key]}`)
//       .join("&");
//     request.send(body);
//   };

//   const parseQueryString = (string: any): any => {
//     if (string === "") {
//       return {};
//     }
//     const segments = string.split("&").map((s: any) => s.split("="));
//     const queryString: any = {};
//     segments.forEach((s: any) => (queryString[s[0]] = s[1]));
//     return queryString;
//   };

//   useEffect(() => {
//     const q = parseQueryString(window.location.search.substring(1));
//     console.log(q);

//     if (q.code) {
//       if (true) {
//         getToken(
//           "https://test-sso.ssv.uz/oauth/token",
//           {
//             grant_type: "authorization_code",
//             code: q.code,
//             client_id: "97c3e637-6441-4cbe-95fa-5cbf6fb907a3",
//             redirect_uri: "http://localhost:3000/auth/callback",
//             code_verifier: localStorage.getItem("pkce_code_verifier"),
//             claims: "organization",
//           },
//           function (body: any) {
//             axios
//               .get(`${import.meta.env.VITE_BASE_URL}/api/v1/get-token/`, {
//                 params: {
//                   token: body.access_token,
//                 },
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//               })
//               .then((res) => {
//                 console.log("token res", res);
//                 localStorage.setItem("ACCESS_TOKEN", res.data.token);
//                 setUserInfo(res.data);
//                 navigate("/");
//               })
//               .catch((err) => {
//                 console.log("res error", err);
//               });
//           },
//           function (error: any) {
//             if (error !== null) {
//               setResponse(error.error_description);
//             }
//           },
//         );
//       }
//     }
//   }, []);

//   return response || <FullLoader />;
// }

/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import FullLoader from "@/components/Loaders/FullLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      if (true) {
        getToken(
          "https://test-sso.ssv.uz/oauth/token",
          {
            grant_type: "authorization_code",
            code: q.code,
            client_id: "97c3e637-6441-4cbe-95fa-5cbf6fb907a3",
            redirect_uri: "http://localhost:3000/auth/callback",
            code_verifier: localStorage.getItem("pkce_code_verifier"),
            claims: "organization",
          },
          function (_request: any, body: any) {
            axios
              .get(`${import.meta.env.VITE_BASE_URL}/api/v1/get-token/`, {
                params: {
                  token: body.access_token,
                },
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((res) => {
                console.log("token res", res);
                localStorage.setItem("ACCESS_TOKEN", res.data.token);
                setUserInfo(res.data);
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
    }
    console.log("respoinse", response);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    response ?? <FullLoader />
  );
}
