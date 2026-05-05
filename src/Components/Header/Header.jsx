import React, { useState, useEffect, useCallback } from 'react'
import logo from "../../images/logo.svg"
import logoBlack from "../../images/logo-black.svg"
import { useDispatch, useSelector } from 'react-redux'
import { ISOPEN, MODE } from '../../Store/ActionsTypes'
import { useTranslation } from 'react-i18next'
import './Header.css'

function Header() {
  const { t, i18n } = useTranslation()
  const mode = useSelector((state) => state.mode)   // true = Light, false = Dark
  const open = useSelector((state) => state.isOpen)
  const dispatch = useDispatch()

  const [scrollProg, setScrollProg] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight
      setScrollProg(max > 0 ? (window.scrollY / max) * 100 : 0)
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeDrawer = useCallback(() => {
    setClosing(true)
    setTimeout(() => { dispatch({ type: ISOPEN }); setClosing(false) }, 240)
  }, [dispatch])

  const handleNavClick = useCallback(() => {
    if (open) closeDrawer()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [open, closeDrawer])

  const handleBurger = () => open ? closeDrawer() : dispatch({ type: ISOPEN })

  const navLinks = [
    { href: '#about', label: t('header.about') },
    { href: '#work', label: t('header.work') },
    { href: '#skill', label: t('header.skills') },
    { href: '#contact', label: t('header.contact') },
  ]

  // mode = true  → Light (oq fon)  → logoBlack (qora logo)
  // mode = false → Dark  (qora fon) → logo (oq/rangli logo)
  const currentLogo = mode ? logo : logoBlack

  // CSS class helpers
  const hdrClass = [
    'hdr',
    mode && 'hdr--light',
    scrolled && 'hdr--scrolled',
  ].filter(Boolean).join(' ')

  const drawerClass = [
    'hdr__drawer',
    mode && 'hdr__drawer--light',   // ← key fix: drawer gets light tokens
    closing && 'hdr__drawer--closing',
  ].filter(Boolean).join(' ')

  const burgerClass = [
    'hdr__burger',
    open && 'hdr__burger--open',
  ].filter(Boolean).join(' ')

  const LangSelect = () => (
    <div className="hdr__lang-wrap">
      <select
        className="hdr__lang"
        value={i18n.language}
        onChange={(e) => {
          const lang = e.target.value
          i18n.changeLanguage(lang)
          localStorage.setItem("lang", lang)
        }}
      >
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  )

  return (
    <>
      <header className={hdrClass}>
        <div className="hdr__inner">

          {/* Logo */}
          <a className="hdr__logo" href="#">
            <img
              src={currentLogo}
              alt="logo"

            />
          </a>

          {/* Desktop nav */}
          <nav className="hdr__nav">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="hdr__nav-link">{label}</a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hdr__right">
            {/* Theme toggle */}
            <button className="hdr__icon-btn" onClick={() => dispatch({ type: MODE })} aria-label="Toggle theme">
              <span className="hdr__icon-btn-icon">{mode ? '🌙' : '☀️'}</span>
            </button>

            {/* Language (hidden on mobile via CSS) */}
            <LangSelect />

            {/* Download (hidden on mobile via CSS) */}
            <button className="hdr__dl-btn">{t('header.download')}</button>

            {/* Burger — visible only on mobile */}
            <button className={burgerClass} onClick={handleBurger} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="hdr__prog" style={{ width: `${scrollProg}%` }} />
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className={drawerClass}>
          <div className="hdr__drawer-top">
            <img src={currentLogo} alt="logo" className="hdr__drawer-logo" />
            <button className="hdr__drawer-close" onClick={closeDrawer} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="hdr__drawer-nav">
            {navLinks.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                className="hdr__drawer-link"
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={handleNavClick}
              >
                <span className="hdr__drawer-link-num">0{i + 1}</span>
                {label}
              </a>
            ))}
          </nav>

          <div className="hdr__drawer-footer">
            <div className="hdr__drawer-row">
              <span>{t('header.mode')}</span>
              <button className="hdr__icon-btn" onClick={() => dispatch({ type: MODE })} aria-label="Toggle theme">
                <span className="hdr__icon-btn-icon">{mode ? '🌙' : '☀️'}</span>
              </button>
            </div>

            <LangSelect />

            <button className="hdr__dl-btn hdr__dl-btn--full" onClick={closeDrawer}>
              {t('header.download')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header