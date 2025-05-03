import React from "react";
import getKakaoAuthURL from "../../utils/kakaoAuthUrl";

export const SettingPage = () => {
  const handleLoginClick = () => {
    window.location.href = getKakaoAuthURL();
  };

  return (
    <>
      <button
        className="bg-blue-500 p-4 rounded-xl text-white font-semibold"
        onClick={handleLoginClick}
      >
        로그인
      </button>
    </>
  );
};

export default SettingPage;
