import React from 'react'
import { About } from '../ui/About'
import { Contact } from '../ui/Contact'
import { Projects } from '../ui/Projects'
import { Skills } from '../ui/Skills'

export const HomeScreen = () => {
  return (
    <div className='home__wrapper'>

      <About />
      
      <Projects />

      <Skills />

      <Contact />

    </div>
  )
}
