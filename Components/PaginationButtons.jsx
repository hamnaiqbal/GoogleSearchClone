import React from 'react'
import {ChevronLeftIcon,ChevronRightIcon} from "@heroicons/react/solid"
import {useRouter} from "next/router"
import Link from "next/link"
function PaginationButtons() {
    const router=useRouter();
    const startIndex= Number(router.query.start) || 0;
  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
        {startIndex >=10 && (
            <Link href={`/search?term=${router.query.term}&start=${startIndex-10}`}>
                <div className="flex flex-grow item-center  hover:underline cursor-pointer flex-row ">
                <ChevronLeftIcon className="h-5"/>
                <p>Previous</p>
                </div>
                
            </Link>
        )} 
        <Link href={`/search?term=${router.query.term}&start=${startIndex+10}`}>
            <div className="flex flex-grow item-center  hover:underline cursor-pointer flex-row">

            <ChevronRightIcon className="h-5"/>
            <p>Next</p>
            </div>
        </Link>

      
    </div>
  )
}

export default PaginationButtons
