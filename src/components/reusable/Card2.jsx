import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Card2 = ({img, title, desc, cat, date, author}) => {
  

  return (

    <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-500 ">
      <img src={img} alt={title} className="w-[407] h-[319px] object-cover px-5 pt-5 rounded-sm" />

        <div className='p-5'>{cat}</div>
        <div className='flex justify-between px-5'>
          <div className='flex gap-2 '>
            <img src="./assets/cal.svg" alt={title} />
            <p>{date}</p>
          </div>
          <p>{author}</p>
        </div>
        <h1 className="text-[28px] font-[600]  p-5">{title}</h1>

        <p className="text-gray-700 mb-4 top-0 p-5">{desc}</p>
        <div className='flex justify-around items-center'>
        <button className='group border-2 border-gray-800 rounded-md px-6 py-3 my-2 flex items-center hover:bg-[#002550] hover:text-white hover:border-[#002550]'>View More
          <span>
            <HiArrowNarrowRight className='ml-2'/>
          </span>
          </button>
        </div>
        
    </div>
  )
}

export default Card2