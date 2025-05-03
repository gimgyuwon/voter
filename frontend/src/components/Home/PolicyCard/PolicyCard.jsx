import React from "react";
import POLICY_CARD_LIST from "../../../constant/PolicyCardList";
import PolicyItem from "./PolicyItem/PolicyItem";

export const PolicyCard = () => {
  return (
    <div className="py-2 space-y-2">
      <div className="text-[18px]">주요 정책</div>
      <div className="grid gap-x-2 grid-cols-3 py-2">
        {POLICY_CARD_LIST.map((item, idx) => (
          <PolicyItem key={idx} {...item}></PolicyItem>
        ))}
      </div>
    </div>
  );
};

export default PolicyCard;
