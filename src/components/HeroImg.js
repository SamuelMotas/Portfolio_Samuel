import "./HeroImgStyles.css"

import React from 'react'

import IntoImg from "../assets/galaxie.jpg"

import { Link } from "react-router-dom"

const HeroImg = () => {
    return <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="IntroImg"></img>
        </div>
        <div className="content">
            <p>Hi, Je suis Samuel Motas</p>
            <h1>Développeur Front.</h1>
            <div>
                <Link to="/project" className="btn">
                     Projets
                </Link>
                <Link to="/contact" className="btn btn-light">
                    Contact
                </Link>
            </div>
        </div>
    </div>
}

export default HeroImg