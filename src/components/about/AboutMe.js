import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex pb-6'>
        <div className='flex flex-col w-1/2 px-6 py-6 text-zinc-400 borderRight'>
           <div className='py-7'>
           <h2 className='mb-1 text-lg font-semibold'>Hello I'm Shamila Khan</h2>
           <p className='text-base leading-6'>
            Web developer from Pakistan, Gilgit. I have rich experience in web site design and building, also I am good at wordpress. i love to talk with you about our unique.
           </p>
           </div>
        </div>
        <div className='w-1/2 p-6'>
            <ul>
                <li className='aboutRightLi'><span className='aboutRightLiSpan'>Age:</span>27</li>

                <li className='aboutRightLi'><span className='aboutRightLiSpan'>Residence:</span>Gilgit Pakistan</li>

                <li className='aboutRightLi'><span className='aboutRightLiSpan'>Freelance:</span>Available</li>

                <li className='aboutRightLi'><span className='aboutRightLiSpan'>Address:</span>Jutial Gilgit</li>
            </ul>
        </div>
    </div>
  )
}

export default AboutMe