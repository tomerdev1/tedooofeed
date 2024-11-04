import { Icons } from "../../../icons/icons";
import "./right-section.css";
import { Tabs, TabsProps } from "antd";
import IconWrapper from "../../IconWrapper";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";

const RightSection = () => {
  const getIcon = (id: number) => {
    var icon;
    switch (id) {
      case 1:
        icon = Icons.homeIcon;
        break;
      case 2:
        icon = Icons.messageIcon;
        break;
      case 3:
        icon = Icons.bellIcon;
        break;
      default:
        icon = Icons.homeIcon;
    }
    return (
      <IconWrapper
        fillColor="transparent"
        className="tab-icon"
        size={18}
        icon={icon}
      />
    );
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Home",
      icon: getIcon(1),
    },
    {
      key: "2",
      label: "Messaging",
      icon: getIcon(2),
    },
    {
      key: "3",
      label: "Notifications",
      icon: getIcon(3),
    },
  ];

  return (
    <div className="right-section">
      <Tabs className="custom-tabs" defaultActiveKey="1" items={items} />
      <ImageWrapper
        alt="user logo"
        src="/assets/images/user.jpeg"
        className="user-icon"
        isCircled
        size={40}
      />
    </div>
  );
};

export default RightSection;
