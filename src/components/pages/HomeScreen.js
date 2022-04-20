import React from 'react'
import { About } from '../ui/About'
import { Contact } from '../ui/Contact'
import { Projects } from '../ui/Projects'
import { Skills } from '../ui/Skills'

export const HomeScreen = () => {
  return (
    <div className='home__wrapper animate__animated animate__fadeIn'>

      <About />
      
      <Projects />

      <div className='center info'>

        <Skills />

        <Contact />

      </div>


    </div>
  )
}
