import React from "react";
import './style.css';

 function SkillsBar ({name,speed,acceleration,weight,handling,traction}) {
    return (
        <div className="container">
            <h1 className="title-text">{name}</h1>
            <div className="skill-box">
                <span className="title">Speed</span>
                <div className="skill-bar">
                    <span className="skill-per speed">
                        <span className="tooltip">{speed}%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Acceleration</span>
                <div className="skill-bar">
                    <span className="skill-per acceleration">
                        <span className="tooltip">{acceleration}%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Weight</span>
                <div className="skill-bar">
                    <span className="skill-per weight">
                        <span className="tooltip">{weight}%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Handling</span>
                <div className="skill-bar">
                    <span className="skill-per handling">
                        <span className="tooltip">{handling}%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Traction</span>
                <div className="skill-bar">
                    <span className="skill-per traction">
                        <span className="tooltip">{traction}%</span>
                    </span>
                </div>
            </div>
        </div>
    )
 }

 export default SkillsBar;