import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import getKakaoAccessToken from "../utils/kakaoLogin";
import fetchUserInfo from "../api/user";

export const KakaoRedirectPage = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    const fetchTokenAndUser = async () => {
      try {
        const accessToken = await getKakaoAccessToken(code);
        const { nickname, ideology, policyMatch } = await fetchUserInfo(
          accessToken
        );

        // localStorage 저장
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("nickname", nickname);

        // Zustand 전역 상태 관리
        login({
          user: { nickname },
          token: accessToken,
          testResult: { ideology, policyMatch },
        });

        navigate("/");
      } catch (err) {
        console.error("로그인 실패:", err);
        alert("카카오 로그인에 실패했습니다.");
        navigate("/");
      }
    };

    if (code) {
      fetchTokenAndUser();
      window.history.replaceState({}, document.title, "/");
    }
  }, [navigate, login]);

  return null;
};

export default KakaoRedirectPage;
