//NPM Packages
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className='home-screen'>
        <div className="hero">
            <div className="brand-container">
            <h1>Vegado</h1>
            <span className='slogan'>Come hungry Leave happy</span>
            </div>
            <Link to="Menu/">Go to Menu</Link>
        </div>
    </div>
  )
}
