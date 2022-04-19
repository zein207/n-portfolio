import React from 'react'
import { copyNumber } from '../../helpers/copyNumber'

export const ContactScreen = () => {

  return (
      <div className='center contact-screen__wrapper'>
          <h2 className='subtitle'>Contact me</h2>

          <div className='mt-10'>
            <h1 className='contact-screen__title'>David Ponce</h1>
            <h1 className='f-body'>
                <span className='c-primary'>Frontend</span> Developer<span className='c-primary'>.</span>
            </h1>
            <p className='mt-5'>If you think we can work together feel free to send me a message.</p>
          </div>
          <address className='contact__wrapper mt-10'>
              <a className='contact__item' href='mailto:davidponceg207@gmail.com'><i className="fa-regular fa-envelope"></i> davidponceg207@gmail.com</a>
              <p className='contact__item' onClick={ copyNumber }><i className="fa fa-phone"></i> 55 19 13 08 41</p>
          </address>
      </div>
  )
}
