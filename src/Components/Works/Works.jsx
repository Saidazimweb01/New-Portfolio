import React from 'react'
import "./Works.css"
import viewIcon from "../../images/view.svg"
import codeIcon from "../../images/git.svg"
import weather  from "../../images/weather.webp"
import shop     from "../../images/shop.png"
import med      from "../../images/med.png"
import meal     from "../../images/meal.png"
import { useNavigate } from 'react-router-dom'
import ShinyText from '../ShinyText/ShinyText'
import { motion } from 'framer-motion'
import AnimatedContent from '../AnimatedContent/AnimatedContent'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

/* ── project data ─────────────────────── */
const PROJECTS = [
  {
    key: 'weather',
    img: weather,
    live: 'https://weather-website25.netlify.app/',
    repo: 'https://github.com/Saidazimweb01/Weather-app.git',
    tags: ['JavaScript', 'HTML', 'CSS', 'API', 'Git'],
  },
  {
    key: 'med',
    img: med,
    live: 'https://med-clinic-25.netlify.app/',
    repo: 'https://github.com/Saidazimweb01/Med-clinic.git',
    tags: ['JavaScript', 'HTML', 'CSS', 'Git'],
  },
  {
    key: 'meal',
    img: meal,
    live: 'https://meals-receipts.netlify.app/',
    repo: 'https://github.com/Saidazimweb01/Meals-with-backEnd.git',
    tags: ['TypeScript', 'HTML', 'CSS', 'API', 'Git'],
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function Works() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const mode = useSelector((state) => state.mode) // true = light

  return (
    <section
      id="work"
      className={`works${mode ? ' works--light' : ''}`}
    >
      <div className="container">

        {/* ── Header ── */}
        <div className="works__header">
          <div className="works__badge">
            <span className="works__badge-dot" />
            <ShinyText
              text={t('works.title')}
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

          <h2 className="works__heading">
            {t('works.subtitle')}
          </h2>
        </div>

        {/* ── Projects ── */}
        <ul className="works__list">
          {PROJECTS.map(({ key, img, live, repo, tags }, i) => (
            <motion.li
              key={key}
              className="works__item"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* Photo */}
              <div className="works__photo">
                <img src={img} alt={t(`works.projects.${key}.name`)} />
              </div>

              {/* Content */}
              <div className="works__content">
                <span className="works__num">
                  {String(i + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                </span>

                <h3 className="works__name">
                  <span>{t(`works.projects.${key}.name`)}</span>
                </h3>

                <p className="works__info">
                  {t(`works.projects.${key}.description`)}
                </p>

                {/* Tech tags */}
                <div className="works__tags">
                  {tags.map((tag) => (
                    <span key={tag} className="works__tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="works__more">
                  <a
                    className="works__link works__link--view"
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={viewIcon} alt="Live demo" />
                    Live Demo
                  </a>
                  <a
                    className="works__link works__link--code"
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={codeIcon} alt="Source code" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* ── See more ── */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          duration={1.0}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="works__last">
            <button
              className="works__more-btn"
              onClick={() => navigate('/works')}
            >
              {t('works.see_more')}
            </button>
          </div>
        </AnimatedContent>

      </div>
    </section>
  )
}

export default Works