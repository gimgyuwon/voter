import React from "react";
import { useNavigate } from "react-router-dom";
import { CandidateSelect } from "./CandidateSelect/CandiateSelect";
import bookmarker from "../../../assets/icons/bookmarker.svg";
import darkMode from "../../../assets/icons/darkMode.svg";

export const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="header flex flex-col">
        <div className="flex flex-row pb-2 justify-between">
          <div className="p-2 text-[18px]" onClick={() => handleClick()}>
            대선 2025
          </div>
          <div className="flex flex-row space-x-2">
            <img src={bookmarker} alt="bookmarker" width={30} height={30} />
            <img src={darkMode} alt="darkMode" width={30} height={30} />
          </div>
        </div>
        <CandidateSelect />
      </div>
    </>
  );
};

export default Header;
