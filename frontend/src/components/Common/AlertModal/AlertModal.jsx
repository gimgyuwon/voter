export const AlertModal = ({
  message,
  buttonMessage,
  onButtonClick,
  secondButtonMessage,
  onSecondButtonClick,
}) => {
  return (
    // background
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* modal box */}
      <div className="bg-white rounded-xl shadow-md w-4/5 max-w-sm p-6 text-center">
        {/* message */}
        <div className="text-gray-800 text-base mb-4">{message}</div>
        {/* confirm button */}
        <div className="w-full flex flex-row gap-x-2">
          <button
            onClick={onButtonClick}
            className="w-full justify-center mt-2 px-4 py-2 bg-main-500 text-white rounded-xl"
          >
            {buttonMessage}
          </button>
          {secondButtonMessage && (
            <button
              onClick={onSecondButtonClick}
              className="w-full justify-center mt-2 px-4 py-2 bg-main-500 text-white rounded-xl"
            >
              {secondButtonMessage}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
