import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume, FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='w-full h-[50vh] flex flex-col bg-[#002550] text-white px-[100px] py-[50px] gap-5'>
      <div className='flex justify-between '>
        <div>
          <img src="./assets/logo_ftr.png" alt="" className='bg-inherit'/>
        </div>
        <div>
          <h1 className='text-2xl font-bold pb-5'>Company</h1>
          <ul className='flex flex-col gap-3'>
            <li>Home</li>
            <li>Our Offerings</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
        <h1 className='text-2xl font-bold pb-5'>Useful Links</h1>
          <ul className='flex flex-col gap-3'>
            <li>Blogs</li>
            <li>FAQ's</li>
          </ul>
        </div>

        <div className='flex flex-col gap-10'>
          <div className='flex gap-2 justify-center items-center'>
            <div>
              <MdOutlineEmail/>
            </div>
            <div>
              <ul className='flex flex-col'>
                <li>Email:</li>
                <li>support@inreglobal.com</li>
              </ul>
            </div>
          </div>
          
          <div className='flex gap-2 items-center'>
            <div>
              <FaPhoneVolume />
            </div>
            <div>
              <ul className='flex flex-col'>
                <li>Phone: </li>
                <li>+91 | 7019305889</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='mt-auto'>
      <div className='flex justify-between bottom-0'>
        <div>Copyright 2023, Designed By INRE Global</div>
        <div>
          <ul className='flex gap-5'>
            <li className='flex items-center gap-1'>
              <CiLinkedin />
              linkedIn
            </li>
            <li className='flex items-center gap-1'>
              <AiOutlineFacebook />
              Facebook
            </li>
            <li className='flex items-center gap-1'>
              <RiTwitterLine />
              Twitter
            </li>
            <li className='flex items-center gap-1'>
              <FaInstagram />
              Instagram
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer