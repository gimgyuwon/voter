import home from "../assets/icons/home.svg";
import compare from "../assets/icons/compare.svg";
import user from "../assets/icons/user.svg";
import love from "../assets/icons/love.svg";
import focusHome from "../assets/icons/focusHome.svg";
import focusCompare from "../assets/icons/focusCompare.svg";
import focusUser from "../assets/icons/focusUser.svg";
import focusLove from "../assets/icons/focusLove.svg";

export const FOOTER_ICON_LIST = [
  {
    icon: home,
    focusIcon: focusHome,
    label: "홈",
    link: "/",
    iconWidth: 22.5,
  },
  {
    icon: compare,
    focusIcon: focusCompare,
    label: "비교",
    link: "/compare",
    iconWidth: 25,
  },
  {
    icon: love,
    focusIcon: focusLove,
    label: "응원",
    link: "/cheer",
    iconWidth: 20,
  },
  {
    icon: user,
    focusIcon: focusUser,
    label: "내정보",
    link: "/setting",
    iconWidth: 18,
  },
];

export default FOOTER_ICON_LIST;
