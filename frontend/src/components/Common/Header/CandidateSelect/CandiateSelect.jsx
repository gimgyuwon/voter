import Select from "react-select";
import CANDIDATE_OPTION from "../../../../constant/CandidateOption";
import { CustomOption, CustomSingleValue, CustomStyle } from "./CustomOption";
import { useLocation, useNavigate } from "react-router-dom";

export const CandidateSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOption =
    CANDIDATE_OPTION?.find((option) => option?.link === location.pathname) ||
    null;

  const handleChange = (selectOption) => {
    if (selectOption?.link) {
      navigate(selectOption.link);
    }
  };

  return (
    <Select
      className="font-medium flex justify-center"
      placeholder="후보자 이름을 선택하세요"
      options={CANDIDATE_OPTION}
      styles={CustomStyle}
      components={{
        Option: CustomOption,
        SingleValue: CustomSingleValue,
      }}
      menuPortalTarget={document.body}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};
