import React, { useState } from "react";
import AlertModal from "../Common/AlertModal/AlertModal";
import { QUESTION_LIST } from "../../constant/Question";
import { ANSWER_LIST } from "../../constant/AnswerList";

export const Question = ({ onSubmit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [alertMsg, setAlertMsg] = useState("");

  const currentQuestion = QUESTION_LIST[currentIndex];

  const handleChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (answers[currentQuestion.key] === undefined) {
      setAlertMsg("답변을 선택해주세요.");
      return;
    }
    if (currentIndex < QUESTION_LIST.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleSubmit = () => {
    const unanswered = QUESTION_LIST.filter(
      (q) => answers[q.key] === undefined
    );
    if (unanswered.length > 0) {
      setAlertMsg(
        `다음 문항에 응답하지 않았습니다: ${unanswered
          .map((q) => q.id)
          .join(", ")}번`
      );
      return;
    }
    onSubmit(answers);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-5">
        <div className="font-semibold text-lg text-center">
          정치 성향 & 공약 선호 테스트
        </div>
        <div className="text-[16px] text-gray-800">{currentQuestion.text}</div>

        <div className="grid grid-cols-1 gap-2 w-full rounded-xl">
          {ANSWER_LIST.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => handleChange(currentQuestion.key, value)}
              className={`w-full px-4 py-2 rounded-xl ${
                answers[currentQuestion.key] === value
                  ? "bg-blue-100 text-black border-[1.5px] border-blue-500"
                  : "bg-white text-gray-700 border-[1.5px] border-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="w-full flex justify-around space-x-3 pt-2">
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="w-full px-4 py-2 bg-white border-2 border-blue-500 text-blue-500 rounded-xl"
            >
              이전
            </button>
          )}

          {currentIndex < QUESTION_LIST.length - 1 ? (
            <button
              onClick={handleNext}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl"
            >
              다음
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl"
            >
              결과 보기
            </button>
          )}
        </div>
      </div>
      {alertMsg && (
        <AlertModal message={alertMsg} onClose={() => setAlertMsg("")} />
      )}
    </>
  );
};

export default Question;
