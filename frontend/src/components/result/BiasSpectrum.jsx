export const BiasSpectrum = ({ ideologyScore, getIdeologyColor }) => {
  return (
    <div className="w-full mt-2 items-center flex flex-col">
      <div className="flex w-[93%] flex-row justify-between text-[14px] mb-1">
        <div>강보수</div>
        <div>중도</div>
        <div>강진보</div>
      </div>
      <div className="relative w-[90%] justify-center items-center flex h-7 bg-gray-200 rounded-md">
        <div
          className="absolute top-0 h-7 w-2 rounded-xl"
          style={{
            left: `calc(${(ideologyScore / 10) * 100}% - 7px)`,
            backgroundColor: getIdeologyColor(ideologyScore),
          }}
        ></div>
      </div>
    </div>
  );
};

export default BiasSpectrum;
