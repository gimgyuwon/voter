import React, { useEffect, useState } from "react";
import pinkLove from "../../assets/icons/pinkLove.svg";
import whiteLove from "../../assets/icons/whiteLove.svg";
import RANK_COLOR from "../../constant/RankingColor";
import { cheerForCandidate, getCandidates } from "../../api/candidate";
import CANDIDATE_OPTION from "../../constant/CandidateOption";

export const Ranking = () => {
  const [rankingList, setRankingList] = useState({});

  const fetchRanking = async () => {
    const list = await getCandidates();

    const enrichedList = list.map((candidate) => {
      const match = CANDIDATE_OPTION.find((c) => c.value === candidate.name);
      return {
        ...candidate,
        ...match,
      };
    });

    const ranked = enrichedList
      .sort((a, b) => b.cheerCount - a.cheerCount)
      .reduce((acc, candidate, idx) => {
        acc[idx + 1] = candidate;
        return acc;
      }, {});
    setRankingList(ranked);
  };

  const handleCheer = async (name) => {
    await cheerForCandidate(name);
    fetchRanking();
  };

  useEffect(() => {
    fetchRanking();
  }, []);

  return (
    <div className="pb-5 space-y-6">
      {/* Ranking Title */}
      <div className="text-[18px] font-semibold">실시간 응원 순위</div>
      {Object.entries(rankingList)?.map(([rank, candidate]) => (
        <div
          className="relative w-full flex flex-row gap-x-4 items-center justify-between bg-main-100 rounded-xl p-3"
          key={rank}
        >
          <div className="flex flex-row items-center gap-x-4">
            {/* Profile */}
            <img
              src={candidate?.squareImg}
              alt="candidate"
              className="rounded-xl justify-center w-[90px] bg-white"
            />

            {/* Rank badge */}
            <div
              className={`absolute -top-1.5 -left-3.5 w-8 h-8 rounded-full flex items-center justify-center text-center font-semibold text-white ${
                RANK_COLOR?.[parseInt(rank)]
              }`}
            >
              {rank}
            </div>

            {/* info */}
            <div>
              <div className="font-semibold text-[20px]">
                {candidate?.label}
              </div>
              <div>{candidate?.party}</div>
              <div className="flex flex-row gap-x-2">
                <img src={pinkLove} alt="pinkLove" width={20} />
                <div>{candidate.cheerCount}</div>
              </div>
            </div>
          </div>

          {/* cheer button */}
          <button
            className="bg-main-500 rounded-full flex flex-row space-x-2 px-3 min-h-12 items-center"
            onClick={() => handleCheer(candidate.name)}
          >
            <img src={whiteLove} alt="whiteLove" />
            <div className="text-white">응원</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Ranking;
