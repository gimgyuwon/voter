import React from "react";
import PolicyCard from "../components/Home/PolicyCard/PolicyCard";
import PolicyTest from "../components/Home/PolicyTest/PolicyTest";
import CandidateCarousel from "../components/Home/CandidateCarousel/CandidateCarousel";

export const HomePage = () => {
  return (
    <div className="pb-5">
      <CandidateCarousel />
      <PolicyCard />
      <PolicyTest />
      <a href="/credit" className="block text-xs text-sub-500 py-6">
        ※ 본 사이트에 사용된 후보자 이미지의 저작권은 다음 출처에 있으며, 모든
        권리는 원작자에게 있습니다. (클릭 시 전체 출처 확인)
      </a>
    </div>
  );
};

export default HomePage;
