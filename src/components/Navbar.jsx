import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='flex justify-around mt-3 max-w-full px-20 h-[70px]'>
        <div>
          <img src="./assets/logo.png" alt="logo" />
        </div>

        <nav className='flex justify-center items-end pb-2'>
          <ul className='flex gap-[30px]'>
            <li className='nav_line'>
              <a href="#">Home</a>
            </li>
            <li className='nav_line'>
              <a href="#">Our Offering</a>
            </li>
            <li className='nav_line'>
              <a href="#">Our Team</a>
            </li>
            <li className='nav_line'>
              <a href="#">Contact Us</a>
            </li>
            <li className='nav_line'>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </nav>

        <div className='flex justify-center items-end pb-1 font-medium text-[12px]'>
          <button className='bg-[#002550] text-white py-2 px-6 rounded-md hover:bg-[#1c3e75]'>Register Now</button>
        </div>
      </div>

      <hr className="border-gray-300" />
    </>
  );
}

export default Navbar;
