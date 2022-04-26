//NPM Packages
import { Link } from "react-router-dom";

// good
export default function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="brand-container">
          <h1>BBQ House</h1>
          <span className="slogan">Come hungry Leave happy</span>
          <Link className="text-link" to="/menu">
            Go to Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
