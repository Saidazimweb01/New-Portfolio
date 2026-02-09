/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
    text = '',
    className = '',
    delay = 50,
    duration = 1.25,
    ease = 'power3.out',
    splitType = 'chars,words',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    tag: Tag = 'p', // Tag-ni dinamik render qilish uchun katta harf
    onLetterAnimationComplete
}) => {
    const ref = useRef(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(() => setFontsLoaded(true));
    }, []);

    useGSAP(() => {
        if (!ref.current || !text || !fontsLoaded) return;

        const el = ref.current;
        
        // SplitText instansiyasini yaratish
        const splitInstance = new GSAPSplitText(el, {
            type: splitType,
            linesClass: 'split-line',
            wordsClass: 'split-word',
            charsClass: 'split-char',
        });

        const targets = splitType.includes('chars') ? splitInstance.chars : 
                       splitType.includes('words') ? splitInstance.words : 
                       splitInstance.lines;

        gsap.fromTo(targets, 
            { ...from },
            {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
                scrollTrigger: {
                    trigger: el,
                    start: `top ${100 - (threshold * 100)}%`,
                    once: true,
                },
                onComplete: () => {
                    if (onLetterAnimationComplete) onLetterAnimationComplete();
                }
            }
        );

        return () => {
            splitInstance.revert();
        };
    }, { dependencies: [text, fontsLoaded], scope: ref });

    return (
        <Tag 
            ref={ref} 
            className={`split-parent ${className}`}
            style={{ textAlign, display: 'inline-block', width: '100%' }}
        >
            {text}
        </Tag>
    );
};

export default SplitText;