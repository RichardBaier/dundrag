import { Outlet, Link } from "react-router-dom";
import ProfPic from "../../assets/images/baseProfilePic.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navContainer">
          <div className="navPic">
            <Link to="/profile">
              <img src={ProfPic} alt="Logo" />
            </Link>
          </div>
          <ul className="navMenu">
            <li className="navMenuItem">
              <Link to="/bio">Bio</Link>
            </li>
            <li className="navMenuItem">
              <Link to="/items">Items</Link>
            </li>
            <li className="navMenuItem">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="navMenuItem">
              <Link to="/spells">Spells</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
