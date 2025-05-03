import React from "react";
import { useLocation } from "react-router-dom";
import Result from "../components/result/Result";

export const ResultPage = () => {
  const location = useLocation();
  const { ideology, policyMatch } = location.state || {};

  return <Result ideology={ideology} policyMatch={policyMatch} />;
};

export default ResultPage;
