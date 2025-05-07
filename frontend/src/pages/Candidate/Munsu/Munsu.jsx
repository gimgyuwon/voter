import { useNavigate } from "react-router-dom";
import ComingSoon from "../../../components/Common/ComingSoon";
import munsu from "../../../assets/images/munsu.png";
import whiteLove from "../../../assets/icons/whiteLove.svg";
import { useState } from "react";
import AlertModal from "../../../components/Common/AlertModal/AlertModal";

export const Munsu = () => {
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
        <ComingSoon />
      </AlertModal>
    );
  }

  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Candidate Img */}
        <img src={munsu} alt="munsu" className="w-full h-fit object-contain" />

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

export default Munsu;
