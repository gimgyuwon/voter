import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CandidateSelect } from "./CandidateSelect/CandiateSelect";
import { ReactComponent as BookmarkerIcon } from "../../../assets/icons/bookmarker.svg";
import { ReactComponent as FocusBookmarkerIcon } from "../../../assets/icons/focusBookmarker.svg";
import { ReactComponent as BrushIcon } from "../../../assets/icons/brush.svg";
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
        <div className="flex flex-row justify-between items-center">
          <div className="p-2 text-[18px]" onClick={() => handleTitleClick()}>
            대선 2025
          </div>
          <div className="flex flex-row space-x-4">
            {isActive ? (
              <FocusBookmarkerIcon
                alt="bookmarker"
                width={20}
                height={20}
                onClick={() => handleBookmarkClick()}
                className="text-main-500"
              />
            ) : (
              <BookmarkerIcon
                alt="bookmarker"
                width={20}
                height={20}
                onClick={() => handleBookmarkClick()}
                className="text-sub-500"
              />
            )}
            <BrushIcon
              alt="pallete"
              width={20}
              height={20}
              onClick={() => setThemeOpen(true)}
              className="text-sub-500"
            />
          </div>
        </div>
        <CandidateSelect />
      </div>

      {/* Theme Open  Modal */}
      {themeOpen && <ThemeModal setThemeOpen={setThemeOpen} />}
    </>
  );
};

export default Header;
