import axios from "axios";

export const getKakaoAccessToken = async (code) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/auth/kakao`,
    { code }
  );
  return {
    accessToken: res.data.access_token,
    refreshToken: res.data.refresh_token,
  };
};

export default getKakaoAccessToken;
