//NPM Packages
import { Link } from "react-router-dom";

export default function HomePage() {

   
  return (
    <div className='home-screen'>
        <div className="hero">
            <div className="brand-container">
            <h1>BBQ House</h1>
            <span className='slogan'>Come hungry Leave happy</span>
            </div>
            <Link to="menu/">Go to Menu</Link>
        </div>
    </div>
  )
}
