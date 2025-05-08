import axios from "axios";
import useAuthStore from "../../store/useAuthStore";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

// 토큰 자동 삽입을 위한 요청 인터셉터
instance.interceptors.request.use(async (config) => {
  try {
    const token = await useAuthStore.getState().getValidAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (err) {
    console.error("Token 확인 중 오류:", err);
    return config;
  }
});

export default instance;
