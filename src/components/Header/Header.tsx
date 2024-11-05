import "./header.css";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

const Header = () => {
  return (
    <div className="header">
      <LeftSection />
      <RightSection />
    </div>
  );
};
export default Header;
