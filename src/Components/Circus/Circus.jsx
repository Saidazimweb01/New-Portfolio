import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Circus.css"
import AnimatedContent from '../AnimatedContent/AnimatedContent';
import { useSelector } from 'react-redux';
// import iconReact from "../../images/react.svg"

function Circus({ value, label, icon }) {
    const mode = useSelector((state) => state.mode)
    return (

        <>
            <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.4}
            >
                <div className="skill">
                    <div className="skill__circle">
                        <CircularProgressbar
                            value={value}
                            styles={buildStyles({
                                pathColor: "#3b82f6",
                                trailColor: "#e0e0e0",
                                // strokeLinecap: "round",  // orqa doira
                                strokeLinecap: "round",
                            })}
                        />


                        <div className="skill__inside">
                            <img src={icon} alt={label} className="skill__icon" />
                            <span className="skill__percent">{value}%</span>
                        </div>
                    </div>

                    <p className={mode ? "skill__label-black" : "skill__label"}>{label}</p>
                </div>
            </AnimatedContent>

        </>
    )
}

export default Circus