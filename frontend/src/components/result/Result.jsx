import CANDIDATE_OPTION from "../../constant/CandidateOption";
import MatchingRate from "./MatchingRate";
import BestMatch from "./BestMatch";
import BiasSpectrum from "./BiasSpectrum";
import Title from "./Title";
import CategoryScore from "./CategoryScore";
import getLabel from "../../utils/getLabel";
import getIdeologyColor from "../../utils/getIdeologyColor";
import html2canvas from "html2canvas";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";

export const Result = ({ ideologyScore, categoryScore, policyMatch, top3 }) => {
  const candidate = CANDIDATE_OPTION.find((c) => c.value === policyMatch);

  const handleCapture = async () => {
    const target = document.getElementById("result-section");

    if (!target) return;

    const style = document.createElement("style");
    document.head.appendChild(style);
    style.sheet?.insertRule(
      "body > div:last-child img { display: inline-block; }"
    );

    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    style.remove();

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "정치성향_결과.png";
    link.click();
  };

  return (
    <>
      {ideologyScore && candidate ? (
        <div
          id="result-section"
          className="flex flex-col items-center space-y-6 max-w-xl text-center py-5 px-4"
          style={{
            fontFamily: "'Pretendard', sans-serif",
            lineHeight: "1.4",
            backgroundColor: "#ffffff",
          }}
        >
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
      )}
      <button
        className="mt-3 mb-10 px-4 py-2 text-white w-fit justify-center mx-auto rounded-xl flex flex-row items-center"
        style={{ backgroundColor: candidate?.color }}
        onClick={handleCapture}
      >
        <ShareIcon className="w-5 h-5 text-white mr-2" />
        결과 이미지 저장하기
      </button>
    </>
  );
};

export default Result;
