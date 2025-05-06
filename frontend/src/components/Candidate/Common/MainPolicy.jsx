import React from "react";
import star from "../../../assets/icons/star.svg";
import bookmarker from "../../../assets/icons/bookmarker.svg";

export const MainPolicy = ({ policy }) => {
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
        {policy?.map((policy, idx) => (
          <div
            key={idx}
            className="relative flex flex-col justify-center w-full min-h-[86px] rounded-xl border-2 border-gray-200 p-3"
          >
            {/* bookmark button */}
            <img
              src={bookmarker}
              alt="bookmarker"
              width={30}
              className="absolute top-1.5 right-1.5"
            />

            {/* policy content */}
            <div className="text-[16px] flex flex-row justify-between items-end">
              {policy.title}
            </div>
            <div className="text-[14px] whitespace-pre-line">
              {policy.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPolicy;
