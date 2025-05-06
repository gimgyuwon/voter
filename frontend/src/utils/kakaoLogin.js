import axios from "axios";

export const getKakaoAccessToken = async (code) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/auth/kakao`,
    { code }
  );

  return response.data.access_token;
};

export default getKakaoAccessToken;
