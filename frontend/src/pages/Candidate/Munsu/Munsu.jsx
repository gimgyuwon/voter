import { useNavigate } from "react-router-dom";
import munsu from "../../../assets/images/munsu.png";
import whiteLove from "../../../assets/icons/whiteLove.svg";
import { useState } from "react";
import { CANDIDATE_POLICY } from "../../../constant/Candidate/CandidatePolicy";
import MainPolicy from "../../../components/Candidate/Common/MainPolicy";
import Chip from "../../../components/Common/Chip/Chip";
import SubPolicy from "../../../components/Candidate/Common/SubPolicy";

export const Munsu = () => {
  const [selectedTag, setSelectedTag] = useState("전체");
  const navigate = useNavigate();

  const handleCheerClick = () => {
    navigate("/cheer");
  };

  const munsuPolicy = CANDIDATE_POLICY.filter(
    (item) => item.candidate === "김문수"
  );

  const mainPolicy = munsuPolicy.filter((item) => item.main);

  const subPolicy =
    selectedTag === "전체"
      ? munsuPolicy
      : munsuPolicy.filter((item) => item.prop?.includes(selectedTag));

  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Candidate Img */}
        <img src={munsu} alt="munsu" className="w-full h-fit object-contain" />

        {/* Cherring button */}
        <button className="flex justify-center items-center min-h-10 gap-x-2 bg-main-500 rounded-xl">
          <img src={whiteLove} alt="love" />
          <div
            className="text-[16px] text-white font-medium"
            onClick={() => handleCheerClick()}
          >
            응원하기
          </div>
        </button>
        {/* Main policy */}
        <MainPolicy policy={mainPolicy} />

        {/* Chip filter */}
        <Chip select={selectedTag} onSelect={setSelectedTag} />

        <div className="block text-xs text-sub-500">
          ※ 해당 후보자의 정책은 경선 기간 중 발언 내용 및 이후 공개된 입장을
          참고하여 정리되었습니다. 공식 공약집이 발표되는 대로 순차적으로
          업데이트할 예정입니다.
        </div>

        {/* Sub policy */}
        <SubPolicy policy={subPolicy} />
      </div>
    </>
  );
};

export default Munsu;
