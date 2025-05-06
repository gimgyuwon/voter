import axios from "axios";

export const fetchUserInfo = async (accessToken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user-info`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("유저 정보 요청 실패:", error);
    throw error;
  }
};

export default fetchUserInfo;
