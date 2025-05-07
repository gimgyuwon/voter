import api from "../utils/Common/axios";

export const getCandidates = async () => {
  const res = await api.get("/api/candidates/");
  return res.data;
};

export const cheerForCandidate = async (name) => {
  const res = await api.post("/api/cheer", { name });
  return res.data;
};
