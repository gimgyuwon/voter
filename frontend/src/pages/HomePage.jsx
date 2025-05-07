import React from "react";
import PolicyCard from "../components/Home/PolicyCard/PolicyCard";
import PolicyTest from "../components/Home/PolicyTest/PolicyTest";
import CandidateCarousel from "../components/Home/CandidateCarousel/CandidateCarousel";

export const HomePage = () => {
  return (
    <div className="pb-5">
      <CandidateCarousel />
      <PolicyCard />
      <PolicyTest />
    </div>
  );
};

export default HomePage;
