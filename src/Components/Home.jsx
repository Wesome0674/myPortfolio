import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail} from "react-icons/ai"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='max-w-[1640px]  mx-auto p-8 px-10 xl:h-screen mt-16 flex items-center'>
            <div className='flex flex-wrap border-l-2 w-full  md:mt-[100px] justify-between mt-12 border-button sm:pl-[100px] pl-[50px]    md:pl-[200px] headings'>
                <div>
                    <div>
                        <h1 className='font-title lg:text-8xl md:text-7xl sm:text-5xl text-4xl'>Front end</h1>
                        <h1 className='font-title lg:text-8xl  md:text-7xl sm:text-5xl text-4xl' >Web Developper</h1>
                    </div>
                    <div className='my-6'>
                        <Link to='work' smooth={true} duration={500}>
                            <button className='border-2 border-button text-[10px] md:text-base mb-4 py-4 px-6 mr-6 rounded hover:bg-button duration-200 hover:text-darkBg'>
                                View Work
                            </button>
                        </Link>
                        <button className='border-2 border-button  text-[10px] md:text-base  p-4 rounded hover:bg-button duration-200 hover:text-darkBg'>
                            Hire me !
                        </button>
                    </div>
                    <div className='flex items-center flex-col'>
                        <h2 className='border-b-[1px] w-full text-center my-6 py-2 sm:text-base text-sm'>Social Media</h2>
                        <div className='flex gap-x-6 flex-wrap'>
                           <a href='https://github.com/Wesome0674'> <AiFillGithub className='hover:text-button duration-150' size={35} /></a>
                           <a href='https://www.linkedin.com/in/killian-b-461061267/'> <AiFillLinkedin className='hover:text-button duration-150' size={35} /></a>
                           <a href='https://twitter.com/Killian_bd'> <AiFillTwitterCircle className='hover:text-button duration-150' size={35} /></a>
                           <Link to='contact' smooth={true} duration={500}> <AiFillMail className='hover:text-button duration-150' size={35} /> </Link>
                        </div>
                    </div>
                </div>
                <div className='shape mt-10  md:h-[200px] lg:h-[250px] s h-[150px] aspect-square mx-auto'>
                </div>
                </div>
        </div>
  )
}

export default Home