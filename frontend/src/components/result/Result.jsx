export const Result = ({ ideology, policyMatch }) => {
  return ideology && policyMatch ? (
    <div className="flex flex-col h-full justify-center pb-5 text-[18px] items-center text-center">
      <div className="text-[20px] font-semibold pb-2">
        당신의 정치 성향 결과
      </div>
      <p>
        당신은
        <strong className="bg-gray-800 text-white px-1 py-[1px] m-1">
          {ideology}
        </strong>
        성향 입니다.
      </p>
      <p>
        당신의 가치관에 가장 일치하는
        <br />
        공약을 제시한 후보는 <br />
        <strong className="bg-gray-800 text-white px-1 py-[1px] m-1">
          {policyMatch}
        </strong>
        입니다
      </p>
    </div>
  ) : (
    <div className="flex flex-col h-full justify-center items-center">
      결과 정보가 없습니다.
    </div>
  );
};

export default Result;
