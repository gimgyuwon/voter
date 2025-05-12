export const getIdeologyColor = (score) => {
  if (score >= 7.5) return "#152484"; // 강진보
  if (score >= 5.1) return "#60A5FA"; // 약진보
  if (score >= 4.9 && score <= 5.1) return "#A3A3A3"; // 중도
  if (score >= 2.5) return "#F87171"; // 약보수
  return "#E61E2B"; // 강보수
};

export default getIdeologyColor;
