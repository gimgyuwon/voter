export const Title = ({ getIdeologyColor, ideologyScore, getLabel }) => {
  return (
    <>
      <h2 className="text-[24px] font-bold">정치 성향 결과</h2>
      <p>
        당신의 성향 점수는
        <span
          className="ml-2 px-2 py-1 rounded-full font-bold text-white"
          style={{ backgroundColor: getIdeologyColor(ideologyScore) }}
        >
          {ideologyScore} ({getLabel(ideologyScore)})
        </span>
      </p>
    </>
  );
};

export default Title;
