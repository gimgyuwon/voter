import React from "react";
import { useNavigate } from "react-router-dom";

export const PolicyItem = ({ icon, label, iconWidth = 24, prop }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/compare", { state: { prop: prop } });
  };
  return (
    <div
      className="flex flex-col aspect-square bg-sub-100 justify-center items-center rounded-xl"
      onClick={() => handleClick()}
    >
      <img
        src={icon}
        alt={label}
        height={24}
        width={iconWidth}
        className="pb-1"
      />
      <div>{label}</div>
    </div>
  );
};

export default PolicyItem;
