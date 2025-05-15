import { useState } from "react";
import AlertModal from "../Common/AlertModal/AlertModal";
import { QUESTION_LIST } from "../../constant/Question";
import { ANSWER_LIST } from "../../constant/AnswerList";
import Loading from "../Common/Loading/Loading";
import QuestionButton from "./QuestionButton";
import AnswerList from "./AnswerList";
import Explanation from "./Explanation";
import ProgressBar from "./ProgressBar";

export const Question = ({ onSubmit, setLoading, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [alertMsg, setAlertMsg] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
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
    onSubmit(answers);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-5">
        {/* Progress Bar */}
        <ProgressBar
          currentIndex={currentIndex}
          QUESTION_LIST={QUESTION_LIST}
        />

        {/* Title */}
        <div className="font-semibold text-[20px] text-center">
          정치 성향 & 공약 선호 테스트
        </div>

        {/* Question */}
        <div className="text-[18px] text-gray-800">{currentQuestion.text}</div>

        {/* Explanation */}
        <Explanation
          currentQuestion={currentQuestion}
          showExplanation={showExplanation}
          setShowExplanation={setShowExplanation}
        />

        {/* Answer List */}
        <AnswerList
          ANSWER_LIST={ANSWER_LIST}
          currentQuestion={currentQuestion}
          answers={answers}
          handleChange={handleChange}
        />

        {/* Question Button */}
        <QuestionButton
          handlePrev={handlePrev}
          handleSubmit={handleSubmit}
          handleNext={handleNext}
          currentIndex={currentIndex}
          QUESTION_LIST={QUESTION_LIST}
        />
      </div>
      {/* Alert Modal */}
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
