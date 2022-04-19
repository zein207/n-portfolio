import React from 'react'
import { copyNumber } from '../../helpers/copyNumber'

export const Contact = () => {

    return (
        <div className='mt-5'>
            <h2 className='subtitle'>Contact me</h2>
            <address className='contact__wrapper pt-5'>
                <a className='contact__item' href='mailto:davidponceg207@gmail.com'><i className="fa-regular fa-envelope"></i> davidponceg207@gmail.com</a>
                <p className='contact__item' onClick={ copyNumber }><i className="fa fa-phone"></i> 55 19 13 08 41</p>
            </address>
        </div>
    )
}
