import React, { useState } from "react";
import AlertModal from "../Common/AlertModal/AlertModal";
import { QUESTION_LIST } from "../../constant/Question";
import { ANSWER_LIST } from "../../constant/AnswerList";
import Loading from "../Common/Loading/Loading";
import { ReactComponent as FoldIcon } from "../../assets/icons/fold.svg";

export const Question = ({ onSubmit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [alertMsg, setAlertMsg] = useState("");
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSubmit(answers);
    }, 3000);
  };

  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center space-y-5">
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

        <div className="font-semibold text-[20px] text-center">
          정치 성향 & 공약 선호 테스트
        </div>
        {/* 질문 */}
        <div className="text-[18px] text-gray-800">{currentQuestion.text}</div>

        {/* 설명 토글 버튼 */}
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

            {/* 설명 영역 (줄바꿈 처리 포함) */}
            {currentQuestion.explanation && showExplanation && (
              <div className="bg-main-300 rounded-xl text-black bg-opacity-25 p-3 whitespace-pre-line">
                {currentQuestion.explanation}
              </div>
            )}
          </div>
        )}

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
      </div>
      {alertMsg && (
        <AlertModal
          message={alertMsg}
          buttonMessage="확인"
          onButtonClick={() => setAlertMsg("")}
        />
      )}
      {loading && <Loading message="정치 성향 계산중" />}
    </>
  );
};

export default Question;
