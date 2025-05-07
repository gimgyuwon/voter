import axios from "../utils/Common/axios";

export const fetchUserInfo = async () => {
  try {
    const res = await axios.get("/api/user-info");
    return res.data;
  } catch (err) {
    console.error("유저 정보 요청 실패:", err);
    throw err;
  }
};

export default fetchUserInfo;
