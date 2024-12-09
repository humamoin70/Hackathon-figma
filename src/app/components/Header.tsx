import React from 'react'
import { FiCheck } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { CiCircleAlert } from "react-icons/ci";

 const Header = () => {
  return (
    
    <header className='bg-blue-950 flex w-full  '>
        <div className=' text-white justify-between items-center'> 
           <p className=' flex items-start justify-between ml-3 '>
                  <FiCheck />Free Shipping On All orders Over $50  </p>  </div>
                     
                     <span className=' flex justify-between text-white gap-24 '> Eng 
                     <IoIosArrowDown />  </span>
                     <span  className='flex  justify-between text-white '> Faqs</span>
                     <span className='flex  justify-between text-white'>
                     <CiCircleAlert />  Need Help</span>


    </header>
  )
}
export default Header
