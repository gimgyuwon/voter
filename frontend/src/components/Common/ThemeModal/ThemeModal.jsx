export const ThemeModal = ({ setThemeOpen }) => {
  const changeTheme = (themeName) => {
    const root = document.documentElement;
    root.classList.remove(
      "theme-red",
      "theme-yellow",
      "theme-green",
      "theme-blue",
      "theme-purple",
      "theme-brown",
      "theme-black"
    );

    if (themeName === "black") return;
    root.classList.add(`theme-${themeName}`);
  };

  return (
    // background
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* modal box */}
      <div className="bg-white rounded-xl shadow-md w-4/5 max-w-sm p-6 text-center space-y-4">
        <div className="text-[16px]">테마를 선택하세요</div>
        {/* color palette */}
        <div className="flex flex-row justify-center gap-x-1">
          {/* red */}
          <div
            className="rounded-full w-8 h-8 bg-red-500 hover:border-2 hover:ring-2 hover:ring-red-300 transition-all duration-150"
            onClick={() => changeTheme("red")}
          />
          {/* yellow */}
          <div
            className="rounded-full w-8 h-8 bg-yellow-500 hover:border-2 hover:ring-2 hover:ring-yellow-300 transition-all duration-150"
            onClick={() => changeTheme("yellow")}
          />
          {/* green */}
          <div
            className="rounded-full w-8 h-8 bg-green-500 hover:border-2 hover:ring-2 hover:ring-green-300 transition-all duration-150"
            onClick={() => changeTheme("green")}
          />
          {/* blue */}
          <div
            className="rounded-full w-8 h-8 bg-blue-500 hover:border-2 hover:ring-2 hover:ring-blue-300 transition-all duration-150"
            onClick={() => changeTheme("blue")}
          />
          {/* purple */}
          <div
            className="rounded-full w-8 h-8 bg-purple-500 hover:border-2 hover:ring-2 hover:ring-purple-300 transition-all duration-150"
            onClick={() => changeTheme("purple")}
          />
          {/* brown */}
          <div
            className="rounded-full w-8 h-8 bg-yellow-700 hover:border-2 hover:ring-2 hover:ring-yellow-500 transition-all duration-150"
            onClick={() => changeTheme("brown")}
          />
          {/* black */}
          <div
            className="rounded-full w-8 h-8 bg-gray-500 hover:border-2 hover:ring-2 hover:ring-black-300 transition-all duration-150"
            onClick={() => changeTheme("black")}
          />
        </div>

        <div className="w-full flex flex-row gap-x-2">
          <button
            className="w-full justify-center mt-2 px-4 py-2 bg-main-500 text-white rounded-xl"
            onClick={() => setThemeOpen(false)}
          >
            선택 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
