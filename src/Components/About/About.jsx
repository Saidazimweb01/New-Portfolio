import "./About.css"

import React from 'react'
import user from "../../images/user.png"
import ShinyText from "../ShinyText/ShinyText"
import SplitText from "../SplitText/SplitText"
import AnimatedContent from "../AnimatedContent/AnimatedContent"
import { useSelector } from "react-redux"

function About() {


    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    const mode = useSelector((state) => state.mode)
    return (
        <>
            <section id="about" className={mode ? "about-black" : "about"}>
                <div className="container">
                    <h3 className={mode ? "about__title-black" : "about__title"}> <ShinyText
                        text="About me"
                        speed={2}
                        delay={0.6}
                        color={mode ? "lightgreen" : "#656565ff"}
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                    /></h3>

                    <div className="about__main">
                        <div className="about__photo">
                            <img width={400} src={user} alt="" />
                        </div>
                        <div className="about__text">
                            <h2 className={mode ? "about__name-black" : "about__name"}>
                                <SplitText
                                    text="Curious about me? Here you have it:"
                                    className="text-2xl font-semibold text-center"
                                    delay={310}
                                    duration={0.7}
                                    ease="power3.out"
                                    splitType="words"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="left"
                                    onLetterAnimationComplete={handleAnimationComplete}
                                    showCallback
                                />
                            </h2>
                            <AnimatedContent
                                distance={140}
                                direction="vertical"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <p className={mode ? "about__info-black" : "about__info"}>I’m Said Akmalxonov, a passionate Frontend Developer with a strong focus on building modern, responsive, and user-friendly web applications. I enjoy turning complex problems into simple, beautiful, and intuitive interfaces. Clean code, performance, and great user experience are always my top priorities.</p>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={140}
                                direction="vertical"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <p className={mode ? "about__info-black" : "about__info"}>I studied at PDP School for 2 years, where I built a solid foundation in web development and worked on various real-world projects. During this time, I developed strong skills in JavaScript and modern frontend technologies, constantly improving my problem-solving and development workflow.</p>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={140}
                                direction="vertical"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <p className={mode ? "about__info-black" : "about__info"}>My main tech stack includes React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SASS/SCSS, Tailwind CSS, Git, and GitHub. I’m comfortable working with component-based architecture, responsive design, and writing maintainable, scalable code.</p>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={140}
                                direction="vertical"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <p className={mode ? "about__info-black" : "about__info"}>I’m always eager to learn new technologies and stay up to date with the latest trends in frontend development. I enjoy working on projects from idea to final product and continuously improving both my technical and soft skills.</p>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={140}
                                direction="vertical"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <p className={mode ? "about__info-black" : "about__info"}>When I’m not coding, I spend time learning new tools, exploring tech communities, and building personal projects to sharpen my skills.</p>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={140}
                                direction="horizontal"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <p className={mode ? "about__sub-title-black" : "about__sub-title"}><strong>Quick facts about me:</strong></p>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={140}
                                direction="vertical"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <ul className="about__list">
                                    <li className={mode ? "about__item-black" : "about__item"}>
                                        <p>Frontend Developer



                                        </p>
                                    </li>
                                    <li className={mode ? "about__item-black" : "about__item"}>
                                        <p>PDP School graduate (2 years)



                                        </p>
                                    </li>

                                    <li className={mode ? "about__item-black" : "about__item"}>
                                        <p>Strong with React & modern JavaScript



                                        </p>
                                    </li>
                                    <li className={mode ? "about__item-black" : "about__item"}>
                                        <p>Always learning something new



                                        </p>
                                    </li>
                                </ul>      </AnimatedContent>


                            <AnimatedContent
                                distance={140}
                                direction="vertical"
                                reverse={false}
                                duration={1.2}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <p className={mode ? "about__last-black" : "about__last"}>I’m open to freelance opportunities and exciting projects — feel free to reach out. Let’s build something great together!</p>
                            </AnimatedContent>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About