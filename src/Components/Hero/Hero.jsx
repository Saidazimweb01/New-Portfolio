import React, { useEffect, useRef } from 'react'
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
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()
  const mode = useSelector((state) => state.mode)
  const heroTitles = t('hero.title', { returnObjects: true })

  // Stagger animate ref elements
  const staggerRefs = useRef([])
  useEffect(() => {
    staggerRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.animationDelay = `${0.15 + i * 0.12}s`
      el.classList.add('hero__stagger')
    })
  }, [])

  const addRef = (el) => {
    if (el && !staggerRefs.current.includes(el)) staggerRefs.current.push(el)
  }

  const currentGit = mode ? git : gitBlack
  const currentTg  = mode ? tg  : tgBlack
  const currentLoc = mode ? locationBlack : location

  return (
    <section className={`hero${mode ? ' hero--light' : ''}`}>
      <div className="container">
        <div className="hero__main">

          {/* ── LEFT CONTENT ─────────────────── */}
          <div className="hero__box">

            {/* Badge */}
            <div className="hero__badge" ref={addRef}>
              <span className="hero__badge-dot" />
              {t('hero.project', 'Available for work')}
            </div>

            {/* Title */}
            <h1 className="hero__title">
              <TextType
                text={Array.isArray(heroTitles) ? heroTitles : ["Hi I'm Said"]}
                typingSpeed={65}
                pauseDuration={1500}
                showCursor
                cursorCharacter="|"
                deletingSpeed={40}
                variableSpeedEnabled={false}
                cursorBlinkDuration={0.5}
              />
            </h1>

            {/* Description */}
            <p className="hero__info" ref={addRef}>
              {t('hero.text')}
            </p>

            {/* Location + Status */}
            <div className="hero__inner" ref={addRef}>
              <a
                target="_blank"
                rel="noreferrer"
                className="hero__chip"
                href="https://maps.app.goo.gl/taq9DvvyTBVWE9Xf9"
              >
                <img src={currentLoc} alt="" className="hero__chip-icon" />
                {t('hero.loc')}
              </a>
              <a className="hero__chip hero__chip--green" href="#contact">
                <img src={active} alt="" className="hero__chip-icon" />
                {t('hero.project')}
              </a>
            </div>

            {/* Stats row */}
            <div className="hero__stats" ref={addRef}>
              <div className="hero__stat">
                <span className="hero__stat-num">2+</span>
                <span className="hero__stat-label">{t('hero.experience', "Yil tajriba")}</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">20+</span>
                <span className="hero__stat-label">{t('hero.projects', "Loyihalar")}</span>
              </div>
             
             
            </div>

            {/* Social + CTA */}
            <div className="hero__bottom" ref={addRef}>
              <div className="hero__media">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Saidazimweb01"
                  className="hero__social-btn"
                  title="GitHub"
                >
                  <img src={currentGit} alt="GitHub" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/Akh_deff"
                  className="hero__social-btn"
                  title="Telegram"
                >
                  <img width={22} src={currentTg} alt="Telegram" />
                </a>
              </div>
              <a href="#contact" className="hero__cta">
                {t('hero.contact', "Bog'lanish")}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

          </div>

          {/* ── RIGHT — AVATAR ───────────────── */}
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring" />
            <img src={user} alt="avatar" className="hero__avatar" />
            {/* Floating skill tags */}
            <div className="hero__float hero__float--tl">React</div>
            <div className="hero__float hero__float--br">TypeScript</div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero