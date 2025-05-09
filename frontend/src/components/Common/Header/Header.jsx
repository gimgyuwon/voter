import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CandidateSelect } from "./CandidateSelect/CandiateSelect";
import bookmarker from "../../../assets/icons/bookmarker.svg";
import focusBookmarker from "../../../assets/icons/focusBookmarker.svg";
// import darkMode from "../../../assets/icons/darkMode.svg";
import brush from "../../../assets/icons/brush.svg";
import ThemeModal from "../ThemeModal/ThemeModal";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === "/bookmark";
  const [themeOpen, setThemeOpen] = useState(false);

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
            <img
              src={brush}
              alt="pallete"
              width={20}
              height={20}
              onClick={() => setThemeOpen(true)}
            />
          </div>
        </div>
      </div>
      <CandidateSelect />

      {/* Theme Open  Modal */}
      {themeOpen && <ThemeModal setThemeOpen={setThemeOpen} />}
    </>
  );
};

export default Header;
