import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useInView } from 'react-intersection-observer'
import 'react-circular-progressbar/dist/styles.css'
import './Circus.css'
import AnimatedContent from '../AnimatedContent/AnimatedContent'

function Circus({ value, label, icon }) {
  const [currentValue, setCurrentValue] = useState(0)

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) setCurrentValue(value)
  }, [inView, value])

  return (
    <div ref={ref}>
      <AnimatedContent
        distance={60}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.3}
      >
        <div className="skill-card">

          {/* Circular ring */}
          <div className="skill-card__ring">
            <CircularProgressbar
              value={currentValue}
              styles={buildStyles({
                // Colors come from CSS vars via the overrides in Circus.css
                pathTransitionDuration: 2,
                strokeLinecap: 'round',
              })}
            />

            {/* Icon + percent inside ring */}
            <div className="skill-card__inner">
              <img src={icon} alt={label} className="skill-card__icon" />
              <span className="skill-card__percent">{currentValue}%</span>
            </div>
          </div>

          {/* Label */}
          <p className="skill-card__label">{label}</p>

        </div>
      </AnimatedContent>
    </div>
  )
}

export default Circus