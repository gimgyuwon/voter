export const getLabel = (score) => {
  if (score >= 7.5) return "강한 진보";
  if (score >= 5.1) return "약한 진보";
  if (score >= 4.9 && score <= 5.1) return "중도";
  if (score >= 2.5) return "약한 보수";
  return "강한 보수";
};

export default getLabel;
