import React from 'react'
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunCard from './FunCard'

const FunFact = () => {
  return (
    <div className='grid grid-cols-4 px-0 pb-10'>
        <FunCard icon={<BsTrophyFill/>}
        des="10 Awards Won"
        />
        <FunCard icon={<SiAntdesign/>}
        des="20 Finished Projects"
        />
        <FunCard icon={<BiCodeAlt/>}
        des="100 hours of Coding"
        />
        <FunCard icon={<IoLogoYoutube/>}
        des="1.5k Subscription"
        />
    </div>
  )
}

export default FunFact