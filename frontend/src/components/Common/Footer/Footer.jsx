import home from "../../../assets/icons/home.svg";
import compare from "../../../assets/icons/compare.svg";
import user from "../../../assets/icons/user.svg";
import love from "../../../assets/icons/love.svg";
import FooterItem from "./FooterItem/FooterItem";

export const Footer = () => {
  const footerList = [
    { icon: home, label: "홈", link: "/", iconWidth: 22.5 },
    { icon: compare, label: "비교", link: "/compare", iconWidth: 25 },
    { icon: love, label: "응원", link: "/cheer", iconWidth: 20 },
    { icon: user, label: "내정보", link: "/setting", iconWidth: 18 },
  ];

  return (
    <div className="footer grid grid-cols-4 w-full">
      {footerList.map((item, idx) => (
        <FooterItem
          key={idx}
          icon={item.icon}
          label={item.label}
          link={item.link}
          iconWidth={item.iconWidth}
        />
      ))}
    </div>
  );
};

export default Footer;
