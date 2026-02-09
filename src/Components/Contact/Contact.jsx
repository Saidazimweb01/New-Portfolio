import React, { useState } from 'react'
import "./Contact.css"
import email from "../../images/email.svg"
import emailBlack from "../../images/email-black.svg"
import tel from "../../images/tel.svg"
import telBlack from "../../images/tel-black.svg"
import copy from "../../images/copy.svg"
import copyBlack from "../../images/copy-black.svg"
import tg from "../../images/tg.png"
import tgBlack from "../../images/tg-black.png"
import git from "../../images/git.svg"
import gitBlack from "../../images/git-black.svg"
import ShinyText from '../ShinyText/ShinyText'
import SplitText from '../SplitText/SplitText'
import BlurText from '../Blurtext/Blurtext'
import { useSelector } from 'react-redux'
function Contact() {
    const emails = "saidazimxonakmalxonov30@gmail.com"
    const tels = "+998900654141"
    const [copyId, setCopyId] = useState(null)

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    const handleCopy = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopyId(id)

            setTimeout(() => {
                setCopyId(null)
            }, 1000)
        } catch (err) {
            console.log("Error while copy: ", err);

        }
    }

    const mode = useSelector((state) => state.mode)

    return (
        <>
            <footer id='contact' className={mode ? "contact-black" : "contact"}>
                <div className="container">
                    <h2 className={mode ? "contact__title-black" : "contact__title"}>
                        <ShinyText
                            text="Get in touch"
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
                    </h2>
                    <p className={mode ? "contact__text-black" : "contact__text"}>                 <SplitText
                        text="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
       "
                        className="text-2xl font-semibold text-center"
                        delay={65}
                        duration={0.7}
                        ease="power3.out"
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
                    <div className="contact__me">

                        <div className="contact__inner">
                            <a className={mode ? "contact__email-black" : "contact__email"} href="mailto:saidazimxonakmalxonov30@gmail.com"><img className={mode ? "contact__email-img-black" : "contact__email-img"} src={mode ? emailBlack : email} alt="" />
                                <BlurText
                                    text="saidazimxonakmalxonov30@gmail.com"
                                    delay={50}
                                    animateBy="letters"
                                    direction="bottom"
                                    onAnimationComplete={handleAnimationComplete}
                                    className="text-2xl mb-8"
                                /> </a><button onClick={() => handleCopy(emails, "email")}>{copyId == "email" ? "✅" : <img className={mode ? "contact__copy-img-black" : "contact__copy-img"} src={mode ? copyBlack : copy} alt="" />}</button>
                        </div>
                        <div className="contact__inner">
                            <a className={mode ? "contact__tel-black" : "contact__tel"} href="tel:998900654141"><img className={mode ? "contact__tel-img-black" : "contact__tel-img"} src={mode ? telBlack : tel} alt="" />
                                <BlurText
                                    text="+998 90 065 41 41"
                                    delay={70}
                                    animateBy="letters"
                                    direction="bottom"
                                    onAnimationComplete={handleAnimationComplete}
                                    className="text-2xl mb-8"
                                /> </a><button onClick={() => handleCopy(tels, "tel")}>{copyId == "tel" ? "✅" : <img className={mode ? "contact__copy-img-black" : "contact__copy-img"} src={mode ? copyBlack : copy} alt="" />}</button>
                        </div>
                    </div>

                    <p className={mode ? "contact__info-black" : "contact__info"}>You may also find me on these platforms!</p>
                    <div className="contact__box">
                        <a target='_blank' href="https://github.com/Saidazimweb01">
                            <img src={mode ? gitBlack : git} alt="" />
                        </a>
                        <a target='_blank' href="https://t.me/Akh_deff">
                            <img width={27} src={mode ? tgBlack : tg} alt="" />
                        </a>
                    </div>

                    <div className={mode ? "contact__last-black" : "contact__last"}>
                        <p>2026 | Designed and coded with ❤️️ by <a href="https://t.me/Akh_deff">Akm Said</a></p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Contact