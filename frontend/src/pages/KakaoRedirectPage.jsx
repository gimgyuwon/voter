import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const KakaoRedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    const fetchToken = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/kakao`,
          { code }
        );
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("nickname", res.data.nickname);
        navigate("/");
      } catch (e) {
        console.error(e);
      }
    };

    if (code) {
      fetchToken();
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  return null;
};

export default KakaoRedirectPage;
