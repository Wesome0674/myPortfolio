import React, { useContext } from 'react'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-scroll'
import { themecontext } from '../userContext'

const MobileNav = () => {

 const {nav, setNav} = useContext(themecontext)

  return (
    <div className={nav ? 'fixed w-full h-screen left-0  top-0 p-8 z-20  bg-button md:hidden block' : 'absolute  w-full h-screen left-0 top-0 p-8 z-20  bg-button hidden '}>
        <div className='flex items-center justify-between'>
            <h1 className='cursor-pointer text-darkBg text-3xl font-title'>CBK</h1>
            <CgClose onClick={() => setNav(!nav)} size={40} />
        </div>
        <ul  className='my-20 gap-6 cursor-pointer text-2xl flex flex-col'>
              <li 
              >
                <Link onClick={() => setNav(!nav)} to='home' smooth={true} duration={500}>
                Home
                </Link>
              </li>
              <li 
              >
                <Link  onClick={() => setNav(!nav)} to='about' smooth={true} duration={500}>
                About
                </Link>
              </li>
              <li 
              >
                <Link  onClick={() => setNav(!nav)} to='skills' smooth={true} duration={500}>
                Skills
                </Link>
              </li>
              <li 
              >
                <Link  onClick={() => setNav(!nav)} to='work' smooth={true} duration={500}>
                Work
                </Link>
              </li>
              <li 
              >
                <Link  onClick={() => setNav(!nav)} to='contact' smooth={true} duration={500}>
                Contact
                </Link>
              </li>
          </ul>
    </div> 
  )
}

export default MobileNav