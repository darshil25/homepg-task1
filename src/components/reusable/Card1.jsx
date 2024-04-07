import React from 'react'

const Card = ({ img, title, desc}) => {


  return (

    <div className="bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-500 ">
      <img src={img} alt={title} className="w-[407] h-[319px] object-cover px-5 pt-5 rounded-sm" />

      <h1 className="text-[28px] font-[600]  p-5">{title}</h1>

      <p className="text-gray-700 mb-4 top-0 p-5">{desc}</p>
    </div>
  )
}

export default Card