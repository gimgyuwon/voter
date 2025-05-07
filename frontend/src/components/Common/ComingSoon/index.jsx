import korea from "../../../assets/icons/korea.svg";

export const ComingSoon = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center">
      <img src={korea} alt="korea" width={200} />
      <strong className="text-[20px] pb-2">
        본 페이지는 <br />
        현재 준비 중입니다.
      </strong>
      <p>
        대선 후보들의 공약이 공개되면 <br />
        순차적으로 업데이트될 예정입니다.
      </p>
    </div>
  );
};

export default ComingSoon;
