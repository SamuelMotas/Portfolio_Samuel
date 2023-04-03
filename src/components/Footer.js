import "./FooterStyles.css"

import React from 'react'

import { Link } from "react-router-dom"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>4280 rue Belanger</p>
                            <p>Montréal</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            438-226-4780</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            samuel.mts@outlook.fr</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>Samuel Motas</h4>
                    <p> Développeur Front-End </p>
                    <div className="social">
                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <Link to="https://github.com/SamuelMotas">
                            <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </Link>
                        <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer