import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {

    const firstProjects = projects.slice(0, 3)

    return (
        <div className='projects__main-container'>

            <h2 className='projects__title'>Projects that I've worked on</h2>

            <div className='projects__wrapper'>

                {
                    firstProjects.map( project => (

                        <ProjectCard key={ project.id } {...project} />

                    ))
                }
                
            </div>

            <div className='flex-center'>
                <Link to='/projects' className='projects__more btn'>See more projects</Link>
            </div>

        </div>
    )
}