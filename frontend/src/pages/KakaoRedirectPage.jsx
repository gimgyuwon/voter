import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import axios from "axios";

export const KakaoRedirectPage = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    const fetchToken = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/kakao`,
          { code }
        );

        const { access_token, nickname } = res.data;

        // LocalStorage
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("nickname", nickname);

        // Zustand
        login({ nickname }, access_token);

        navigate("/");
      } catch (e) {
        console.error(e);
      }
    };

    if (code) {
      fetchToken();
      window.history.replaceState({}, document.title, "/");
    }
  }, [navigate, login]);

  return null;
};

export default KakaoRedirectPage;
