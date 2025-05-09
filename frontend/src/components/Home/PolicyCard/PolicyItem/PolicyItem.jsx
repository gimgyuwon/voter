import React from "react";
import { useNavigate } from "react-router-dom";

export const PolicyItem = ({ IconComponent, label, iconWidth = 24, prop }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/compare", { state: { prop: prop } });
  };
  return (
    <div
      className="flex flex-col aspect-square bg-main-100 bg-opacity-25 justify-center items-center rounded-xl"
      onClick={() => handleClick()}
    >
      <IconComponent
        alt={label}
        height={24}
        width={iconWidth}
        className="pb-1 text-main-500"
      />
      <div>{label}</div>
    </div>
  );
};

export default PolicyItem;
