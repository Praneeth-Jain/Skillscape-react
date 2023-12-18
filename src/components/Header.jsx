import React from 'react';
import { Logo } from '../assets';
import { Link } from 'react-router-dom';
import { CustomButton } from './';


const Header = () => {
  return (
    
        <div className='w-full p-2  h-1/6 bg-bgColor flex justify-start items-center   border-b-2 border-b-black'>
            <div className='w-1/4 flex justify-start ml-3 items-center'>
                <div className='p-1 w-12 h-12 md:p-2  rounded text-white'>
                    <img src={Logo} alt="logo" />
                </div>
                <span className='text-2xl text-ascent-2 font-semibold'>
                SkillScape
                </span>
            </div>
            <nav className=' ml-4  w-1/2 flex justify-evenly p-2 text-ascent-2 '>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact us</Link>
                <Link to='/careers'>Careers</Link>
                <Link to='/help'>Help</Link>
                <Link to='#'>Browse <span className='text-secondary'>&gt;</span></Link>
            </nav>
            <div className=' w-1/4 flex justify-end mr-4 items-center'>
                <Link to='/login'>
                <CustomButton
                        title='Login'
                        containerStyles='bg-secondary text-xl mr-3 text-tertiary px-2 py-2 rounded-md '
                        />
                </Link>
                <Link to='/register'>
                <CustomButton
                        title='Sign Up'
                        containerStyles='bg-white text-xl mr-3 text-tertiary  px-2 py-2 rounded-md'
                        />
                </Link>
            </div>
        </div>
  )
}

export default Header;