import React from "react";
import pinkLove from "../../assets/icons/pinkLove.svg";
import whiteLove from "../../assets/icons/whiteLove.svg";

export const Ranking = ({ rankingList }) => {
  const rankColor = (rank) => {
    return rank === 1
      ? "bg-yellow-400"
      : rank === 2
      ? "bg-gray-400"
      : "bg-orange-400";
  };

  return (
    <div className="pb-5 space-y-6">
      {/* Ranking Title */}
      <div className="text-[18px] font-semibold">실시간 응원 순위</div>
      {Object.entries(rankingList)?.map(([rank, candidate]) => (
        <div className="relative w-full flex flex-row gap-x-4 items-center justify-between">
          {/* Profile */}
          <img
            src={candidate?.squareImg}
            alt="candidate"
            className="rounded-xl justify-center w-[100px] bg-white"
          />

          {/* Rank badge */}
          <div
            className={`absolute -top-1.5 -left-3.5 w-8 h-8 rounded-full flex items-center justify-center text-center font-semibold text-white ${rankColor(
              parseInt(rank)
            )}`}
          >
            {rank}
          </div>

          {/* info */}
          <div>
            <div className="font-semibold text-[20px]">{candidate?.label}</div>
            <div>{candidate?.party}</div>
            <div className="flex flex-row gap-x-2">
              <img src={pinkLove} alt="pinkLove" width={20} />
              <div>99999</div>
            </div>
          </div>

          {/* cheer button */}
          <button className="bg-rose-500 rounded-full flex flex-row space-x-2 px-3 min-h-12 items-center">
            <img src={whiteLove} alt="whiteLove" />
            <div className="text-white">응원</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Ranking;
