import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

export const Projects = () => {

    const splideOptions = {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        mediaQuery: 'min',
        padding: '20px',
        focus  : 'center',

        breakpoints: {
            768: {
                perPage: 2
            },
            1024: {
                perPage: 3
            }
        }
    }

    const firstProjects = projects.slice(0, 4)

    return (
        <div className='projects__main-container center'>

            <h2 className='subtitle'>Projects that I've worked on</h2>

            <div className='projects__wrapper'>

                <Splide aria-label="Projects" options={ splideOptions }>
                    {
                        firstProjects.map( project => (

                            <SplideSlide key={ project.id }>

                                <ProjectCard {...project} />

                            </SplideSlide>

                        ))
                    }
                </Splide>

                
            </div>

            <div className='flex-center'>
                <Link to='/projects' className='projects__more btn'>See more projects</Link>
            </div>

        </div>
    )
}
