import axios from "../utils/Common/axios";

export const updateBookmark = async (policyId) => {
  const res = await axios.post("/api/bookmark/toggle", { policy_id: policyId });
  return res.data;
};

export default updateBookmark;
