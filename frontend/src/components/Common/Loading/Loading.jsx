const Loading = ({ message }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-75">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-main-500 rounded-full animate-spin mb-4" />
      <div>{message}...</div>
    </div>
  );
};

export default Loading;
