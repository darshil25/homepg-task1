import React from 'react'
import Card from './reusable/Card'

const Offering = () => {

  const CardDetail = [
    {id: 1,
    img: './assets/offer_1.svg',
    title: 'Background verification',
    desc: 'Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...',
    price: 'INR 3000/ Project'},
    {id: 2,
    img: './assets/offer_2.svg',
    title: 'Virtual site visit',
    desc: 'It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...',
    price: 'INR 3000/ Project'},
    {id: 3,
    img: './assets/offer_3.svg',
    title: 'Title diligence',
    desc: 'Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...',
    price: 'INR 3000/ Project'},
  ]

  return (
    <div className='flex flex-col justify-start items-center'>
      <div className='m-6 flex flex-col justify-center items-center gap-2'>
        <h1 className='text-3xl relative'>Our Offerings
          <span className='absolute bottom-0 left-0 w-full h-1 bg-[#002550] rounded-md'></span>
        </h1>

        <p>
          This whole purchase journey can be divided into three stages. For more details, <a href="#" className='text-[#002550] font-bold'>Click Here</a></p>
      </div>

      <div className='flex justify-between m-6 gap-6'>
        <div className='flex gap-3 justify-center bg-[#F2F4F6] items-center px-[100px] py-[20px] rounded-sm'>
          <div>
            <img src="./assets/n1.svg" alt="num1" />
          </div>
          <p className='text-2xl'>Pre-Booking</p>
        </div>

        <div className='flex gap-3 justify-center bg-[#CCD3DC] items-center px-[100px] py-[20px] rounded-sm relative'>
          <div>
            <img src="./assets/n2.svg" alt="num2" />
          </div>
          <p className='text-2xl'>Post-Booking & <br />Pre-Registration</p>
          <span className='absolute bottom-0 left-0 w-full h-1 bg-[#002550] rounded-md'></span>
        </div>

        <div className='flex gap-3 justify-center bg-[#F2F4F6] items-center px-[100px] py-[20px] rounded-sm'>
          <div>
            <img src="./assets/n3.svg" alt="num3" />
          </div>
          <p className='text-2xl'>Post-Registration</p>
        </div>
      </div>

      <div className='flex justify-between gap-[40px] w-[90vw]'>
        {CardDetail.map((card) => (
          <Card 
          key={card.id}
          img = {card.img}
          title = {card.title}
          desc = {card.desc}
          price = {card.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Offering