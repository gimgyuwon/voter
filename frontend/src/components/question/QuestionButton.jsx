export const QuestionButton = ({
  currentIndex,
  QUESTION_LIST,
  handlePrev,
  handleNext,
  handleSubmit,
}) => {
  return (
    <div className="w-full flex justify-around space-x-3 pt-2">
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="w-full px-4 py-2 bg-white border-2 border-main-500 text-main-500 rounded-xl"
        >
          이전
        </button>
      )}

      {currentIndex < QUESTION_LIST.length - 1 ? (
        <button
          onClick={handleNext}
          className="w-full px-4 py-2 bg-main-500 text-white rounded-xl"
        >
          다음
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-main-500 text-white rounded-xl"
        >
          결과 보기
        </button>
      )}
    </div>
  );
};

export default QuestionButton;
