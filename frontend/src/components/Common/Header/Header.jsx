import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CandidateSelect } from "./CandidateSelect/CandiateSelect";
import bookmarker from "../../../assets/icons/bookmarker.svg";
import focusBookmarker from "../../../assets/icons/focusBookmarker.svg";
import darkMode from "../../../assets/icons/darkMode.svg";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname == "/bookmark";
  const handleTitleClick = () => {
    navigate("/");
  };
  const handleBookmarkClick = () => {
    navigate("/bookmark");
  };

  return (
    <>
      <div className="header flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="p-2 text-[18px]" onClick={() => handleTitleClick()}>
            대선 2025
          </div>
          <div className="flex flex-row space-x-4">
            <img
              src={isActive ? focusBookmarker : bookmarker}
              alt="bookmarker"
              width={15}
              height={15}
              onClick={() => handleBookmarkClick()}
            />
            <img src={darkMode} alt="darkMode" width={35} height={35} />
          </div>
        </div>
      </div>
      <CandidateSelect />
    </>
  );
};

export default Header;
