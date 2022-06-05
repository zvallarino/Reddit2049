import Image from 'next/image'
import React from 'react'
import { 
  BellIcon,
  
  ChatIcon,
  GlobeIcon,
  PlusIcon, 
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon } from '@heroicons/react/outline'
import { 
  ChevronDownIcon,
  HomeIcon, 
  MenuIcon,
  SearchIcon } from '@heroicons/react/solid'



function Header() {
  return (
    <div className="flex bg-white px-4 py-2 shadow-sm">
      <div className = "relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image 
        objectFit = "contain"
        src="https://links.papareact.com/fqy" 
        layout="fill"/>
      </div>

      <div className ="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className = "h-5 w-5"/>
         <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className = "h-5 w-5"/>
      </div>

      {/* Search */}
      <form className = "flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <SearchIcon className = "h-6 w-6 text-gray-400"/>
        <input type="text"
         className = "flex-1 bg-transparent outline-none" 
         placeholder="Search Reddit"/>
        <button type ="submit" hidden/>
      </form>
      
      <div className=" text-gray-500 space-x-2 mx-5 items-center hidden lg:inline-flex">
            <SparklesIcon className='icon'/>
            <GlobeIcon className ="icon" />
            <VideoCameraIcon className ="icon" />
            <hr className = "h-10 border border-gray-100"/>
            <ChatIcon className = "icon" />
            <BellIcon className = "icon" />
            <PlusIcon className = "icon" />
            <SpeakerphoneIcon className = "icon" />
      </div>
      <div className = " text-gray-500 inline-flex mx-5 items-center lg:hidden ">
        <MenuIcon className = "icon"/>
      </div>
    </div>
  )
}

export default Header