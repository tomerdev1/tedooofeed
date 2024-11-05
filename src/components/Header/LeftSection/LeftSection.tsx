import ImageWrapper from "components/ImageWrapper/ImageWrapper";
import "./left-section.css";
import { Input } from "antd";
import IconWrapper from "components/IconWrapper";
import { Icons } from "icons/icons";

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
