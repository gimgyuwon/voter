import React from "react";
import PolicyCard from "../components/Home/PolicyCard/PolicyCard";
import PolicyTest from "../components/Home/PolicyTest/PolicyTest";
import CandidateCarousel from "../components/Home/CandidateCarousel/CandidateCarousel";
import Loading from "../components/Common/Loading/Loading";

export const HomePage = () => {
  if (true) {
    return <Loading />;
  }
  return (
    <div className="pb-5 gap-y-4">
      <CandidateCarousel />
      <PolicyCard />
      <PolicyTest />
      <a href="/credit" className="block text-xs text-sub-500 pt-6">
        ※ 본 사이트에 사용된 후보자 이미지의 저작권은 다음 출처에 있으며, 모든
        권리는 원작자에게 있습니다. (클릭 시 전체 출처 확인)
      </a>
      <div className="text-xs text-gray-500 my-3 pt-3 border-t-[1px] border-sub-500">
        본 사이트는 특정 후보나 정당을 지지하거나 반대하지 않으며, 유권자의 알
        권리를 돕기 위한 <strong>공익적 목적</strong>으로 제작되었습니다. 상업적
        목적은 전혀 없으며, 수익을 창출하지 않는{" "}
        <strong>비영리 프로젝트</strong>입니다. 게시된 모든 정보는 공개된 출처를
        바탕으로 수집·정리되었으며, 선거관리위원회의 공직선거법 가이드라인을
        준수하고자 노력하고 있습니다. <br />
        오류나 수정이 필요한 정보는{" "}
        <a
          href="https://forms.gle/bNprjEaHwV5bSkSd9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main-700 underline"
        >
          의견 제시하기
        </a>
        를 통해 알려주세요.
      </div>
    </div>
  );
};

export default HomePage;
