import React from "react";
import Image from "next/Image";
import { useRouter } from "next/router";
import {useRef} from "react"
import { MicrophoneIcon, XIcon ,SearchIcon} from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";



function Header() {
  const router = useRouter();
  const inputSearch=useRef(null)

  const SearchPage = (e)=>{
      e.preventDefault();
      const term= inputSearch.current.value;
      if(!term) return;
      router.push(`/search?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white p-5">
    <div className="flex">
      <Image
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
        height={30} alt=""
        width={90}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border 
      border-gray-200 rounded-full shadow-lg items-center max-w-3xl">

          <input type="text" ref={inputSearch} 
          className="flex-grow w-50
           focus:outline-none"/>
          <XIcon onClick={()=>(inputSearch.current.value="")} 
          className="h-6 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125 text-gray-500"/>

          <MicrophoneIcon className="mr-3 h-6 cursor-pointer hidden 
          sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>

          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>

          <button type="Submit" hidden onClick={SearchPage}>Search</button>
      </form>
      <Avatar className="ml-auto" url="https://1.bp.blogspot.com/-w0GcBmytuO8/YUBJA1heaVI/AAAAAAAAMwI/AmlbN6GJ3_Al43mZ7OTlzmdegX8uz0bmwCLcBGAsYHQ/s825/Instagram-DP-for-Girls%2B%25281%2529.jpg"/>
     </div>

     {/* Header Options */}

     <HeaderOptions/>

    </header>
  );
}

export default Header;
