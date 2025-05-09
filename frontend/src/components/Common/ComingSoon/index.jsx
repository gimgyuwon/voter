import korea from "../../../assets/icons/korea.svg";

export const ComingSoon = ({ message }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center">
      <img src={korea} alt="korea" width={200} />
      <strong className="text-[20px] pb-2">
        본 페이지는 <br />
        현재 준비 중입니다.
      </strong>
      <p>{message}</p>
    </div>
  );
};

export default ComingSoon;
