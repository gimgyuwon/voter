import React from "react";
import PolicyCard from "../components/Home/PolicyCard/PolicyCard";
import PolicyTest from "../components/Home/PolicyTest/PolicyTest";
import CandidateCarousel from "../components/Home/CandidateCarousel/CandidateCarousel";

export const HomePage = () => {
  return (
    <>
      <CandidateCarousel />
      <PolicyCard />
      <PolicyTest />
    </>
  );
};

export default HomePage;
