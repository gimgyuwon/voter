import {
  CHIP_STYLE,
  CANDIDATE_CHIP_STYLE,
} from "../../../constant/Candidate/Chip";
import { ReactComponent as BookmarkerIcon } from "../../../assets/icons/bookmarker.svg";
import { ReactComponent as FocusBookmarkerIcon } from "../../../assets/icons/focusBookmarker.svg";
import useAuthStore from "../../../store/useAuthStore";
import updateBookmark from "../../../api/bookmark";
import AlertModal from "../../Common/AlertModal/AlertModal";
import getKakaoAuthURL from "../../../utils/kakaoAuthUrl";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SubPolicy = ({ policy, compare = false }) => {
  const { user, bookmarks, toggleBookmark } = useAuthStore();
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const handleLoginClick = () => {
    window.location.href = getKakaoAuthURL();
  };

  const handleNextClick = () => {
    setAlertModalOpen(false);
  };

  const handleClickBookmark = async (id) => {
    console.log("user", user);

    if (!user) {
      setAlertModalOpen(true);
      return;
    }

    try {
      await updateBookmark(id);
      toggleBookmark(id);
    } catch (err) {
      console.error("북마크 실패", err);
      alert("북마크 처리에 실패했습니다.");
    }
  };

  return (
    <div className="pb-5">
      {/* Sub policy contents */}
      <div className="flex flex-col space-y-2 w-full border-b-gray-500 border-1">
        {/* Sub policy card */}
        {policy?.map((policy, idx) => {
          const isBookmarked = bookmarks.includes(policy.id);

          return (
            <div
              key={policy.id}
              className="relative flex flex-col justify-center w-full min-h-[134px] rounded-xl border-2 border-gray-200 p-3"
            >
              {/* bookmark button */}
              {isBookmarked ? (
                <FocusBookmarkerIcon
                  alt="FocusBookmarkerIcon"
                  width={13}
                  className="absolute top-4 right-4 text-main-500"
                  onClick={() => handleClickBookmark(policy.id)}
                />
              ) : (
                <BookmarkerIcon
                  alt="BookmarkerIcon"
                  width={13}
                  className="absolute top-4 right-4 text-sub-500"
                  onClick={() => handleClickBookmark(policy.id)}
                />
              )}

              {/* policy tag */}
              <div className="flex flex-row gap-x-1 pb-2">
                {policy.prop?.map((tag) => (
                  <div
                    className={`text-[14px] px-[8px] py-[1.5px] rounded-lg ${
                      CHIP_STYLE[tag] ?? "bg-main-500 text-white"
                    }`}
                    key={tag}
                  >
                    {tag}
                  </div>
                ))}
                {compare && (
                  <div
                    className={`text-[14px] px-[8px] py-[1.5px] rounded-lg font-semibold text-white ${
                      CANDIDATE_CHIP_STYLE[policy?.candidate] ||
                      "bg-main-500 text-white"
                    }`}
                  >
                    {policy?.candidate}
                  </div>
                )}
              </div>

              {/* policy content */}
              <div className="text-[16px]">{policy.title}</div>
              <div className="text-[14px] whitespace-pre-line">
                {policy.content}
              </div>
              {/* <div className="text-[14px] text-blue-500 pt-2">
                상세보기 &gt;
              </div> */}
            </div>
          );
        })}
      </div>
      {alertModalOpen && (
        <AlertModal
          message="공약을 북마크하려면 로그인해 주세요"
          buttonMessage="로그인"
          onButtonClick={handleLoginClick}
          secondButtonMessage="나중에"
          onSecondButtonClick={handleNextClick}
        />
      )}
    </div>
  );
};

export default SubPolicy;
