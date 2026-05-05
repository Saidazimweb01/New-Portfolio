import "./About.css"
import React from 'react'
import user from "../../images/user.png"
import ShinyText from "../ShinyText/ShinyText"
import SplitText from "../SplitText/SplitText"
import AnimatedContent from "../AnimatedContent/AnimatedContent"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

function About() {
  const { t, i18n } = useTranslation()
  const mode = useSelector((state) => state.mode) // true = light

  return (
    <section
      id="about"
      className={`about${mode ? ' about--light' : ''}`}
    >
      <div className="container">

        {/* Badge */}
        <div className="about__badge">
          <span className="about__badge-dot" />
          <ShinyText
            text={t("about.title")}
            key={i18n.language}
            speed={2}
            delay={0.6}
            color={mode ? '#4f46e5' : '#a5b4fc'}
            shineColor={mode ? '#818cf8' : '#ffffff'}
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </div>

        <div className="about__main">

          {/* ── Photo side ── */}
          <AnimatedContent
            distance={60}
            direction="horizontal"
            reverse={true}
            duration={1.1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.1}
          >
            <div className="about__photo-wrap">
              <div className="about__photo">
                <img src={user} alt="Said Akmalxonov" />
              </div>
              <div className="about__photo-glow" />
            </div>
          </AnimatedContent>

          {/* ── Text side ── */}
          <div className="about__text">

            {/* Name / heading */}
            <h2 className="about__name">
              <SplitText
                text={t("about.subtitle")}
                key={i18n.language}
                delay={310}
                duration={0.7}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </h2>

            {/* Info paragraphs */}
            {t("about.texts", { returnObjects: true }).map((item, index) => (
              <AnimatedContent
                key={index}
                distance={40}
                direction="vertical"
                duration={1.0}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={index * 0.12}
              >
                <p className="about__info">{item}</p>
              </AnimatedContent>
            ))}

            {/* Quick Facts heading */}
            <AnimatedContent
              distance={30}
              direction="horizontal"
              duration={1.0}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
            >
              <p className="about__sub-title">
                <strong>{t("about.innertitle")}</strong>
              </p>
            </AnimatedContent>

            {/* Quick Facts list */}
            <AnimatedContent
              distance={40}
              direction="vertical"
              duration={1.1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
            >
              <ul className="about__list">
                {t("about.innertexts", { returnObjects: true }).map((fact, idx) => (
                  <li key={idx} className="about__item">
                    <p>{fact}</p>
                  </li>
                ))}
              </ul>
            </AnimatedContent>

            {/* Last text */}
            <AnimatedContent
              distance={40}
              direction="vertical"
              duration={1.1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
            >
              <p className="about__last">{t("about.lasttext")}</p>
            </AnimatedContent>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About