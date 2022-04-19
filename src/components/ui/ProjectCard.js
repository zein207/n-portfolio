import React from 'react';

export const ProjectCard = ({ name, cover, url, project_description}) => {
  return (
    <div className='project-card'>

        <div className='project__img-wrapper'>
            <img className='project__img' src={ cover } alt=''></img>
        </div>

        <div className='project__text-wrapper'>
            <h3 className='project__name'>{ name }</h3>
            <p className='project__description'>{ project_description }</p>
            <a className='project__url' href={ url } target='_blank'>See now</a>
        </div>

    </div>
  )
}
