import { useNavigate } from "react-router-dom";
import jaeyeon from "../../../assets/images/jaeyeon.png";
import whiteLove from "../../../assets/icons/whiteLove.svg";
import { useState } from "react";
import { CANDIDATE_POLICY } from "../../../constant/Candidate/CandidatePolicy";
import MainPolicy from "../../../components/Candidate/Common/MainPolicy";
import Chip from "../../../components/Common/Chip/Chip";
import SubPolicy from "../../../components/Candidate/Common/SubPolicy";

export const Jaeyeon = () => {
  const [selectedTag, setSelectedTag] = useState("전체");
  const navigate = useNavigate();

  const handleCheerClick = () => {
    navigate("/cheer");
  };

  const jaeyeonPolicy = CANDIDATE_POLICY.filter(
    (item) => item.candidate === "김재연"
  );

  const mainPolicy = jaeyeonPolicy.filter((item) => item.main);

  const subPolicy =
    selectedTag === "전체"
      ? jaeyeonPolicy
      : jaeyeonPolicy.filter((item) => item.prop?.includes(selectedTag));

  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Candidate Img */}
        <img
          src={jaeyeon}
          alt="jaeyeon"
          className="w-full h-fit object-contain"
        />

        {/* Cherring button */}
        <button className="flex justify-center items-center min-h-10 gap-x-2 bg-rose-500 rounded-xl">
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
          ※ 해당 후보자의 정책은 진보당 공식 블로그를 참고하여 정리되었습니다.
          공식 공약집이 발표되는 대로 순차적으로 업데이트할 예정입니다.
        </div>

        {/* Sub policy */}
        <SubPolicy policy={subPolicy} />
      </div>
    </>
  );
};

export default Jaeyeon;
