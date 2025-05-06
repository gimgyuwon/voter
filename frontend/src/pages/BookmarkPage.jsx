import AlertModal from "../components/Common/AlertModal/AlertModal";
import useAuthStore from "../store/useAuthStore";
import { useState } from "react";
import getKakaoAuthURL from "../utils/kakaoAuthUrl";
import { useNavigate } from "react-router-dom";
import SubPolicy from "../components/Candidate/Common/SubPolicy";
import { CANDIDATE_POLICY } from "../constant/Candidate/CandidatePolicy";
import Chip from "../components/Common/Chip/Chip";

export const BookmarkPage = () => {
  const navigate = useNavigate();
  const { user, bookmarks } = useAuthStore();
  // !user 로 변경 필요
  const [alertOpen, setAlertOpen] = useState(!!user);
  const [selectedTag, setSelectedTag] = useState("전체");

  const handleLoginClick = () => {
    window.location.href = getKakaoAuthURL();
  };

  const handleNextClick = () => {
    navigate("/");
  };

  const bookmarkPolicy = CANDIDATE_POLICY.filter((policy) =>
    bookmarks.includes(policy.id)
  );

  const subPolicy =
    selectedTag === "전체"
      ? bookmarkPolicy
      : bookmarkPolicy.filter((item) => item.prop?.includes(selectedTag));

  if (alertOpen) {
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
    <div className="space-y-4">
      <div className="text-[18px] py-1">
        북마크한 공약 {bookmarks.length || 0}개
      </div>
      <Chip select={selectedTag} onSelect={setSelectedTag} />
      <SubPolicy policy={subPolicy} compare={true} />
    </div>
  );
};

export default BookmarkPage;
