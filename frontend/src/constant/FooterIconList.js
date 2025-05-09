import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as CompareIcon } from "../assets/icons/compare.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";
import { ReactComponent as LoveIcon } from "../assets/icons/love.svg";
import { ReactComponent as FocusHomeIcon } from "../assets/icons/focusHome.svg";
import { ReactComponent as FocusCompareIcon } from "../assets/icons/focusCompare.svg";
import { ReactComponent as FocusUserIcon } from "../assets/icons/focusUser.svg";
import { ReactComponent as FocusLoveIcon } from "../assets/icons/focusLove.svg";

export const FOOTER_ICON_LIST = [
  {
    IconComponent: HomeIcon,
    FocusIconComponent: FocusHomeIcon,
    label: "홈",
    link: "/",
    iconWidth: 22.5,
  },
  {
    IconComponent: CompareIcon,
    FocusIconComponent: FocusCompareIcon,
    label: "비교",
    link: "/compare",
    iconWidth: 25,
  },
  {
    IconComponent: LoveIcon,
    FocusIconComponent: FocusLoveIcon,
    label: "응원",
    link: "/cheer",
    iconWidth: 20,
  },
  {
    IconComponent: UserIcon,
    FocusIconComponent: FocusUserIcon,
    label: "내정보",
    link: "/setting",
    iconWidth: 18,
  },
];

export default FOOTER_ICON_LIST;
