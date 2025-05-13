export const Title = ({ getIdeologyColor, ideologyScore, getLabel }) => {
  return (
    <>
      <h2 className="text-[24px] font-bold">정치 성향 결과</h2>
      <div className="flex flex-row justify-center items-center">
        <div>당신의 성향 점수는</div>
        <span
          className="ml-2 px-2 py-1 rounded-full font-bold text-white text-sm leading-tight inline-flex items-center justify-center"
          style={{ backgroundColor: getIdeologyColor(ideologyScore) }}
        >
          {ideologyScore} ({getLabel(ideologyScore)})
        </span>
      </div>
    </>
  );
};

export default Title;
