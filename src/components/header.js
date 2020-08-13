import React, { useEffect, useState }  from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg'
import gsap from 'gsap'

let tl = gsap.timeline()

const Header = ({history,dimensions}) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {

    history.listen(() => {
      setMenuState({menuOpened: false})
    })

    if (menuState.menuOpened === true) {
      // Run Open menu animation
      gsap.to("nav", { css: { display: "block" } });
      gsap.to("body", { css: { overflow: "hidden" } });
      tl.to('.App', 1, {
        y:  dimensions.width <= 654 ? '70vh' : dimensions.height / 2,
        ease: 'expo.inOut'
      }).to('.hamburger-menu span', .6,{
        delay:-1,
        scaleX:0,
        transformOrigin: '50% 0%'
      })

    } else {
      // Run Close menu animation
      tl.to('.App', 1, {
        y:  0,
        ease: 'expo.inOut',
      }).to('nav',{css:{display:'none'}}).to('body',{css:{overflow:'auto'}})
    }
  },[dimensions.height, dimensions.width, history, menuState.menuOpened])
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">AGENCY</NavLink>
          </div>
          <div className="nav-toggle">
            <div className="hamburger-menu"
              onClick={() => setMenuState({ menuOpened: true })}
            >
              <span></span>
              <span></span>
            </div>
            <div className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header) 
