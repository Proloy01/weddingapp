import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title,shadow,path}) => {
  return ( <Link className={` text-white cursor-pointer headingfont explore w-fit flex items-center gap-1 tracking-wider border border-[#ffffff98] px-3 py-1 text-sm rounded-md hover:px-4 duration-150 ease-linear ${shadow?'bxshadow':''}`} to={path}>{title} <i className='bx bx-right-arrow-alt' ></i></Link>
  )
}

export default Button