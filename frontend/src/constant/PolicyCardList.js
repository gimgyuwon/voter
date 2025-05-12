import { ReactComponent as FocusHomeIcon } from "../assets/icons/focusHome.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";
import { ReactComponent as WelfareIcon } from "../assets/icons/welfare.svg";
import { ReactComponent as SproutIcon } from "../assets/icons/sprout.svg";
import { ReactComponent as SaplingIcon } from "../assets/icons/sapling.svg";
import { ReactComponent as TreeIcon } from "../assets/icons/tree.svg";

export const POLICY_CARD_LIST = [
  { IconComponent: FocusHomeIcon, label: "주택", prop: "주택" },
  { IconComponent: EducationIcon, label: "교육", prop: "교육" },
  { IconComponent: WelfareIcon, label: "복지", iconWidth: 30, prop: "복지" },
  { IconComponent: SproutIcon, label: "2030", iconWidth: 25, prop: "2030" },
  { IconComponent: SaplingIcon, label: "4050", iconWidth: 25, prop: "4050" },
  { IconComponent: TreeIcon, label: "60+", iconWidth: 30, prop: "60+" },
];

export default POLICY_CARD_LIST;
