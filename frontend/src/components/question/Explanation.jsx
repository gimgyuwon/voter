import { ReactComponent as FoldIcon } from "../../assets/icons/fold.svg";

export const Explanation = ({
  currentQuestion,
  showExplanation,
  setShowExplanation,
}) => {
  return (
    <>
      {currentQuestion.explanation && (
        <div className="flex w-full justify-start flex-col">
          <button
            onClick={() => setShowExplanation((prev) => !prev)}
            className="flex items-center text-main-700 gap-x-2"
          >
            {showExplanation ? (
              <FoldIcon className="w-3 h-3 text-main-500" />
            ) : (
              <FoldIcon className="w-3 h-3 text-main-500 transform rotate-180" />
            )}

            {showExplanation ? "설명 닫기" : "설명 보기"}
          </button>

          {/* When Open */}
          {currentQuestion.explanation && showExplanation && (
            <div className="bg-main-300 rounded-xl text-black bg-opacity-25 p-3 whitespace-pre-line">
              {currentQuestion.explanation}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Explanation;
