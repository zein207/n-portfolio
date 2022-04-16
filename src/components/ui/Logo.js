import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/' className='logo'>
        <h3>David Ponce<span className='c-primary'>.</span></h3>
    </Link>
  )
}
