import { Link } from "react-router-dom";

export const BestMatch = ({ candidate }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">가장 잘 맞는 후보</h3>
      <img
        src={candidate.squareImg}
        alt={candidate.label}
        className="w-40 h-40 object-cover rounded-full mx-auto border-4"
        style={{ borderColor: candidate.color }}
      />
      <p className="text-md">
        당신의 가치관과 가장 잘 맞는 후보는
        <br />
        <span
          className="px-2 py-1 rounded text-white font-semibold"
          style={{ backgroundColor: candidate.color }}
        >
          {candidate.label}
        </span>{" "}
        입니다.
      </p>
      <Link
        to={candidate.link}
        className="inline-block mt-1 px-4 py-2 rounded-xl text-white font-medium shadow"
        style={{ backgroundColor: candidate.color }}
      >
        {candidate.label} 후보 공약 보러 가기 →
      </Link>
    </div>
  );
};

export default BestMatch;
