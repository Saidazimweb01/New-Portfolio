import React from 'react'
import view from "../../images/view.svg"
import code from "../../images/git.svg"
import weather from "../../images/weather.webp"
import shop from "../../images/shop.png"
import med from "../../images/med.png"
import meal from "../../images/meal.png"
import quiz from "../../images/quiz.png"
import todo from "../../images/todo.png"
import arqon from "../../images/arqon.png"
import no from "../../images/no.webp"
import { motion } from 'framer-motion';
import "./Projects.css"
import { useNavigate } from 'react-router-dom'
import ShinyText from '../ShinyText/ShinyText'
import SplitText from '../SplitText/SplitText'
import { useSelector } from 'react-redux'
function Projects() {
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

            <div className={mode ? "projects-black" : "projects"}>
                <div className="container">
                    <button className={mode ? "projects__back-black" : "projects__back"} onClick={() => navigate("/")}>Back</button>
                    <h3 className={mode ? "projects__title-black" : "projects__title"}>
                        <ShinyText
                            text="Projects"
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
                    <p className={mode ? "projects__text-black" : "projects__text"}>
                        <SplitText
                            text="All my projects:
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
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
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
                            viewport={{ once: true, amount: 0.2 }}
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

                        <motion.li
                            variants={cardVariants}      // Variantni ulaymiz
                            initial="hidden"             // Boshlang'ich holat: hidden
                            whileInView="visible"        // Ko'ringanda: visible
                            viewport={{ once: true, amount: 0.2 }}
                            className={mode ? "works__item-black" : "works__item"}>
                            <div className={mode ? "works__photo-black" : "works__photo"}>
                                <img width={480} src={no} alt="" />
                            </div>
                            <div className={mode ? "works__content-black" : "works__content"}>
                                <h3 className={mode ? "works__name-black" : "works__name"}>React quiz app "BETA"</h3>
                                <p className={mode ? "works__info-black" : "works__info"}>
                                    This project created for learn new skills
                                </p>
                                <div className="works__texnologies">
                                    <button className={mode ? "works__btns-black" : "works__btns"}>React</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Git</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>CSS</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>HTML</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Api</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Json</button>
                                </div>

                                <div className="works__more">
                                    <a className='works__view' target='_blank' href="https://quiz-appp-react.netlify.app/"><img src={view} alt="" /></a>
                                    <a className='works__code' target='_blank' href="https://github.com/Saidazimweb01/React-Quiz-app"><img src={code} alt="" /></a>
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
                                <img width={480} src={no} alt="" />
                            </div>
                            <div className={mode ? "works__content-black" : "works__content"}>
                                <h3 className={mode ? "works__name-black" : "works__name"}>Todo app</h3>
                                <p className={mode ? "works__info-black" : "works__info"}>
                                    This project created for Todo
                                </p>
                                <div className="works__texnologies">
                                    <button className={mode ? "works__btns-black" : "works__btns"}>React</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Git</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>CSS</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>HTML</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Api</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Json</button>
                                </div>

                                <div className="works__more">
                                    <a className='works__view' target='_blank' href="https://todo-project-s.netlify.app/"><img src={view} alt="" /></a>
                                    <a className='works__code' target='_blank' href="https://github.com/Saidazimweb01/Todo-list-with-React-js"><img src={code} alt="" /></a>
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
                                <img width={480} src={no} alt="" />
                            </div>
                            <div className={mode ? "works__content-black" : "works__content"}>
                                <h3 className={mode ? "works__name-black" : "works__name"}>Todo modern with Archives</h3>
                                <p className={mode ? "works__info-black" : "works__info"}>
                                    This project created for Todo modern
                                </p>
                                <div className="works__texnologies">
                                    <button className={mode ? "works__btns-black" : "works__btns"}>React</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Git</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>CSS</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>HTML</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Api</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Json</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Context</button>
                                </div>

                                <div className="works__more">
                                    <a className='works__view' target='_blank' href="https://archives-26.netlify.app/"><img src={view} alt="" /></a>
                                    <a className='works__code' target='_blank' href="https://github.com/Saidazimweb01/Archive"><img src={code} alt="" /></a>
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
                                <img width={480} src={no} alt="" />
                            </div>
                            <div className={mode ? "works__content-black" : "works__content"}>
                                <h3 className={mode ? "works__name-black" : "works__name"}>Usepopcorn find the films "BETA"</h3>
                                <p className={mode ? "works__info-black" : "works__info"}>
                                    This project created for Films
                                </p>
                                <div className="works__texnologies">
                                    <button className={mode ? "works__btns-black" : "works__btns"}>React</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Git</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>CSS</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>HTML</button>
                                    <button className={mode ? "works__btns-black" : "works__btns"}>Api</button>
                                    {/* <button className={mode ? "works__btns-black" : "works__btns"}>Json</button> */}
                                    {/* <button className={mode ? "works__btns-black" : "works__btns"}>Context</button> */}
                                </div>

                                <div className="works__more">
                                    <a className='works__view' target='_blank' href="https://usepopcorn-26.netlify.app/"><img src={view} alt="" /></a>
                                    <a className='works__code' target='_blank' href="https://github.com/Saidazimweb01/Usepopcorn/"><img src={code} alt="" /></a>
                                </div>
                            </div>
                        </motion.li>
                    </ul >
                </div>
            </div>
        </>
    )
}

export default Projects