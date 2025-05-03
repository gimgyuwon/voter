import React from "react";
import { useNavigate } from "react-router-dom";

export const FooterItem = ({ icon, label, link, iconWidth }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      className="flex flex-col items-center gap-1"
      onClick={() => handleClick()}
    >
      <img src={icon} alt={label} height={20} width={iconWidth} />
      <div>{label}</div>
    </div>
  );
};

export default FooterItem;
