import api from "../utils/Common/axios";

export const updateBookmark = async (policyId) => {
  const res = await api.post("/api/bookmark/toggle", { policy_id: policyId });
  return res.data;
};

export default updateBookmark;
