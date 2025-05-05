import React from "react";
import { CHIP_OPTION } from "../../../constant/Candidate/Chip";

export const Chip = ({ select, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-x-1 gap-y-2">
      {CHIP_OPTION.map((gen) => (
        <div
          key={gen}
          className={`flex justify-center items-center w-fit h-[36px] p-3 rounded-3xl ${
            select === gen
              ? "bg-main-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onSelect(gen)}
        >
          {gen}
        </div>
      ))}
    </div>
  );
};

export default Chip;
