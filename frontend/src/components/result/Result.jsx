import React from "react";
import { Link } from "react-router-dom";
import CANDIDATE_OPTION from "../../constant/CandidateOption";
import MatchingRate from "./MatchingRate";
import BestMatch from "./BestMatch";
import BiasSpectrum from "./BiasSpectrum";
import Title from "./Title";
import CategoryScore from "./CategoryScore";

export const Result = ({ ideologyScore, categoryScore, policyMatch, top3 }) => {
  const candidate = CANDIDATE_OPTION.find((c) => c.value === policyMatch);

  const getLabel = (score) => {
    if (score >= 7.5) return "강한 진보";
    if (score >= 5.1) return "약한 진보";
    if (score >= 4.9 && score <= 5.1) return "중도";
    if (score >= 2.5) return "약한 보수";
    return "강한 보수";
  };

  const getIdeologyColor = (score) => {
    if (score >= 7.5) return "#152484"; // 강진보
    if (score >= 5.1) return "#60A5FA"; // 약진보
    if (score >= 4.9 && score <= 5.1) return "#A3A3A3"; // 중도
    if (score >= 2.5) return "#F87171"; // 약보수
    return "#E61E2B"; // 강보수
  };

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
