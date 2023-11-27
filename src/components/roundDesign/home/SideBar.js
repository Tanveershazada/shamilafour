import React from 'react'
import SideBarTitle from "./SideBarTitle";

const SideBar = () => {
  return (
    <div className='px-7 py-4'>
         <SideBarTitle title="M" subTitle="enu"/>
         <ul>
            <li className='sidebarLi'>Blog Page</li>
            <li className='sidebarLi'>Portfolio Page</li>
            <SideBarTitle title="P" subTitle="rojects"/>
         </ul>
         <ul>
         <li className='sidebarLi'>Web Development</li>
         <li className='sidebarLi'>E-Commerce</li>
         <li className='sidebarLi'>Chatting Application</li>
         <li className='sidebarLi'>Portfolio Websites</li>
         <li className='sidebarLi'>Backend Setup</li>
         <li className='sidebarLi'>Amazaon Clone</li>
         </ul>
         <SideBarTitle title="L" subTitle="atest Posts"/>
         <ul>
         <li className='sidebarLi'>UI & UX Conferences at luiv 2022</li>
         <li className='sidebarLi'>How to become a creative design</li>
         <li className='sidebarLi'>E-Commerce</li>
         </ul>
    </div>
  )
}

export default SideBar