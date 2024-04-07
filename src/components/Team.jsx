import React from 'react'
import Card1 from './reusable/Card1'

const Team = () => {

  const CardDetail = [
    {
      id: 1,
      img: './assets/team_1.svg',
      title: 'Brajesh Pathak',
      desc: 'A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...',
    },
    {
      id: 2,
      img: './assets/team_2.svg',
      title: 'Deepak Shukla',
      desc: 'Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience...',
    },
    {
      id: 3,
      img: './assets/team_3.svg',
      title: 'Alok Kumar Singh',
      desc: 'Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Re...',
    },
  ]


  return (
    <div className='flex flex-col justify-center items-center mt-20 gap-10 '>
      <div>
        <h1 className='text-3xl relative'>Our Team Members
          <span className='absolute bottom-0 left-0 w-full h-1 bg-[#002550] rounded-md'></span>
        </h1>
      </div>
      <div className='flex justify-between gap-[40px] w-[90vw]'>
        {CardDetail.map((card) => (
          <Card1
            key={card.id}
            img={card.img}
            title={card.title}
            desc={card.desc} />
        ))}
      </div>
    </div>
  )
}

export default Team