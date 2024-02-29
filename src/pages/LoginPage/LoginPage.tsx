import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../modules/auth/auth.store";

export const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (authStore.isLoggedIn) navigate("/home", { replace: true });
  }, [navigate]);

  return <div>LoginPage</div>;
};
