import "./navBar.css"
import {bussinessName} from "../constants"

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 300 300"
  >
    <circle
      cx="150"
      cy="150"
      r="140"
      stroke="#1c1c1c"
      strokeWidth="20"
      fill="#"
    />
    <polygon points="50,150 150,50 250,150" fill="#1c1c1c" />
    <polygon points="50,150 150,250 250,150" fill="#ffffff" />
  </svg>
);

const App = () => (
  <nav>
    <div className="logo-container">
      <Logo />
      <span className="logo-name"> 
      {bussinessName}</span>
    </div>
  </nav>
  
);
export default App;
