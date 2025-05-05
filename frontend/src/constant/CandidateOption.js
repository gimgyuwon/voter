import jaemyeong from "../assets/images/jaemyeong.png";
import munsu from "../assets/images/munsu.png";
import jaeyeon from "../assets/images/jaeyeon.png";
import junseok from "../assets/images/junseok.png";
import nakyeon from "../assets/images/nakyeon.png";
import jaemyeongSquare from "../assets/images/jaemyeongSquare.png";
import jaeyeonSquare from "../assets/images/jaeyeonSquare.png";
import junseokSquare from "../assets/images/junseokSquare.png";
import nakyeonSquare from "../assets/images/nakyeonSquare.png";
import munsuSquare from "../assets/images/munsuSquare.png";

export const CANDIDATE_OPTION = [
  {
    value: "이재명",
    label: "이재명",
    party: "더불어민주당",
    color: "#152484",
    link: "/candidate/jaemyeong",
    image: jaemyeong,
    squareImg: jaemyeongSquare,
  },
  {
    value: "김문수",
    label: "김문수",
    party: "국민의힘",
    color: "#E61E2B",
    link: "/candidate/munsu",
    image: munsu,
    squareImg: munsuSquare,
  },
  {
    value: "이준석",
    label: "이준석",
    party: "개혁신당",
    color: "#FF7210",
    link: "/candidate/junseok",
    image: junseok,
    squareImg: junseokSquare,
  },
  {
    value: "김재연",
    label: "김재연",
    party: "진보당",
    color: "#D6001C",
    link: "/candidate/jaeyeon",
    image: jaeyeon,
    squareImg: jaeyeonSquare,
  },
  {
    value: "이낙연",
    label: "이낙연",
    party: "새미래민주당",
    color: "#51BDC5",
    link: "/candidate/nakyeon",
    image: nakyeon,
    squareImg: nakyeonSquare,
  },
];

export default CANDIDATE_OPTION;
