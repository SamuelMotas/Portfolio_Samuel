import "./HeroImgStyles.css"

import React from 'react'

import IntoImg from "../assets/galaxie.jpg"

import { Link } from "react-router-dom"
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
                <a className="btn"><span>Télécharger mon CV     <FaDownload size={17} style={{ color: "#fff" }} /></span></a>
            </div>
        </div>
    </div>
}

export default HeroImg