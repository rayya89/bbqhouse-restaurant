//NPM Packages
import { Link } from "react-router-dom";

export default function NavigationBar() {

    //Properties
    const LogoImage = require("../assets/pictures/bbqIcon.jpg");

  return (
    <nav>
        <Link to="/"><img src={LogoImage} alt="logo" /></Link>
        <ul>
            <Link to="menu/"><li>Menu</li></Link>
            <Link to="/contact"><li>Contact us</li></Link>
        </ul>
    </nav>
  )
}
