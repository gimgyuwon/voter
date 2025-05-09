import React from "react";
import CANDIDATE_OPTION from "../../constant/CandidateOption";
import { Link } from "react-router-dom";

export const Result = ({ ideology, policyMatch }) => {
  const candidate = CANDIDATE_OPTION.find((c) => c.value === policyMatch);

  return ideology && candidate ? (
    <div className="flex flex-col h-full justify-center pb-5 items-center text-center space-y-4">
      {/* 후보자 이미지 */}
      <img src={candidate.image} alt={candidate.label} className="w-full" />

      {/* 정치 성향 */}
      <div className="text-[20px] font-semibold">당신의 정치 성향 결과</div>
      <p>
        당신은
        <strong className="bg-gray-800 text-white px-1 py-[1px] m-1">
          {ideology}
        </strong>
        성향 입니다.
      </p>

      {/* 공약 일치 후보자 */}
      <p className="pb-2">
        당신의 가치관에 가장 일치하는 <br />
        공약을 제시한 후보는 <br />
        <strong
          className="p-1 py-[1px] m-1 text-white"
          style={{ backgroundColor: candidate.color }}
        >
          {candidate.label}
        </strong>
        입니다.
      </p>

      {/* 공약 보러가기 링크 */}
      <Link
        to={candidate.link}
        className="mt-2 px-4 py-2 rounded-xl text-white font-semibold"
        style={{ backgroundColor: candidate.color }}
      >
        {candidate.label} 후보 공약 보러 가기 →
      </Link>
    </div>
  ) : (
    <div className="flex flex-col h-full justify-center items-center">
      결과 정보가 없습니다.
    </div>
  );
};

export default Result;
