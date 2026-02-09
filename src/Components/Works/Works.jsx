import React from 'react'
import "./Works.css"
import view from "../../images/view.svg"
import code from "../../images/git.svg"
import weather from "../../images/weather.webp"
import shop from "../../images/shop.png"
import med from "../../images/med.png"
import meal from "../../images/meal.png"
import { Navigate, useNavigate } from 'react-router-dom'
import ShinyText from '../ShinyText/ShinyText'
import SplitText from '../SplitText/SplitText'
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from '../ScrollStack/ScrollStack'
import AnimatedContent from '../AnimatedContent/AnimatedContent'
import { useSelector } from 'react-redux'
function Works() {
    const navigate = useNavigate()

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 70 }, // Boshlang'ich holat: pastda va ko'rinmas
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        } // Ko'ringandagi holat
    };

    const leftVariant = {
        hidden: { opacity: 0, x: -120 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    };

    const rightVariant = {
        hidden: { opacity: 0, x: 120 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    };

    const mode = useSelector((state) => state.mode)
    return (
        <>
            <>
                <section id='work' className={mode ? "works-black" : "works"}>
                    <div className="container">

                        <h3 className={mode ? "works__title-black" : "works__title"}>
                            <ShinyText
                                text="Works"
                                speed={2}
                                delay={0.6}
                                color={mode ? "lightgreen" : "#656565ff"}
                                shineColor="#ffffff"
                                spread={120}
                                direction="left"
                                yoyo={false}
                                pauseOnHover={false}
                                disabled={false}
                            />
                        </h3>
                        <p className={mode ? "works__text-black" : "works__text"}>
                            <SplitText
                                text="Some of the noteworthy projects I have built:
"
                                className="text-2xl font-semibold text-center"
                                delay={60}
                                duration={0.5}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                                onLetterAnimationComplete={handleAnimationComplete}
                                showCallback
                            />
                        </p>

                        <ul className="works__list">
                            <motion.li
                                variants={cardVariants}      // Variantni ulaymiz
                                initial="hidden"             // Boshlang'ich holat: hidden
                                whileInView="visible"        // Ko'ringanda: visible
                                viewport={{ once: true, amount: 0.2 }}
                                className={mode ? "works__item-black" : "works__item"}>
                                <div className={mode ? "works__photo-black" : "works__photo"}>
                                    <img width={480} src={weather} alt="" />
                                </div>
                                <div className={mode ? "works__content-black" : "works__content"}>
                                    <h3 className={mode ? "works__name-black" : "works__name"}>Weather app</h3>
                                    <p className={mode ? "works__info-black" : "works__info"}>
                                        This project created for know weather
                                    </p>
                                    <div className="works__texnologies">
                                        <button className={mode ? "works__btns-black" : "works__btns"}>Javascript</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>Git</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>CSS</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>HTML</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>Api</button>
                                    </div>

                                    <div className="works__more">
                                        <a className='works__view' target='_blank' href="https://weather-website25.netlify.app/"><img src={view} alt="" /></a>
                                        <a className='works__code' target='_blank' href="https://github.com/Saidazimweb01/Weather-app.git"><img src={code} alt="" /></a>
                                    </div>
                                </div>
                            </motion.li>
                            <motion.li
                                variants={cardVariants}      // Variantni ulaymiz
                                initial="hidden"             // Boshlang'ich holat: hidden
                                whileInView="visible"        // Ko'ringanda: visible
                                viewport={{ once: true, amount: 0.2 }}
                                className={mode ? "works__item-black" : "works__item"}>
                                <div className={mode ? "works__photo-black" : "works__photo"}>
                                    <img width={480} src={shop} alt="" />
                                </div>
                                <div className={mode ? "works__content-black" : "works__content"}>
                                    <h3 className={mode ? "works__name-black" : "works__name"}>Shop-co</h3>
                                    <p className={mode ? "works__info-black" : "works__info"}>
                                        This project created for shopping
                                    </p>
                                    <div className="works__texnologies">
                                        <button className={mode ? "works__btns-black" : "works__btns"}>React</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>Git</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>CSS</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>HTML</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>Router-dom</button>
                                        {/* <button className='works__btns'>JSON</button> */}
                                    </div>

                                    <div className="works__more">
                                        <a className='works__view' target='_blank' href="https://shop-co-25.netlify.app/"><img src={view} alt="" /></a>
                                        <a className='works__code' target='_blank' href="https://github.com/Saidazimweb01/Shop-co"><img src={code} alt="" /></a>
                                    </div>
                                </div>
                            </motion.li>
                            <motion.li
                                variants={cardVariants}      // Variantni ulaymiz
                                initial="hidden"             // Boshlang'ich holat: hidden
                                whileInView="visible"        // Ko'ringanda: visible
                                viewport={{ once: true, amount: 0.2 }}
                                className={mode ? "works__item-black" : "works__item"}>
                                <div className={mode ? "works__photo-black" : "works__photo"}>
                                    <img width={480} src={med} alt="" />
                                </div>
                                <div className={mode ? "works__content-black" : "works__content"}>
                                    <h3 className={mode ? "works__name-black" : "works__name"}>Med-clinic</h3>
                                    <p className={mode ? "works__info-black" : "works__info"}>
                                        This project created for Med clinic
                                    </p>
                                    <div className="works__texnologies">
                                        <button className={mode ? "works__btns-black" : "works__btns"}>Java script</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>Git</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>CSS</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>HTML</button>
                                        {/* <button className='works__btns'>JSON</button> */}
                                    </div>

                                    <div className="works__more">
                                        <a className='works__view' target='_blank' href="https://med-clinic-25.netlify.app/"><img src={view} alt="" /></a>
                                        <a className='works__code' target='_blank' href="https://github.com/Saidazimweb01/Med-clinic.git"><img src={code} alt="" /></a>
                                    </div>
                                </div>
                            </motion.li>
                            <motion.li
                                variants={cardVariants}      // Variantni ulaymiz
                                initial="hidden"             // Boshlang'ich holat: hidden
                                whileInView="visible"        // Ko'ringanda: visible
                                viewport={{ once: true, amount: 0.5 }}
                                className={mode ? "works__item-black" : "works__item"}>
                                <div className={mode ? "works__photo-black" : "works__photo"}>
                                    <img width={480} src={meal} alt="" />
                                </div>
                                <div className={mode ? "works__content-black" : "works__content"}>
                                    <h3 className={mode ? "works__name-black" : "works__name"}>Meals receipts</h3>
                                    <p className={mode ? "works__info-black" : "works__info"}>
                                        This project created for learn new receipts in meal
                                    </p>
                                    <div className="works__texnologies">
                                        <button className={mode ? "works__btns-black" : "works__btns"}>TypeScript</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>Git</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>CSS</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>HTML</button>
                                        <button className={mode ? "works__btns-black" : "works__btns"}>Api</button>
                                    </div>

                                    <div className="works__more">
                                        <a className='works__view' target='_blank' href="https://meals-receipts.netlify.app/"><img src={view} alt="" /></a>
                                        <a className='works__code' target='_blank' href="https://github.com/Saidazimweb01/Meals-with-backEnd.git"><img src={code} alt="" /></a>
                                    </div>
                                </div>
                            </motion.li>
                        </ul>

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
                            <div className='works__last'>
                                <button className={mode ? "works__moree-black" : "works__moree"} onClick={() => navigate("/works")}>See more</button>
                            </div>                     </AnimatedContent>

                    </div>
                </section>
            </>
        </>
    )
}

export default Works