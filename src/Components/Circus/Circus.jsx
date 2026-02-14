import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useInView } from 'react-intersection-observer'; // Yangi qo'shildi
import "react-circular-progressbar/dist/styles.css";
import "./Circus.css";
import AnimatedContent from '../AnimatedContent/AnimatedContent';
import { useSelector } from 'react-redux';

function Circus({ value, label, icon }) {
    const mode = useSelector((state) => state.mode);
    const [currentValue, setCurrentValue] = useState(0);

    // ref - elementni kuzatish uchun, inView - ko'rinyaptimi yoki yo'q (true/false)
    const { ref, inView } = useInView({
        threshold: 0.5, // Elementning 50% qismi ko'ringanda ishga tushadi
        triggerOnce: true, // Faqat bir marta (birinchi marta ko'ringanda)
    });

    useEffect(() => {
        if (inView) {
            // Faqat element ekranga chiqganda qiymatni o'zgartiramiz
            setCurrentValue(value);
        }
    }, [inView, value]);

    return (
        <div ref={ref}> {/* Kuzatish uchun ref ni shu yerga beramiz */}
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
                            value={currentValue}
                            styles={buildStyles({
                                pathColor: "#3b82f6",
                                trailColor: "#e0e0e0",
                                strokeLinecap: "round",
                                pathTransitionDuration: 2, // 2 soniya davomida to'ladi
                            })}
                        />

                        <div className="skill__inside">
                            <img src={icon} alt={label} className="skill__icon" />
                            <span className="skill__percent">{currentValue}%</span>
                        </div>
                    </div>

                    <p className={mode ? "skill__label-black" : "skill__label"}>{label}</p>
                </div>
            </AnimatedContent>
        </div>
    );
}

export default Circus;