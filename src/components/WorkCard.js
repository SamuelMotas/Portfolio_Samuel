import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"
import { FaGithub, FaGlobe } from "react-icons/fa"

const WorkCard = (props) => {
    return <div className="project-card">
        <img src={props.imgsrc} alt="" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">
                    <FaGlobe size={30} style={{ color: "#fff" }} />
                </NavLink>
                <NavLink to={props.source} className="btn">
                    <FaGithub size={30} style={{ color: "#fff" }} />
                </NavLink>
            </div>
        </div>
    </div>
}

export default WorkCard