import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Card = ({img, title, desc, price}) => {
  

  return (

    <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-500 ">
      <img src={img} alt={title} className="w-[407] h-[319px] object-cover px-5 pt-5 rounded-sm" />

        <h1 className="text-[28px] font-[600]  p-5">{title}</h1>

        <p className="text-gray-700 mb-4 top-0 p-5">{desc}</p>
        <div className='flex justify-around items-center'>
        <button className='group border-2 border-gray-800 rounded-md px-6 py-3 my-2 flex items-center hover:bg-[#002550] hover:text-white hover:border-[#002550]'>Contact us
          <span>
            <HiArrowNarrowRight className='ml-2'/>
          </span>
          </button>
          <p>{price}</p>
        </div>
        
    </div>
  )
}

export default Card