import React from 'react'
import "./Hero.css"
import location from "../../images/location.svg"
import locationBlack from "../../images/location-black.svg"
import active from "../../images/green.svg"
import git from "../../images/git.svg"
import gitBlack from "../../images/git-black.svg"
import user from "../../images/user.png"
import tg from "../../images/tg.png"
import tgBlack from "../../images/tg-black.png"
import TextType from '../TextType/TextType'
import SplitText from '../SplitText/SplitText'
import BlurText from '../BlurText/BlurText'
import { useDispatch, useSelector } from 'react-redux'
function Hero() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const handleAnimationCompletee = () => {
        console.log('Animation completed!');
    };


    const mode = useSelector((state) => state.mode)
    const dispatch = useDispatch()
    return (
        <>
            <section className={mode ? "hero-black" : "hero"}>
                <div className="container">
                    <div className="hero__main">
                        <div className="hero__box">
                            <h1 className={mode ? "hero__title-black" : "hero__title"}> <TextType
                                text={["Hi I'm Said", "I'm developer", "I love clean code"]}
                                typingSpeed={65}
                                pauseDuration={1500}
                                showCursor
                                cursorCharacter="|"
                                texts={["Welcome to React Bits! Good to see you!", "Build some amazing experiences!"]}
                                deletingSpeed={40}
                                variableSpeedEnabled={false}
                                variableSpeedMin={60}
                                variableSpeedMax={120}
                                cursorBlinkDuration={0.5}
                            /></h1>
                            <p className={mode ? "hero__info-black" : "hero__info"}><SplitText
                                text="I'm a Frontend developer (React.js, Typescript, Js ....) with a focus on creating (and occasionally designing)
                                exceptional digital experiences that are fast,
                                accessible, visually appealing, and responsive. Even though
                                I have been creating web applications for over 2 years, I still love it
                                as if it was something new."
                                className="text-2xl font-semibold text-center"
                                delay={20}
                                duration={0.5}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="left"
                                onLetterAnimationComplete={handleAnimationComplete}
                                showCallback
                            /></p>
                            <div className="hero__inner">
                                <a target='_blank' className={mode ? "hero__location-black" : "hero__location"} href="https://maps.app.goo.gl/taq9DvvyTBVWE9Xf9">
                                    <img src={mode ? locationBlack : location} alt="" />

                                    <BlurText
                                        text="Uzbekistan, Tashkent"
                                        delay={80}
                                        animateBy="words"
                                        direction="bottom"
                                        onAnimationComplete={handleAnimationCompletee}
                                        className="text-2xl mb-8"
                                    />
                                </a>
                                <a className={mode ? "hero__active-black" : "hero__active"} href="#contact">
                                    <img src={active} alt="" />
                                    <BlurText
                                        text="Available for new projects"
                                        delay={80}
                                        animateBy="words"
                                        direction="bottom"
                                        onAnimationComplete={handleAnimationCompletee}
                                        className="text-2xl mb-8"
                                    />

                                </a>
                            </div>

                            <div className='hero__media'>
                                <a target='_blank' href="https://github.com/Saidazimweb01">
                                    <img src={mode ? gitBlack : git} alt="" />
                                </a>
                                <a target='_blank' href="https://t.me/Akh_deff">
                                    <img width={27} src={mode ? tgBlack : tg} alt="" />
                                </a>
                            </div>

                        </div>

                        <img width={200} src={user} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero