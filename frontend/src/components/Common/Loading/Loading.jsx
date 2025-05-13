const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-main-500 rounded-full animate-spin mb-4" />
      <div>로딩중...</div>
    </div>
  );
};

export default Loading;
