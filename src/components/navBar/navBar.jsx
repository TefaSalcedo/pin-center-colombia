import "./navBar.css"
import {bussinessName} from "../../constants"
import logo from "./logo.svg"


const NavBar = () => (
  <nav>
    <div className="logo-container">
      <img src={logo} alt="logo" />
      <span className="logo-name"> 
      {bussinessName}</span>
    </div>
  </nav>
  
);
export default NavBar;
