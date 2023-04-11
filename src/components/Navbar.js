import "./NavbarStyles.css"

import React, { useState } from "react"
import { Link } from "react-router-dom"

import { FaBars, FaHome, FaTimes, } from "react-icons/fa"


const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <FaHome size={40} style={{ color: "#fff" }}/>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Profil</Link>
        </li>
        <li>
          <Link to="/projects">Projets</Link>
        </li>
        <li>
          <Link to="/skills">Compétences</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick=
        {handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }}
          />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar