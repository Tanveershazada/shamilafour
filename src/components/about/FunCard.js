import React from 'react'

const FunCard = ({icon,des}) => {
  return (
    <div className='full'>
       <div className='w-full flex flex-col items-center gap-2 py-8 border-r-[1px] border-r-zinc-800 border-b-[1px] border-b-zinc-800'>
        <span className='text-2xl text-designColor'>{icon}</span>
         <p className='w-32 h-10 text-base text-center text-gray-300 duration-200 hover:text-white'>{des}</p>
       </div>
    </div>
  )
}

export default FunCard