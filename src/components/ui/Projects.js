import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {

    const firstProjects = projects.slice(0, 4)

    return (
        <div className='projects__main-container projects__home-screen center'>

            <h2 className='subtitle'>Projects that I've worked on</h2>

            <div className='projects__wrapper'>

                {
                    firstProjects.map( project => (

                        <ProjectCard {...project} key={ project.id } />

                    ))
                }

                
            </div>

            <div className='flex-center'>
                <Link to='/projects' className='projects__more btn'>See more projects</Link>
            </div>

        </div>
    )
}
