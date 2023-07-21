import "./HeroImgStyles.css"

import React from 'react'

import IntoImg from "../assets/galaxie.jpg"
import downloadLink from "../assets/Web developer -  Samuel Motas - FR.pdf"

import { Link, NavLink } from "react-router-dom"
import { FaDownload } from "react-icons/fa"


const HeroImg = () => {
    return <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="IntroImg"></img>
        </div>
        <div className="content">
            <p>Bonjour et bienvenue sur mon portfolio.</p>
            <h4>À propos de moi:</h4>
            <div className="about-me">
                <p>Je m'appelle Samuel Motas, je suis passionné par <strong>les nouvelles technologies</strong> et <strong>la programmation.</strong></p>
                <p>Je conçois des sites web <strong>modernes, fonctionnels et accessibles.</strong></p>
                <p>Je suis spécialisé dans le développement <strong>front-end</strong>, mais j'ai également de bonnes connaissances en <strong>back-end</strong> et en <strong>bases de données.</strong></p>
            </div>
            <div>
                <Link to="/projects" className="btn">
                    Projets
                </Link>
                <NavLink href="http://localhost:3000/static/media/Web%20developer%20-%20%20Samuel%20Motas%20-%20FR.70c055ef300086a7ecdb.pdf" target="_blank" download="Web developer -  Samuel Motas - FR.pdf"className="btn" >
                    <a href="http://localhost:3000/static/media/Web%20developer%20-%20%20Samuel%20Motas%20-%20FR.70c055ef300086a7ecdb.pdf" target="_blank" download="Web developer -  Samuel Motas - FR.pdf" >
                        Télécharger mon CV  <FaDownload size={17} style={{ color: "#fff" }} />
                    </a>
                </NavLink>
            </div>
        </div>
    </div>
}

export default HeroImg