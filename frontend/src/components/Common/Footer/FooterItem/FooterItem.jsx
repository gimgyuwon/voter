import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const FooterItem = ({ icon, focusIcon, label, link, iconWidth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === link;

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      className="flex flex-col items-center gap-1 h-[47px] justify-center"
      onClick={() => handleClick()}
    >
      <img
        src={isActive ? focusIcon : icon}
        alt={label}
        height={20}
        width={iconWidth}
      />
      <div className={`${isActive ? "text-main-500" : "text-black"}`}>
        {label}
      </div>
    </div>
  );
};

export default FooterItem;
