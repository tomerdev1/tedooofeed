import IconWrapper from "../../IconWrapper";
import "./left-section.css";
import { Icons } from "../../../icons/icons";
import { Input } from "antd";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";

const LeftSection = () => {
  return (
    <div className="left-section">
      <ImageWrapper size={40} src="/assets/images/logo.png" alt="logo" />
      <Input
        className="custom-input"
        prefix={<IconWrapper size={16} icon={Icons.searchIcon} />}
        placeholder="Search"
      />
    </div>
  );
};

export default LeftSection;
