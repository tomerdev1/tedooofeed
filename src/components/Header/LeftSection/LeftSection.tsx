import IconWrapper from "../../icon/icon";
import "./left-section.css";
import { Icons } from "../../../icons/icons";
import { Input } from "antd";

const LeftSection = () => {
  return (
    <div className="left-section">
      <img
        height={"40px"}
        width={"40px"}
        src="/assets/images/logo.png"
        alt="logo"
      />
      <Input
        className="custom-input"
        prefix={<IconWrapper size={16} icon={Icons.searchIcon} />}
        placeholder="Search"
      />
    </div>
  );
};

export default LeftSection;
