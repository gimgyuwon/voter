import { useLocation } from "react-router-dom";
import Result from "../components/result/Result";

export const ResultPage = () => {
  const location = useLocation();
  const { ideologyScore, categoryScore, policyMatch, top3 } =
    location.state || {};

  return (
    <Result
      ideologyScore={ideologyScore}
      categoryScore={categoryScore}
      policyMatch={policyMatch}
      top3={top3}
    />
  );
};

export default ResultPage;
