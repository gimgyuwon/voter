import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Chip from "../../components/Common/Chip/Chip";

export const ComparePage = () => {
  const location = useLocation();
  const passedProp = location?.state?.prop;
  const [selectedTag, setSelectedTag] = useState(passedProp || "전체");

  return (
    <>
      <Chip select={selectedTag} onSelect={setSelectedTag} />
    </>
  );
};

export default ComparePage;
