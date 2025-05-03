export const getKakaoAuthURL = () => {
  const KAKAO_BASE_URL = process.env.REACT_APP_KAKAO_BASE_URL;
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const KAKAO_REDIRCT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  return `${KAKAO_BASE_URL}?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRCT_URI}&response_type=code`;
};

export default getKakaoAuthURL;
