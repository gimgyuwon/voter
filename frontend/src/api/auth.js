import axios from "../utils/Common/axios";

export const getKakaoAccessToken = async (code) => {
  const res = await axios.post("/api/auth/kakao", { code });
  return res.data.access_token;
};

export default getKakaoAccessToken;
