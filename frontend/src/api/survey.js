import axios from "../utils/Common/axios";

export const submitSurvey = async (data) => {
  const res = await axios.post("/api/calculate/", data);
  return res.data;
};

export default submitSurvey;
