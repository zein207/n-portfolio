import React, { useEffect } from 'react'
import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'

export const ProjectsScreen = () => {

  useEffect(() => {
    document.querySelector('.main-container').scrollTop = 0;
  }, [])

  return (

    <div className='projects__main-container projects-screen center'>

        <h2 className='subtitle'>Projects that I've worked on</h2>

        <div className='projects__wrapper'>

          {
            projects.map( project => (

              <ProjectCard key={ project.id } {...project} />

            ))
          }
            
        </div>
    </div>

  )
}
