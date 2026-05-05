import React from 'react'
import Circus from '../Circus/Circus'
import iconHTML    from "../../images/html.svg"
import iconCss     from "../../images/css.svg"
import iconJs      from "../../images/js.svg"
import iconScss    from "../../images/sass.svg"
import iconReact   from "../../images/react.svg"
import iconTs      from "../../images/ts.svg"
import iconTailwind from "../../images/tailwind.svg"
import iconGit     from "../../images/git.svg"
import "./Skills.css"
import ShinyText   from '../ShinyText/ShinyText'
import SplitText   from '../SplitText/SplitText'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const SKILLS = [
  { value: 100, label: "HTML5",              icon: iconHTML    },
  { value: 98,  label: "CSS3",               icon: iconCss     },
  { value: 97,  label: "JavaScript (ES6+)",  icon: iconJs      },
  { value: 99,  label: "Scss & Sass",        icon: iconScss    },
  { value: 95,  label: "React JS",           icon: iconReact   },
  { value: 95,  label: "TypeScript",         icon: iconTs      },
  { value: 98,  label: "Tailwind CSS",       icon: iconTailwind},
  { value: 90,  label: "Git & GitHub",       icon: iconGit     },
]

function Skills() {
  const { t, i18n } = useTranslation()
  const mode = useSelector((state) => state.mode) // true = light

  return (
    <section
      id="skill"
      className={`skills${mode ? ' skills--light' : ''}`}
    >
      <div className="container">

        {/* Section header */}
        <div className="skills__header">
          <div className="skills__badge">
            <span className="skills__badge-dot" />
            {t('skills.title')}
          </div>

          <h2 className="skills__title">
            <ShinyText
              text={t('skills.title')}
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
          </h2>

          <p className="skills__sub">
            <SplitText
              key={i18n.language}
              text={t('skills.subtitle')}
              className="text-2xl font-semibold text-center"
              delay={70}
              duration={1.3}
              ease="elastic.out(1, 0.3)"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </p>
        </div>

        {/* Skills grid */}
        <div className="skills__grid">
          {SKILLS.map((skill) => (
            <Circus
              key={skill.label}
              value={skill.value}
              label={skill.label}
              icon={skill.icon}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills