import React from "react";
import {
  CHIP_STYLE,
  CANDIDATE_CHIP_STYLE,
} from "../../../constant/Candidate/Chip";
import bookmarker from "../../../assets/icons/bookmarker.svg";
import focusBookmarker from "../../../assets/icons/focusBookmarker.svg";
import useAuthStore from "../../../store/useAuthStore";
import updateBookmark from "../../../api/bookmark";

export const SubPolicy = ({ policy, compare = false }) => {
  const { bookmarks, toggleBookmark } = useAuthStore();

  const handleClickBookmark = async (id) => {
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
              <img
                src={isBookmarked ? focusBookmarker : bookmarker}
                alt={isBookmarked ? "focusBookmarker" : "bookmarker"}
                width={13}
                className="absolute top-4 right-4"
                onClick={() => handleClickBookmark(policy.id)}
              />
              {/* policy tag */}
              <div className="flex flex-row gap-x-1 pb-2">
                {policy.prop?.map((tag) => (
                  <div
                    className={`text-[14px] px-[8px] py-[1.5px] rounded-lg ${
                      CHIP_STYLE[tag] || "bg-main-500 text-white"
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
              <div className="text-[14px] text-blue-500 pt-2">
                상세보기 &gt;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubPolicy;
