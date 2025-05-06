import React from "react";
import getKakaoAuthURL from "../../utils/kakaoAuthUrl";
import useAuthStore from "../../store/useAuthStore";
import AlertModal from "../../components/Common/AlertModal/AlertModal";
import Profile from "../../components/Setting/Profile/Profile";
import Info from "../../components/Setting/Info/Info";
import PolicyTest from "../../components/Home/PolicyTest/PolicyTest";

export const SettingPage = () => {
  const handleLoginClick = () => {
    window.location.href = getKakaoAuthURL();
  };
  const { user } = useAuthStore();

  if (!user) {
    return (
      <AlertModal
        message="로그인이 필요한 화면입니다"
        buttonMessage="로그인"
        onButtonClick={handleLoginClick}
      />
    );
  }

  return (
    <div className="space-y-3 pb-10">
      {/* 1st row: profile */}
      <Profile nickname={user?.nickname} />

      {/* 2nd row: Info */}
      <Info />

      {/* 3rd row: test */}
      <div>다시 테스트하고 싶다면?</div>
      <PolicyTest />
    </div>
  );
};

export default SettingPage;
