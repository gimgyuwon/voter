import vote from "../../../assets/icons/vote.svg";

export const Profile = ({ nickname }) => {
  return (
    <div className="flex flex-row gap-x-2 pt-2">
      <img src={vote} alt="vote" className="p-2 mr-3" width={75} />
      <div className="flex flex-col gap-x-1 justify-center text-[20px]">
        <div className="text-[16px]">안녕하세요!</div>
        <div className="flex flex-row gap-x-1">
          <div>유권자</div>
          <div>
            <strong className="text-main-700">{nickname || "투표하자"}</strong>{" "}
            님
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
