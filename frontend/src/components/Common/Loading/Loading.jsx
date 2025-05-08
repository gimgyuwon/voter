import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center">
      <div className="spinner" />
      <div>로딩중...</div>
    </div>
  );
};

export default Loading;
