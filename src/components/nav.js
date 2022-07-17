import * as React from "react"
import { Link } from 'gatsby'
import "../styles/layout.css"

// markup
const Nav = () => {
  return (
    <div>
        <nav>
            <img></img>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/FAQ">FAQ</Link>
            <Link to="/careers">Careers</Link>
        </nav>
    </div>
  )
}

export default Nav