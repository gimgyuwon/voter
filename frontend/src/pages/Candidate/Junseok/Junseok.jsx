import React, { useState } from "react";
import junseok from "../../../assets/images/junseok.png";
import MainPolicy from "../../../components/Candidate/Common/MainPolicy";
import { CANDIDATE_POLICY } from "../../../constant/Candidate/CandidatePolicy";
import Chip from "../../../components/Common/Chip/Chip";
import SubPolicy from "../../../components/Candidate/Common/SubPolicy";
import whiteLove from "../../../assets/icons/whiteLove.svg";

export const Junseok = () => {
  const [selectedTag, setSelectedTag] = useState("전체");

  const junseokPolicy = CANDIDATE_POLICY.filter(
    (item) => item.candidate === " junseok"
  );

  const mainPolicy = junseokPolicy.filter(
    (item) => item.candidate === item.main
  );

  const subPolicy =
    selectedTag === "전체"
      ? junseokPolicy
      : junseokPolicy.filter((item) => item.prop?.includes(selectedTag));

  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Candidate Img */}
        <img
          src={junseok}
          alt="junseok"
          className="w-full h-fit object-contain"
        />

        {/* Cherring button */}
        <button className="flex justify-center items-center min-h-10 gap-x-2 bg-rose-500 rounded-xl">
          <img src={whiteLove} alt="love" />
          <div className="text-[16px] text-white font-medium">응원하기</div>
        </button>

        {/* Main policy */}
        <MainPolicy policy={mainPolicy} />

        {/* Chip filter */}
        <Chip select={selectedTag} onSelect={setSelectedTag} />

        {/* Sub policy */}
        <SubPolicy policy={subPolicy} />
      </div>
    </>
  );
};

export default Junseok;
