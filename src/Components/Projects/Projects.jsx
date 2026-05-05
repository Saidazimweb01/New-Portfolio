import React from 'react'
import "./Projects.css"
import viewIcon from "../../images/view.svg"
import codeIcon from "../../images/git.svg"
import weather  from "../../images/weather.webp"
import shop     from "../../images/shop.png"
import med      from "../../images/med.png"
import meal     from "../../images/meal.png"
import quiz     from "../../images/quiz.png"
import todo     from "../../images/todo.png"
import arqon    from "../../images/arqon.png"
import no       from "../../images/no.webp"
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ShinyText from '../ShinyText/ShinyText'
import { useSelector } from 'react-redux'

/* ── All projects data ─────────────────── */
const ALL_PROJECTS = [
  {
    key:  'weather',
    name: 'Weather App',
    desc: 'Real-time weather data from any city using OpenWeatherMap API.',
    img:  weather,
    live: 'https://weather-website25.netlify.app/',
    repo: 'https://github.com/Saidazimweb01/Weather-app.git',
    tags: ['JavaScript', 'HTML', 'CSS', 'API', 'Git'],
  },
  {
    key:  'med',
    name: 'Med Clinic',
    desc: 'Medical clinic landing page with appointment flow.',
    img:  med,
    live: 'https://med-clinic-25.netlify.app/',
    repo: 'https://github.com/Saidazimweb01/Med-clinic.git',
    tags: ['JavaScript', 'HTML', 'CSS', 'Git'],
  },
  {
    key:  'meal',
    name: 'Meals Receipts',
    desc: 'Browse and save meal recipes powered by TheMealDB API.',
    img:  meal,
    live: 'https://meals-receipts.netlify.app/',
    repo: 'https://github.com/Saidazimweb01/Meals-with-backEnd.git',
    tags: ['TypeScript', 'HTML', 'CSS', 'API', 'Git'],
  },
//   {
//     key:  'shop',
//     name: 'Shop',
//     desc: 'E-commerce product listing with cart functionality.',
//     img:  shop,
//     live: '#',
//     repo: '#',
//     tags: ['React', 'CSS', 'Git'],
//   },
//   {
//     key:  'quiz',
//     name: 'Quiz App',
//     desc: 'Interactive quiz with score tracking and timer.',
//     img:  quiz,
//     live: '#',
//     repo: '#',
//     tags: ['JavaScript', 'HTML', 'CSS'],
//   },
//   {
//     key:  'todo',
//     name: 'Todo App',
//     desc: 'Task manager with local storage persistence.',
//     img:  todo,
//     live: '#',
//     repo: '#',
//     tags: ['JavaScript', 'CSS', 'HTML'],
//   },
//   {
//     key:  'arqon',
//     name: 'Arqon',
//     desc: 'Multi-page website with modern UI and animations.',
//     img:  arqon,
//     live: '#',
//     repo: '#',
//     tags: ['React', 'SCSS', 'Git'],
//   },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.07 },
  }),
}

function Projects() {
  const navigate = useNavigate()
  const mode = useSelector((state) => state.mode) // true = light

  return (
    <div className={`projects${mode ? ' projects--light' : ''}`}>
      <div className="container">

        {/* ── Top bar ── */}
        <div className="projects__topbar">
          <button className="projects__back" onClick={() => navigate('/')}>
            Home
          </button>
          <span className="projects__count">
            {ALL_PROJECTS.length} Projects
          </span>
        </div>

        {/* ── Header ── */}
        <div className="projects__header">
          <div className="projects__badge">
            <span className="projects__badge-dot" />
            Portfolio
          </div>

          <h1 className="projects__title">
            <span>
              <ShinyText
                text="All Projects"
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
            </span>
          </h1>

          <p className="projects__sub">
            A collection of everything I've built — from experiments to production apps.
          </p>
        </div>

        {/* ── Grid ── */}
        <ul className="projects__grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {ALL_PROJECTS.map(({ key, name, desc, img, live, repo, tags }, i) => (
            <motion.li
              key={key}
              className="projects__card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {/* Image */}
              <div className="projects__card-img">
                <img src={img} alt={name} />
              </div>

              {/* Body */}
              <div className="projects__card-body">
                <span className="projects__card-num">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="projects__card-name">{name}</h3>

                <p className="projects__card-info">{desc}</p>

                <div className="projects__card-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="projects__card-tag">{tag}</span>
                  ))}
                </div>

                <div className="projects__card-links">
                  <a
                    className="projects__card-link projects__card-link--view"
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={viewIcon} alt="Live demo" />
                    Live
                  </a>
                  <a
                    className="projects__card-link projects__card-link--code"
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={codeIcon} alt="GitHub" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Projects