import React, { useState } from "react";
import getKakaoAuthURL from "../../utils/kakaoAuthUrl";
import useAuthStore from "../../store/useAuthStore";
import AlertModal from "../../components/Common/AlertModal/AlertModal";
import Profile from "../../components/Setting/Profile/Profile";
import Info from "../../components/Setting/Info/Info";
import PolicyTest from "../../components/Home/PolicyTest/PolicyTest";

export const SettingPage = () => {
  const { user, bookmarks, testResult } = useAuthStore();
  const [alertOpen, setAlertOpen] = useState(!!user);

  const handleLoginClick = () => {
    window.location.href = getKakaoAuthURL();
  };
  const handleNextClick = () => {
    setAlertOpen(true);
  };

  if (!alertOpen) {
    return (
      <AlertModal
        message="로그인이 필요한 화면입니다"
        buttonMessage="로그인"
        onButtonClick={handleLoginClick}
        secondButtonMessage="나중에"
        onSecondButtonClick={handleNextClick}
      />
    );
  }

  return (
    <div className="space-y-3 pb-10">
      {/* 1st row: profile */}
      <Profile nickname={user?.nickname} />

      {/* 2nd row: Info */}
      <Info
        bookmarksCnt={bookmarks.length}
        ideology={testResult?.ideology}
        cheerCandidate={testResult?.cheerCandidate}
        policyMatch={testResult?.policyMatch}
      />

      {/* 3rd row: test */}
      <div>다시 테스트하고 싶다면?</div>
      <PolicyTest />
    </div>
  );
};

export default SettingPage;
