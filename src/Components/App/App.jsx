import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Circus from '../Circus/Circus'
import Skills from '../Skills/Skills'
import Works from '../Works/Works'
import Contact from '../Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Projects from '../Pro'
import Default from '../../Pages/Default/Default'
import Projects from '../Projects/Projects'
import TextType from '../TextType/TextType'
// import Antigravity from '../Antigravity/Antigravity'
import ClickSpark from '../ClickSpark/ClickSpark'
import ScrollStack, { ScrollStackItem } from '../ScrollStack/ScrollStack'
// import SplashCursor from '../SplashCursor/SplashCursor'

function App() {
  return (
    <>
      
      <ClickSpark
        sparkColor='#000000ff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <Default />
            } />
            <Route path='/works' element={
              <Projects />
            } />
          </Routes>

        </BrowserRouter>
      </ClickSpark>
    </>
  )
}

export default App