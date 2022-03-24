import React from 'react'

function Avatar({url}) {
  return (
    <img loading="lazy" className="h-10 w-10   cursor-pointer transition duration-150 transform hover:scale-110 rounded-full" src={url}  alt="profile Pic"/>
      
  
  )
}

export default Avatar
