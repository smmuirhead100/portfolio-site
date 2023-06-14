import { useState, useRef } from 'react'
import './App.css'
import bg from './assets/bg.png'
import HomePage from './components/HomePage'
import About from './components/About'
import Projects from './components/Projects'
import Captured from './components/Captured'
import Goal from './components/Goal'

function App() {
  
  const aboutRef = useRef()
  const projectsRef = useRef()
  
  function executeScroll(section) {
    if (!aboutRef.current || !projectsRef.current) {
      return
    } else {
      section === 'about' ? 
      aboutRef.current.scrollIntoView({ block: 'start', behavior: 'smooth'}) :
      projectsRef.current.scrollIntoView({ block: 'start', behavior: 'smooth'})
    }
  }

  return (
      <div>
          <img src={bg} />
          <HomePage scroll={executeScroll}/>
          
          <div ref={aboutRef}>
            <About/>
          </div>

          <div  ref={projectsRef}>
            <Projects/>
          </div>
          <Captured />
          <Goal />
      </div>
  )
}

export default App
