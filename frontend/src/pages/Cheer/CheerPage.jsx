import React from "react";
import Ranking from "../../components/Cheer/Ranking";
import CANDIDATE_OPTION from "../../constant/CandidateOption";

export const CheerPage = () => {
  // Dummy ranking
  const rankingList = {
    1: CANDIDATE_OPTION[0],
    2: CANDIDATE_OPTION[2],
    3: CANDIDATE_OPTION[3],
  };

  return (
    <>
      {/* Ranking 1, 2, 3 */}
      <Ranking rankingList={rankingList} />
    </>
  );
};

export default CheerPage;
