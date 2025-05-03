export const AlertModal = ({ message, onClose }) => {
  return (
    // background
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* modal box */}
      <div className="bg-white rounded-xl shadow-md w-4/5 max-w-sm p-6 text-center">
        {/* message */}
        <div className="text-gray-800 text-base mb-4">{message}</div>
        {/* confirm button */}
        <div className="w-full"></div>
        <button
          onClick={onClose}
          className="w-full justify-center mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
