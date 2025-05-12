import React from "react";
import CANDIDATE_OPTION from "../../constant/CandidateOption";
import MatchingRate from "./MatchingRate";
import BestMatch from "./BestMatch";
import BiasSpectrum from "./BiasSpectrum";
import Title from "./Title";
import CategoryScore from "./CategoryScore";
import getLabel from "../../utils/getLabel";
import getIdeologyColor from "../../utils/getIdeologyColor";

export const Result = ({ ideologyScore, categoryScore, policyMatch, top3 }) => {
  const candidate = CANDIDATE_OPTION.find((c) => c.value === policyMatch);

  return ideologyScore && candidate ? (
    <div className="flex flex-col items-center space-y-6 max-w-xl text-center pb-10">
      {/* 정치 성향 결과 */}
      <div className="space-y-5 w-full">
        {/* 타이틀 개요 */}
        <Title
          getIdeologyColor={getIdeologyColor}
          getLabel={getLabel}
          ideologyScore={ideologyScore}
        />

        {/* 성향 스펙트럼 */}
        <BiasSpectrum
          ideologyScore={ideologyScore}
          getIdeologyColor={getIdeologyColor}
        />
      </div>

      {/* 후보 일치 결과 */}
      <BestMatch candidate={candidate} />

      {/* 상위 3명 매칭률 */}
      <MatchingRate top3={top3} />

      {/* 카테고리 점수 */}
      <CategoryScore categoryScore={categoryScore} />
    </div>
  ) : (
    <div className="flex flex-col h-full justify-center items-center">
      결과 정보가 없습니다.
    </div>
  );
};

export default Result;
