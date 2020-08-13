import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Route } from 'react-router-dom'
import './styles/App.css'
import Header from './components/header'

//components
import Home from './pages/home'
import CaseStudies from './pages/caseStudies'
import Approach from './pages/approach'
import Services from './pages/services'
import About from './pages/about'
import Navigation from './components/navigation'

// Routes
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/case-studies', name: 'Case Studies', Component: CaseStudies },
  { path: '/approach', name: 'Approach', Component: Approach },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/about-us', name: 'About us', Component: About },
]

function debounce(fn,ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(()=>{
      timer = null;
      fn.apply(this,arguments);
    },ms);
  }
}


const App = () => {
  //prevent flashing
  gsap.set('body', { css: { visibility: 'visible' } })


// Dimensions
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    const debounceHandleResize = debounce(function HandleResize(){
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    },1000)

    window.addEventListener('resize', debounceHandleResize)

    return () => {
      window.removeEventListener('resize', debounceHandleResize)
    }

  });

console.log(dimensions.width)
  return (
    <>
      <Header dimensions={dimensions} />
     
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />

    </>
  )
}

export default App
