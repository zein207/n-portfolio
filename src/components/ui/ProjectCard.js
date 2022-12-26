import React, { useEffect } from 'react';

export const ProjectCard = ({ name, cover, url, project_description}) => {

  useEffect(() => {

    const projectsCards = document.querySelectorAll('.project-card');

    projectsCards.forEach((projectCard) => {
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
        
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__fadeInLeft');
                    return;
                }
                // entry.target.classList.remove('animate__fadeInLeft');
            });
        });
          
        observer.observe(projectCard);
    });

  }, []);

  return (
    <div className='project-card animate__animated'>

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
