import React from 'react'

const Title = ({title,subTitle}) => {
  return (
    <h1 className='relative z-10 px-6 py-3 text-xl font-bold capitalize font-titleFont text-textColor borderBottom group'>
    <span className='text-designColor'>{title}</span> {subTitle} 
    <span className='absolute inline-block w-8 h-8 transition-transform duration-500 translate-x-0 rounded-full bg-gradient-to-t from-designColor to-gray-600 left-2 top-3 opacity-10 -z-10 group-hover:translate-x-24'></span>

</h1>
  )
}

export default Title