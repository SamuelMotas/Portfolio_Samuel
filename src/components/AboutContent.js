import "./AboutContentStyles.css"

import React from "react"
import { Link } from "react-router-dom"

const AboutContent = () => {
    return <div className="about">
        <div className="left">
            <h1>Qui je suis?</h1>
            <p>Je suis developpeur front-end junior tout droit sortie de la formation OpenclassRoom</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
        </div>
    </div>
}

export default AboutContent