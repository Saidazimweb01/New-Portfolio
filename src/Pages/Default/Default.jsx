import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Skills from '../../Components/Skills/Skills'
import About from '../../Components/About/About'
import Works from '../../Components/Works/Works'
import Contact from '../../Components/Contact/Contact'

function Default() {
    return (
        <>

            <Header />
            <main>
                <Hero />
                <Skills />
                <About />
                <Works />

            </main>
            <Contact />
            </>
    )
}

export default Default