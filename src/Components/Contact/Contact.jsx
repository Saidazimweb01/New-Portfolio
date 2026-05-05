import React, { useState } from 'react'
import "./Contact.css"
import emailIcon   from "../../images/email.svg"
import telIcon     from "../../images/tel.svg"
import copyIcon    from "../../images/copy.svg"
import tgIcon      from "../../images/tg.png"
import gitIcon     from "../../images/git.svg"
import ShinyText   from '../ShinyText/ShinyText'
import SplitText   from '../SplitText/SplitText'
import BlurText    from '../BlurText/BlurText'
import AnimatedContent from '../AnimatedContent/AnimatedContent'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const EMAIL = "saidazimxonakmalxonov30@gmail.com"
const TEL   = "+998900654141"
const TEL_DISPLAY = "+998 90 065 41 41"

const SOCIALS = [
  { href: 'https://github.com/Saidazimweb01', icon: gitIcon,  label: 'GitHub'    },
  { href: 'https://t.me/Akh_obc',             icon: tgIcon,   label: 'Telegram', imgWidth: 24 },
]

function Contact() {
  const { t, i18n } = useTranslation()
  const mode = useSelector((state) => state.mode) // true = light
  const [copyId, setCopyId] = useState(null)

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyId(id)
      setTimeout(() => setCopyId(null), 1200)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <footer
      id="contact"
      className={`contact${mode ? ' contact--light' : ''}`}
    >
      <div className="container">

        {/* ── Badge ── */}
        <AnimatedContent distance={30} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.1}>
          <div className="contact__badge">
            <span className="contact__badge-dot" />
            <ShinyText
              text={t('foot.title')}
              speed={2}
              delay={0.4}
              color={mode ? '#4f46e5' : '#a5b4fc'}
              shineColor={mode ? '#818cf8' : '#ffffff'}
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </div>
        </AnimatedContent>

        {/* ── Heading ── */}
        <AnimatedContent distance={40} direction="vertical" duration={1.0} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.1} delay={0.05}>
          <h2 className="contact__heading">
            <span>{t('foot.title')}</span>
          </h2>
        </AnimatedContent>

        {/* ── Subtitle ── */}
        <AnimatedContent distance={30} direction="vertical" duration={1.0} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.1} delay={0.1}>
          <p className="contact__sub">
            <SplitText
              key={i18n.language}
              text={t('foot.desc')}
              delay={60}
              duration={0.7}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </p>
        </AnimatedContent>

        {/* ── Contact cards ── */}
        <div className="contact__me">

          {/* Email */}
          <AnimatedContent distance={40} direction="horizontal" reverse duration={1.0} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.1} delay={0.1}>
            <div className="contact__inner">
              <a className="contact__link" href={`mailto:${EMAIL}`}>
                <div className="contact__link-icon">
                  <img src={emailIcon} alt="email" />
                </div>
                <BlurText
                  text={EMAIL}
                  delay={45}
                  animateBy="letters"
                  direction="bottom"
                  className="text-2xl mb-8"
                />
              </a>
              <button
                className="contact__copy"
                onClick={() => handleCopy(EMAIL, 'email')}
                aria-label="Copy email"
              >
                {copyId === 'email' ? '✅' : <img src={copyIcon} alt="copy" />}
              </button>
            </div>
          </AnimatedContent>

          {/* Phone */}
          <AnimatedContent distance={40} direction="horizontal" duration={1.0} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.1} delay={0.18}>
            <div className="contact__inner">
              <a className="contact__link" href={`tel:${TEL}`}>
                <div className="contact__link-icon">
                  <img src={telIcon} alt="phone" />
                </div>
                <BlurText
                  text={TEL_DISPLAY}
                  delay={60}
                  animateBy="letters"
                  direction="bottom"
                  className="text-2xl mb-8"
                />
              </a>
              <button
                className="contact__copy"
                onClick={() => handleCopy(TEL, 'tel')}
                aria-label="Copy phone"
              >
                {copyId === 'tel' ? '✅' : <img src={copyIcon} alt="copy" />}
              </button>
            </div>
          </AnimatedContent>
        </div>

        {/* ── Divider ── */}
        

        {/* ── Social icons ── */}
        <AnimatedContent distance={30} direction="vertical" duration={1.0} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.1} delay={0.28}>
          <div className="contact__socials">
            {SOCIALS.map(({ href, icon, label, imgWidth }) => (
              <a
                key={label}
                className="contact__social"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <img src={icon} alt={label} width={imgWidth || 24} />
              </a>
            ))}
          </div>
        </AnimatedContent>

      </div>

      {/* ── Bottom bar ── */}
      <div className="contact__bar">
        <p>
          {t('foot.sub')}
          <a href="https://t.me/Akh_obc" target="_blank" rel="noreferrer"> Akm Said</a>
        </p>
      </div>
    </footer>
  )
}

export default Contact