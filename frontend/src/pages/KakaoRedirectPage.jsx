import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import getKakaoAccessToken from "../api/auth";
import fetchUserInfo from "../api/user";
import Loading from "../components/Common/Loading/Loading";

export const KakaoRedirectPage = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    const fetchTokenAndUser = async () => {
      try {
        const { accessToken, refreshToken } = await getKakaoAccessToken(code);
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);

        const { nickname, ideologyScore, policyMatch, bookmarks } =
          await fetchUserInfo(accessToken);
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("ideologyScore", ideologyScore);
        localStorage.setItem("policyMatch", policyMatch);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

        // Zustand 전역 상태 관리
        login({
          user: { nickname },
          accessToken,
          refreshToken,
          testResult: { ideologyScore, policyMatch },
          bookmarks,
        });

        navigate("/");
      } catch (err) {
        console.error("로그인 실패:", err);
        alert("카카오 로그인에 실패했습니다.");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    if (code) {
      fetchTokenAndUser();
      window.history.replaceState({}, document.title, "/");
    }
  }, [navigate, login]);

  return loading ? <Loading /> : null;
};

export default KakaoRedirectPage;
