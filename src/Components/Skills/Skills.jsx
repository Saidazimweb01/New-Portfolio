import React from 'react'
import Circus from '../Circus/Circus'
import iconHTML from "../../images/html.svg"
import iconCss from "../../images/css.svg"
import iconJs from "../../images/js.svg"
import iconScss from "../../images/sass.svg"
import iconReact from "../../images/react.svg"
import iconTs from "../../images/ts.svg"
import iconTailwand from "../../images/tailwind.svg"
import iconGit from "../../images/git.svg"
import "./Skills.css"
import ShinyText from '../ShinyText/ShinyText'
import SplitText from '../SplitText/SplitText'
import { useSelector } from 'react-redux'

function Skills() {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const mode = useSelector((state) => state.mode)
    return (
        <>
            <section id='skill' className={mode ? "skills-black" : "skills"}>
                <div className="container">
                    <h3 className={mode ? "skills__title-black" : "skills__title"}>
                        <ShinyText
                            text="Skills"
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
                    <p className={mode ? "skills__text-black" : "skills__text"}>

                        <SplitText
                            text=" The skills, tools and technologies I am really good at:"
                            className="text-2xl font-semibold text-center"
                            delay={70}
                            duration={1.3}
                            ease="elastic.out(1, 0.3)"
                            splitType="words"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                            showCallback
                        />
                    </p>
                    <div className="skills__box">
                        {<Circus value={100} label={"HTML5"} icon={iconHTML} />}
                        {<Circus value={93} label={"CSS3"} icon={iconCss} />}
                        {<Circus value={87} label={"Java script (es6+)"} icon={iconJs} />}
                        {<Circus value={91} label={"Scss & Sass"} icon={iconScss} />}
                        {<Circus value={75} label={"React js"} icon={iconReact} />}
                        {<Circus value={92} label={"Type script"} icon={iconTs} />}
                        {<Circus value={98} label={"Tailwind css"} icon={iconTailwand} />}
                        {<Circus value={87} label={"Git & Git hub"} icon={iconGit} />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills