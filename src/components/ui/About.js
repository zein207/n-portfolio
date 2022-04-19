import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='about__wrapper center'>
        <div>

            <h1>David Ponce</h1>
            <h1 className='f-body'>
                <span className='c-primary'>Frontend</span> Developer<span className='c-primary'>.</span>
            </h1>
            <p>
              Hi! I am a developer with huge experience working on <span className='c-primary'>ecommerce</span> projects. I'm a person who constantly seeks out <span className='c-primary'>innovative</span> solutions to everyday problems.
              <br />
              <br />
              I like to collaborated with talented people to create the best <span className='c-primary'>Frontend</span> solutions for our costumers.
            </p>

            <Link className='btn btn-primary mt-5 about__cta' to='/contact'>Get in Touch</Link>

        </div>
    </div>
  )
}
