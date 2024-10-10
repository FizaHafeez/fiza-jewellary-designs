import React from 'react' 
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Fiza Hafeez</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#desgins'>designs</a></li>
                <li className='menuLink'><a href='#contact'>contact</a></li>
            </ul>
            <AiOutlineMenu className='md:hidden' size={30} />
        </div>
      
    </div>
  )
}

export default Navbar
