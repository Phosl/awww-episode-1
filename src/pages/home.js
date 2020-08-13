import React, {useEffect, useState} from 'react'
import gsap from 'gsap'
import IntroOverlay from '../components/introOverlay'
import Banner from '../components/banner'
import Cases from '../components/cases'

// timeline
const tl = gsap.timeline()

const homeAnimation = (completeAnimation) => {
  tl.from('.line span', 1.8, {
    delay: 1,
    y: 100,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
    ease: 'power4.out',
  })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4,
      },
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      delay: -0.8,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4,
      },
    })
    .to('.intro-overlay', 0, {css: {display: 'none'}})
    .from('.case-image img', 1.6, {
      scale: 1.4,
      delay: -2,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    })
}

const Home = () => {

  const [animationComplete, setAnimationComplete] = useState(false)
  const completeAnimation = () => {
    // setAnimationComplete(!animationComplete)
    setAnimationComplete(true)
  }
  console.log([animationComplete, setAnimationComplete])
  useEffect(() => {
    homeAnimation(completeAnimation)
  }, [])

  return (
    <>
    {animationComplete === false ? <IntroOverlay /> : '' }
      
      <Banner />
      <Cases />
    </>
  )
}

export default Home
