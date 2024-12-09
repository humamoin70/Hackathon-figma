import React from 'react';
import Link from 'next/link';

const Topbar = () => {
  return (

<div className=''>
    <div className='w-full border-b-2 border-gray-700 flex items-center justify-between'> 

           <h1 className='text-2xl font-bold'>Comforty </h1>
    
     

  <ul className=' flex gap-4 mr-6 cursor-pointer'>
        <Link href={"#"} className='text-sm font-normal '>
        Home 
        </Link>
        <Link href={"#"} className='text-sm font-normal '>
        Shop
        </Link>
        <Link href={"#"} className='text-sm font-normal '>
        Product
        </Link>
        <Link href={"#"} className='text-sm font-normal '>
        Pages
        </Link>
        <Link href={"#"} className='text-sm font-normal '>
        About
        </Link>
        </ul>
        </div>
        </div>
       
        
       
    
  )
}

export default Topbar