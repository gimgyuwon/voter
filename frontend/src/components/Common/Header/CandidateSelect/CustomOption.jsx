import { components } from "react-select";

export const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;

  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{ color: data.color }}
      className="p-2"
    >
      {data.label}
    </div>
  );
};

export const CustomSingleValue = (props) => {
  const { data } = props;
  return (
    <components.SingleValue {...props}>
      <div style={{ color: data.color }} className="p-2">
        {data.label}
      </div>
    </components.SingleValue>
  );
};

export const CustomStyle = {
  control: (provided) => ({
    ...provided,
    width: "100%",
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
    left: "50%",
    transform: "translateX(-50%)",
  }),
};
