import React from "react";
import { useNavigate } from "react-router-dom";
import submitSurvey from "../api/survey";
import { Question } from "../components/question/Question";
import useAuthStore from "../store/useAuthStore";

const QuestionPage = () => {
  const { accessToken, setTestResult } = useAuthStore();
  const navigate = useNavigate();

  const handleSurverySubmit = async (answers) => {
    try {
      const result = await submitSurvey(answers);

      // 서버에 결과 저장
      await fetch(`${process.env.REACT_APP_API_URL}/api/test-result`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });

      // 전역 상태 저장
      setTestResult(result);

      if (result) navigate("/result", { state: result });
    } catch (error) {
      console.error("에러 발생", error);
      alert("서버 통신 오류 발생");
    }
  };

  return <Question onSubmit={handleSurverySubmit} />;
};

export default QuestionPage;
