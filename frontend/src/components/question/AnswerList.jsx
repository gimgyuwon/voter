export const AnswerList = ({
  ANSWER_LIST,
  currentQuestion,
  answers,
  handleChange,
}) => {
  return (
    <div className="grid grid-cols-1 gap-2 w-full rounded-xl">
      {ANSWER_LIST.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => handleChange(currentQuestion.key, value)}
          className={`w-full px-4 py-2 rounded-xl ${
            answers[currentQuestion.key] === value
              ? "bg-main-100 text-black font-semibold border-[1.5px] border-main-500 shadow-md"
              : "bg-white text-gray-700 border-[1.5px] border-gray-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default AnswerList;
