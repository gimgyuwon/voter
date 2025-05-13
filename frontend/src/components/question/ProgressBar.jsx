export const ProgressBar = ({ currentIndex, QUESTION_LIST }) => {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full mb-6 space-y-1">
      <div
        className="h-full bg-main-500 transition-all duration-300 rounded-full"
        style={{
          width: `${((currentIndex + 1) / QUESTION_LIST.length) * 100}%`,
        }}
      />
      <div className="text-sm text-gray-600 text-center">
        {currentIndex + 1} / {QUESTION_LIST.length}번 문항
      </div>
    </div>
  );
};

export default ProgressBar;
