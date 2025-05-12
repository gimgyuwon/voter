import star from "../../../assets/icons/star.svg";
import { ReactComponent as BookmarkerIcon } from "../../../assets/icons/bookmarker.svg";
import { ReactComponent as FocusBookmarkerIcon } from "../../../assets/icons/focusBookmarker.svg";
import useAuthStore from "../../../store/useAuthStore";

export const MainPolicy = ({ policy }) => {
  const { bookmarks, toggleBookmark } = useAuthStore();

  return (
    <div className="border-gray-300 border-b-[1px] pb-5">
      {/* Main policy Title */}
      <div className="flex flex-row pb-2 space-x-1">
        <img src={star} alt="star" />
        <div className="text-[18px]">주요 공약</div>
      </div>

      {/* Main policy contents */}
      <div className="flex flex-col space-y-2 w-full border-b-gray-500 border-1">
        {/* Main policy card */}
        {policy?.map((policy, idx) => {
          const isBookmarked = bookmarks.includes(policy.id);
          return (
            <div
              key={idx}
              className="relative flex flex-col justify-center w-full min-h-[86px] rounded-xl border-2 border-gray-200 p-3"
            >
              {/* bookmark button */}
              {isBookmarked ? (
                <FocusBookmarkerIcon
                  alt="FocusBookmarkerIcon"
                  width={13}
                  className="absolute top-4 right-4 text-main-500"
                  onClick={() => toggleBookmark(policy.id)}
                />
              ) : (
                <BookmarkerIcon
                  alt="BookmarkerIcon"
                  width={13}
                  className="absolute top-4 right-4 text-sub-500"
                  onClick={() => toggleBookmark(policy.id)}
                />
              )}

              {/* policy content */}
              <div className="text-[16px] flex flex-row justify-between items-end">
                {policy.title}
              </div>
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

export default MainPolicy;
