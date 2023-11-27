import React from 'react'

const ServicesCard = ({icons, title, subTitle}) => {
  return (
    <div className='flex flex-col items-center gap-2 px-6 py-8 borderRight borderBottom'>
        <span className='mb-2 text-4xl text-designColor'>
            {icons}
        </span>
        <h2 className='text-lg font-semibold font-titleFont'>{title}</h2>
        <p className='px-6 text-base text-center text-zinc-400'> 
       {subTitle}
        </p>
    </div>
  )
}

export default ServicesCard;