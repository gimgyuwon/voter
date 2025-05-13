export const CategoryScore = ({ categoryScore }) => {
  const getBarColor = (delta) => {
    if (delta < 0) return "#E61E2B"; // 우파
    if (delta > 0) return "#2563EB"; // 좌파
    return "#A3A3A3"; // 중도
  };

  return (
    <div className="w-full space-y-4">
      <h4 className="font-semibold text-center text-[18px]">카테고리별 성향</h4>
      {Object.entries(categoryScore).map(([category, score]) => {
        const delta = +(score - 3).toFixed(2);
        const width = (Math.abs(delta) / 2) * 50;
        const barColor = getBarColor(delta);
        const label = delta === 0 ? "중도" : delta;

        return (
          <div key={category} className="space-y-1">
            <div className="text-sm font-semibold mb-1 text-center">
              {category}
            </div>
            <div className="relative h-10 bg-gray-200 rounded-full w-full">
              {/* 좌파 바 */}
              {delta > 0 && (
                <div
                  className="absolute top-0 left-[50%] h-10 rounded-l-full flex items-center justify-end pr-2 text-white font-semibold"
                  style={{
                    width: `${width}%`,
                    transform: "translateX(-100%)",
                    backgroundColor: barColor,
                  }}
                >
                  <span>{Math.abs(label)}</span>
                </div>
              )}
              {/* 우파 바 */}
              {delta < 0 && (
                <div
                  className="absolute top-0 left-[50%] h-10 rounded-r-full flex items-center justify-start pl-2 text-white font-semibold"
                  style={{
                    width: `${width}%`,
                    backgroundColor: barColor,
                  }}
                >
                  <span>{Math.abs(label)}</span>
                </div>
              )}
              {/* 중앙선 */}
              {/* <div className="absolute left-1/2 top-0 h-10 w-[1px] bg-black-500"></div> */}
              {/* 좌우 텍스트 (내부) */}
              <div className="absolute left-2 pl-1 top-0 h-10 flex items-center font-semibold">
                좌
              </div>
              <div className="absolute right-2 pr-1 top-0 h-10 flex items-center font-semibold">
                우
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryScore;
