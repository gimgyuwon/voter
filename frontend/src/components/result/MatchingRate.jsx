export const MatchingRate = ({ top3 }) => {
  return (
    <div className="w-full text-left">
      <h4 className="font-semibold mb-2">상위 매칭 후보</h4>
      <ul className="space-y-1">
        {top3.map((item, i) => (
          <li key={item.name} className="flex justify-between">
            <span>
              {i + 1}. {item.name}
            </span>
            <span>{item.score}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchingRate;
