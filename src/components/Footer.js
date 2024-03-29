import "./FooterStyles.css"

import React from 'react'

import { NavLink } from "react-router-dom"
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>H1T 1A5</p>
                            <p>Montréal</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            438-226-4780</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            smlmotas@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>Samuel Motas</h4>
                    <p> Développeur Web </p>
                    <div className="social">
                        <NavLink target="_blank" to="https://www.linkedin.com/in/samuel-motas-72229a168/">
                            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </NavLink>
                        <NavLink target="_blank" to="https://github.com/SamuelMotas">
                            <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer