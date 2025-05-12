import jaemyeong from "../assets/images/jaemyeong.png";
import munsu from "../assets/images/munsu.png";
import junseok from "../assets/images/junseok.png";
import jaemyeongSquare from "../assets/images/jaemyeongSquare.png";
import junseokSquare from "../assets/images/junseokSquare.png";
import munsuSquare from "../assets/images/munsuSquare.png";
import jaemyeongTransparent from "../assets/images/jaemyeongTransparent.png";
import munsuTransparent from "../assets/images/munsuTransparent.png";
import junseokTransparent from "../assets/images/junseokTransparent.png";

export const CANDIDATE_OPTION = [
  {
    value: "이재명",
    label: "이재명",
    party: "더불어민주당",
    color: "#152484",
    link: "/candidate/jaemyeong",
    image: jaemyeong,
    squareImg: jaemyeongSquare,
    transparentImg: jaemyeongTransparent,
  },
  {
    value: "김문수",
    label: "김문수",
    party: "국민의힘",
    color: "#E61E2B",
    link: "/candidate/munsu",
    image: munsu,
    squareImg: munsuSquare,
    transparentImg: munsuTransparent,
  },
  {
    value: "이준석",
    label: "이준석",
    party: "개혁신당",
    color: "#FF7210",
    link: "/candidate/junseok",
    image: junseok,
    squareImg: junseokSquare,
    transparentImg: junseokTransparent,
  },
];

export default CANDIDATE_OPTION;
