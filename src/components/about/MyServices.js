import React from 'react'
import { FaAppStoreIos } from 'react-icons/fa';
import { AiTwotoneAppstore } from 'react-icons/ai';
import { SiAntdesign } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import ServicesCard from './ServicesCard'

const MyServices = () => {
  return (
    <div className='grid grid-cols-2'>
        <ServicesCard icons={<BiCodeAlt/>} 
        title="Web Development"
        subTitle=" Web development is the art of creating and maintaining websites, involving coding, design, and functionality for seamless online user experiences"
        />
         <ServicesCard icons={<SiAntdesign/>} 
        title="Web Design"
        subTitle="Web design is the creative process of crafting visually appealing and user-friendly websites, focusing on layout, color, and aesthetics."
        />
         <ServicesCard icons={<AiTwotoneAppstore/>} 
        title="Mobile Application"
        subTitle=" Mobile applications are software designed for smartphones, providing diverse functionalities from productivity tools to entertainment, enhancing on-the-go user experiences."
        />
         <ServicesCard icons={<FaAppStoreIos/>} 
        title="SEO"
        subTitle=" SEO, or search engine optimization, is the practice of optimizing websites to improve visibility on search engines and boost rankings."
        />
       
        
    </div>
  )
}

export default MyServices