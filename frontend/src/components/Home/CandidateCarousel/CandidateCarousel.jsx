import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CANDIDATE_OPTION } from "../../../constant/CandidateOption";

export const CandidateCarousel = () => {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  const handleSlide = useCallback((direction) => {
    setIdx(
      (prev) =>
        (prev + direction + CANDIDATE_OPTION.length) % CANDIDATE_OPTION.length
    );
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleSlide(1);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [idx, handleSlide]);

  const handleImgClick = () => {
    navigate(CANDIDATE_OPTION[idx].link);
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[150px] flex items-center justify-center rounded-xl">
        <img
          src={CANDIDATE_OPTION[idx].transparentImg}
          alt={`Slide ${idx}`}
          onClick={handleImgClick}
          className="w-full h-full object-contain"
        />
      </div>

      <button
        onClick={() => handleSlide(-1)}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={() => handleSlide(1)}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default CandidateCarousel;
