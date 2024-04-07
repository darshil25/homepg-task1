import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const First = () => {

  
  return (
    <div className='flex flex-col justify-center items-center m-4 gap-4 '>
      <div className='w-[80vw] h-[54vh] object-cover rounded-sm'>
        <img src="./assets/home_1.svg" alt="Home_image" />
      </div>

      <div className='w-[80vw] h-[54vh] flex px-4 py-5 gap-5 bg-[#E6EAEE] rounded-sm'>
        <img src="./assets/home_img.png" alt="home_2" className='h-[40%px] max-w-[60%] flex-1 relative overflow-hidden object-cover rounded-md'/>

        <div className='flex flex-col justify-around max-w-[40%]'>
          <div>
            <h1 className='text-3xl font-bold'>Who We Are</h1>
          </div>
          <div>
            <p className='text-[15px]'>
            The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.
            </p>
          </div>
          <div>
          <button className='group border-2 border-gray-800 rounded-md px-6 py-3 my-2 flex items-center hover:bg-[#002550] hover:text-white hover:border-[#002550]'>View Projects 
          <span>
            <HiArrowNarrowRight className='ml-2'/>
          </span>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First