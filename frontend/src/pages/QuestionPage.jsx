import React from "react";
import { useNavigate } from "react-router-dom";
import { submitSurvey } from "../api";
import { Question } from "../components/question/Question";

const QuestionPage = () => {
  const navigate = useNavigate();

  const handleSurverySubmit = async (answers) => {
    try {
      const result = await submitSurvey(answers);
      if (result) navigate("/result", { state: result });
    } catch (error) {
      console.error("에러 발생", error);
      alert("서버 통신 오류 발생");
    }
  };

  return <Question onSubmit={handleSurverySubmit} />;
};

export default QuestionPage;
