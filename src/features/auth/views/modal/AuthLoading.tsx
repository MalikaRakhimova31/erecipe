import FullLoader from "@/components/Loaders/FullLoader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthLoading(): React.ReactElement {
  const navigate = useNavigate();
  const token = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if (token !== null) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  }, [token]);

  return <FullLoader />;
}
