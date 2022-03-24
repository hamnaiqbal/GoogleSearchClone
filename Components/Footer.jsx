import { GlobeIcon } from '@heroicons/react/solid'
import React from 'react'


function Footer() {

    
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
        <div className="px-8 py-3">
            <p> Pakistan </p>
        </div>

        <div className="grid grid-cols-1"> 
           <div className="flex justify-center item-center"><GlobeIcon className="h-5 mr-1 text-green-700"/>Carbon neutral since 2007</div> 
            <div className="flex justify-center space-x-8 whitespace-nowrap cursor-pointer"> 
                <p>Advertising</p>
                <p>Business</p>
                <p>How Search Works</p>
            </div>
            <div className="flex justify-center space-x-8 cursor-pointer">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Setting</p>

            </div>
        </div>

    </footer>
  )
}

export default Footer