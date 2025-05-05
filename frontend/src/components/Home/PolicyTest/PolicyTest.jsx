import React from "react";
import { useNavigate } from "react-router-dom";
import testRobot from "../../../assets/icons/testRobot.svg";

export const PolicyTest = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/question");
  };

  return (
    <div className="flex flex-col justify-center bg-main-300 h-[172px] py-3 px-5 space-y-2 rounded-xl">
      <div className="flex flex-row space-x-3 items-center">
        <img src={testRobot} alt="testRobot" width={30} height={24} />
        <div className="pt-1 text-[18px]">나의 성향 분석</div>
      </div>
      <div className="text-[#4B5563]">
        간단한 질문에 답하고 나와 맞는 후보를 찾아보세요
      </div>
      <button
        onClick={handleClick}
        className="w-full min-h-[44px] bg-main-500 rounded-xl text-white"
      >
        시작하기
      </button>
    </div>
  );
};

export default PolicyTest;
