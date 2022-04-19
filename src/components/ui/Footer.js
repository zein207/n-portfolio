import React from 'react'

export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='footer__main-container'>

        <div className='footer__legal'>
          <p>David Ponce &copy; { currentYear }</p>
        </div>

        <div className='footer__social'>
          <ul className='footer__social-list'>

            <li>
              <a href='https://www.linkedin.com/in/david-ponce-681450204' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
            </li>

            <li>
              <a href='https://github.com/zein207' target='_blank'><i className="fa-brands fa-github"></i></a>
            </li>

            <li>
              <a href='https://www.instagram.com/david_ponce.e' target='_blank'><i className="fa-brands fa-instagram"></i></a>
            </li>

          </ul>
        </div>

      </div>
    </footer>
  )
}
