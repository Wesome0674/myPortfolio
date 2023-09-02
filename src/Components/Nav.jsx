import React, { useContext } from 'react'
import {MdOutlineDarkMode} from "react-icons/md"
import {CgMenuRight} from "react-icons/cg"
import {CiLight} from "react-icons/ci"
import { themecontext } from '../userContext'
import { Link } from 'react-scroll'

const Nav = () => {
    const {theme, handleThemeSwitch, nav, setNav} = useContext(themecontext)

    
  return (
    <div className='fixed top-0 w-full z-10 bg-darkBg dark:bg-white'>
      <div className='flex items-center justify-between selection:bg-transparent py-6 px-6 max-w-[1640px] mx-auto border-b-2  border-b-button'>
          <CgMenuRight onClick={() => setNav(!nav)} className='cursor-pointer text-button block sm:hidden' size={35} />
          <h1 className='cursor-pointer text-button text-2xl font-title'>CBK</h1>
          <ul className='gap-x-12 cursor-pointer text-lg hidden sm:flex'>
              <li className='linkAnimation'
              >
                <Link to='home' smooth={true} duration={500}>
                Home
                </Link>
              </li>
              <li className='linkAnimation'
              >
                <Link to='about' smooth={true} duration={500}>
                About
                </Link>
              </li>
              <li className='linkAnimation'
              >
                <Link to='skills' smooth={true} duration={500}>
                Skills
                </Link>
              </li>
              <li className='linkAnimation'
              >
                <Link to='work' smooth={true} duration={500}>
                Work
                </Link>
              </li>
              <li className='linkAnimation'
              >
                <Link to='contact' smooth={true} duration={500}>
                Contact
                </Link>
              </li>
          </ul>
          <div>
            { theme !== 'dark' ? <CiLight className='cursor-pointer text-button' size={35} onClick={handleThemeSwitch} />: <MdOutlineDarkMode className='cursor-pointer text-button' size={35} onClick={handleThemeSwitch} />}
          </div>
      </div>
    </div>
    
  )
}

export default Nav