import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className='m-[75px] p-10 flex justify-between '>
      <div className='flex flex-col justify-center gap-4'>
        <div>
          <h1 className='text-2xl font-semibold'>Get In Touch With Us To Connect</h1>
        </div>
        <div>
          <p className='text-xl'>Contact Us</p>
        </div>
        <div>Form</div>
      </div>
      <div>
        <img src="./assets/contact.png" alt="contact_img" />
      </div>
    </div>
  )
}

export default Contact