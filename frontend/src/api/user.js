import axios from "axios";

export const fetchUserInfo = async (accessToken) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user-info`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.error("유저 정보 요청 실패:", err);
    throw err;
  }
};

export default fetchUserInfo;
