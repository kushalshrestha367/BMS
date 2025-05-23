import React from 'react'
import { Link } from 'react-router-dom'

const Card1 = () => {
  return (
 < Link to = "/blog/id">
     <div className="max-w-sm rounded overflow-hidden shadow-lg mb-7">
    <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_4SRLRgzlIo7xQ2_3wnSdSv0J3M_CR9HQg&s"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Virginia Beach</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
 </Link>
  )
}

export default Card1