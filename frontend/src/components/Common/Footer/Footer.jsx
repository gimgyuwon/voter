import FooterItem from "./FooterItem/FooterItem";
import FOOTER_ICON_LIST from "../../../constant/FooterIconList";

export const Footer = () => {
  return (
    <div className="footer grid grid-cols-4 w-full items-center">
      {FOOTER_ICON_LIST.map((item, idx) => (
        <FooterItem
          key={idx}
          IconComponent={item.IconComponent}
          FocusIconComponent={item.FocusIconComponent}
          label={item.label}
          link={item.link}
          iconWidth={item.iconWidth}
        />
      ))}
    </div>
  );
};

export default Footer;
