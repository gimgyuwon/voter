import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Chip from "../../components/Common/Chip/Chip";
import SubPolicy from "../../components/Candidate/Common/SubPolicy";
import { CANDIDATE_POLICY } from "../../constant/Candidate/CandidatePolicy";

export const ComparePage = () => {
  const location = useLocation();
  const passedProp = location?.state?.prop;
  const [selectedTag, setSelectedTag] = useState(passedProp || "전체");

  const subPolicy =
    selectedTag === "전체"
      ? CANDIDATE_POLICY
      : CANDIDATE_POLICY.filter((item) => item.prop?.includes(selectedTag));

  return (
    <div className="flex flex-col space-y-4">
      <Chip select={selectedTag} onSelect={setSelectedTag} />
      <SubPolicy policy={subPolicy} compare={true} />
    </div>
  );
};

export default ComparePage;
