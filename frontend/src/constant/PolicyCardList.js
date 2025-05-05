import home from "../assets/icons/home.svg";
import education from "../assets/icons/education.svg";
import welfare from "../assets/icons/welfare.svg";
import sprout from "../assets/icons/sprout.svg";
import sapling from "../assets/icons/sapling.svg";
import tree from "../assets/icons/tree.svg";

export const POLICY_CARD_LIST = [
  { icon: home, label: "주택", prop: "주택" },
  { icon: education, label: "교육", prop: "교육" },
  { icon: welfare, label: "복지", iconWidth: 30, prop: "복지" },
  { icon: sprout, label: "2030", iconWidth: 25, prop: "2030" },
  { icon: sapling, label: "4050", iconWidth: 25, prop: "4050" },
  { icon: tree, label: "60+", iconWidth: 30, prop: "60+" },
];

export default POLICY_CARD_LIST;
