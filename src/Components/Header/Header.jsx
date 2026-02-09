import React from 'react'
import logo from "../../images/logo.svg"
import logoBlack from "../../images/logo-black.svg"
import modee from "../../images/mode.svg"
import black from "../../images/black-mode.svg"
import "./Header.css"
import burger from "../../images/btn-burger.svg"
import burgerBlack from "../../images/btn-burger-black.svg"
import BlurText from '../Blurtext/Blurtext'
import { useDispatch, useSelector } from 'react-redux'
import { MODE } from '../../Store/ActionsTypes'

function Header() {

  const handleAnimationCompletee = () => {
    console.log('Animation completed!');
  };



  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  console.log(mode);

  return (
    <>
      <header className={mode ? "head-black" : "head"}>
        <div className="container">
          <div className="head__inner">
            <a className='head__logo' href="#">
              <img src={mode ? logoBlack : logo} alt="logo profile" />
            </a>

            <div className='head__with'>
              <ul className="head__list">
                <li className={mode ? "head__item-black" : "head__item"}>
                  <a href="#about">
                    {/* About */}
                    <BlurText
                      text="About"
                      delay={120}
                      animateBy="letters"
                      direction="bottom"
                      onAnimationComplete={handleAnimationCompletee}
                      className="text-2xl mb-8"
                    />
                  </a>
                </li>
                <li className={mode ? "head__item-black" : "head__item"}>
                  <a href="#work">

                    <BlurText
                      text="Work"
                      delay={120}
                      animateBy="letters"
                      direction="bottom"
                      onAnimationComplete={handleAnimationCompletee}
                      className="text-2xl mb-8"
                    />
                  </a>
                </li>
                <li className={mode ? "head__item-black" : "head__item"}>
                  <a href="#skill">
                    <BlurText
                      text="Skills"
                      delay={120}
                      animateBy="letters"
                      direction="bottom"
                      onAnimationComplete={handleAnimationCompletee}
                      className="text-2xl mb-8"
                    />
                  </a>
                </li>
                <li className={mode ? "head__item-black" : "head__item"}>
                  <a href="#contact">
                    <BlurText
                      text="Contact"
                      delay={120}
                      animateBy="letters"
                      direction="bottom"
                      onAnimationComplete={handleAnimationCompletee}
                      className="text-2xl mb-8"
                    />
                  </a>
                </li>
              </ul>

              <div className="head__modes">
                <button className='head__mode' onClick={() => dispatch({ type: MODE })}><img src={mode ? black : modee} alt="" /></button>
                <button className={mode ? "head__download-black" : "head__download"}>Download CV</button>
              </div>
              <button className={mode ? "head__burger-btn-black" : "head__burger-btn"}><img src={mode ? burgerBlack : burger} alt="" /></button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header