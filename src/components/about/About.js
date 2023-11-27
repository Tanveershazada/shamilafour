import React from 'react'
import Title from '../roundDesign/home/Title'
import AboutMe from './AboutMe'
import MyServices from './MyServices'
import FunFact from './FunFact'

const About = () => {
  return (
    <section id='about' className='w-full'>
       <Title title="About" subTitle="Me"/>
       <AboutMe/>
       <Title title="My" subTitle="Services"/>
       <MyServices/>
       <Title title="Fun" subTitle="Fact"/>
       <FunFact/>

    </section>
  )
}

export default About