export const Info = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-3">
        {/* bookmark policy */}
        <div className="bg-main-300 p-3 rounded-xl">
          <div className="text-main-700 text-[20px]">12개</div>
          <div className="text-gray-700">북마크한 공약</div>
        </div>
        {/* cheering candidate */}
        <div className="bg-main-300 p-3 rounded-xl">
          <div className="text-main-700 text-[20px]">홍길동</div>
          <div className="text-gray-700">응원하는 후보</div>
        </div>
      </div>

      <div>나에게 맞는 대선 주자</div>
      <div className="grid grid-cols-2 gap-x-3">
        {/* bookmark policy */}
        <div className="bg-main-300 p-3 rounded-xl">
          <div className="text-main-700 text-[20px]">중도</div>
          <div className="text-gray-700">나의 성향</div>
        </div>
        {/* cheering candidate */}
        <div className="bg-main-300 p-3 rounded-xl">
          <div className="text-main-700 text-[20px]">홍길동</div>
          <div className="text-gray-700">정책 성향</div>
        </div>
      </div>
    </>
  );
};

export default Info;
