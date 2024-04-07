import React from 'react'
import Card2 from './reusable/Card2'


const Blogs = () => {

  const BlogDetail = [
    {
      id:1,
      img: './assets/b1.png',
      cat: 'Real Estate, Analysis',
      date: '09 jun 2022',
      title: 'Guide for personal property Buying',
      desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      author: 'By Admin'
    },
    {
      id:2,
      img: './assets/b2.png',
      cat: 'Real Estate, Analysis',
      date: '09 jun 2022',
      title: 'Guide for personal property Buying',
      desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      author: 'By Admin'
    },
    {
      id:3,
      img: './assets/b3.png',
      cat: 'Real Estate, Analysis',
      date: '09 jun 2022',
      title: 'Guide for personal property Buying',
      desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      author: 'By Admin'
    }
  ]
  return (
    <div className='flex flex-col justify-center items-center mt-20 gap-10'>
      <div>
        <h1 className='text-3xl relative'>Blogs
          <span className='absolute bottom-0 left-0 w-full h-1 bg-[#002550] rounded-md'></span>
        </h1>
      </div>
      <div className='flex justify-between items-center gap-[40px] w-[90vw] h-full'>
        <img src="./assets/ar_l.svg" alt="left arrow" />
        <div className='flex justify-between gap-[40px] w-[90vw]'>
          {BlogDetail.map((blog) => (
            <Card2
              key={blog.id}
              img={blog.img}
              cat={blog.cat}
              date={blog.date}
              title={blog.title}
              desc={blog.desc}
              author={blog.author} />
          ))}
        </div>
        <img src="./assets/ar_r.png" alt="right arrow" />
      </div>
    </div>
  )
}

export default Blogs