import React from 'react'
import HeaderOpt from "./HeaderOpt";
import { DotsVerticalIcon,MapIcon, NewspaperIcon,PhotographIcon,PlayIcon,SearchIcon } from '@heroicons/react/outline';

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly
    text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]
    ">
        {/* left */}
        <div className="flex space-x-6">
            
            
           
           
            <HeaderOpt Icon={SearchIcon} title="All" selected/>
            <HeaderOpt Icon={PhotographIcon} title="Images"/>
            <HeaderOpt Icon={PlayIcon} title="Videos"/>
            <HeaderOpt Icon={NewspaperIcon} title="News"/>
            <HeaderOpt Icon={MapIcon} title="Maps"/>
            <HeaderOpt Icon={DotsVerticalIcon} title="More "/>
            
        </div>

        {/* Right */}
        <div className="flex space-x-4 pt-6">
            <p className="link cursor-pointer">Setting</p>
            <p className="link cursor-pointer">Tools</p>


        </div>
      
    </div>
  )
}

export default HeaderOptions
