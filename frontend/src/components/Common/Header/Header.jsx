import React from "react";
import { useNavigate } from "react-router-dom";
import { CandidateSelect } from "./CandidateSelect/CandiateSelect";
import bookmarker from "../../../assets/icons/bookmarker.svg";
import darkMode from "../../../assets/icons/darkMode.svg";

export const Header = () => {
  const navigate = useNavigate();
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
              src={bookmarker}
              alt="bookmarker"
              width={13}
              height={13}
              onClick={() => handleBookmarkClick()}
            />
            <img src={darkMode} alt="darkMode" width={30} height={30} />
          </div>
        </div>
      </div>
      <CandidateSelect />
    </>
  );
};

export default Header;
