import { Outlet, Link } from "react-router-dom";
import ProfPic from '../../assets/images/baseProfilePic.png';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navContainer">
          <a href="/profile" className="navPic">
            <img src={ProfPic} alt="Logo" />
          </a> 
          <ul className="navMenu">
            <li><Link to="/bio">Bio</Link></li>
            <li><Link to="/items">Items</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/spells">Spells</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export { Navbar };