import { useNavigate } from "react-router-dom";
import ComingSoon from "../../../components/Common/ComingSoon";
import nakyeon from "../../../assets/images/nakyeon.png";
import whiteLove from "../../../assets/icons/whiteLove.svg";
import { useState } from "react";
import AlertModal from "../../../components/Common/AlertModal/AlertModal";

export const Nakyeon = () => {
  const [alertOpen, setAlertOpen] = useState(true);
  const navigate = useNavigate();

  const handleCheerClick = () => {
    navigate("/cheer");
  };

  if (alertOpen) {
    return (
      <AlertModal
        buttonMessage="확인"
        onButtonClick={() => setAlertOpen(false)}
      >
        <ComingSoon
          message={
            <>
              아직 예비후보로 등록되지 않은 후보입니다.
              <br />
              공식 등록 이후 업데이트될 예정입니다.
            </>
          }
        />
      </AlertModal>
    );
  }

  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Candidate Img */}
        <img
          src={nakyeon}
          alt="nakyeon"
          className="w-full h-fit object-contain"
        />

        {/* Cherring button */}
        <button className="flex justify-center items-center min-h-10 gap-x-2 bg-rose-500 rounded-xl">
          <img src={whiteLove} alt="love" />
          <div
            className="text-[16px] text-white font-medium"
            onClick={() => handleCheerClick()}
          >
            응원하기
          </div>
        </button>
      </div>
    </>
  );
};

export default Nakyeon;
