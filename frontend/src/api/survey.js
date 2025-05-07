import api from "../utils/Common/axios";

export const submitSurvey = async (data) => {
  const res = await api.post("/api/calculate/", data);
  return res.data;
};

export default submitSurvey;
