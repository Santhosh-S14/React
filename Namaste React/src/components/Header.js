import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus ? "Online ✅" : "Offline 🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
