import React from 'react'

export const Contact = () => {

    const copyNumber = (e) => {
        navigator.clipboard.writeText(e.target.innerText);
        e.target.innerText = 'Copied to clipboard!';

        setTimeout(() => {
            e.target.innerHTML = '<i class="fa fa-phone"></i> 55 19 13 08 41'
        }, 2000);
    }
    return (
        <div className='center mt-5' id='ContactMe'>
            <h2 className='subtitle'>Contact me</h2>
            <address className='contact__wrapper pl-5'>
                <a className='contact__item' href='mailto:davidponceg207@gmail.com'><i className="fa-regular fa-envelope"></i> davidponceg207@gmail.com</a>
                <p className='contact__item' onClick={ copyNumber }><i className="fa fa-phone"></i> 55 19 13 08 41</p>
            </address>
        </div>
    )
}
