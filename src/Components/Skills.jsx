import React, { useEffect } from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import {FaCss3Alt, FaReact} from "react-icons/fa"
import {BiLogoFirebase, BiLogoJavascript, BiLogoTailwindCss} from "react-icons/bi"
import {FiFigma} from "react-icons/fi"
import Aos from 'aos'
import 'aos/dist/aos.css';



const Skills = () => {

    useEffect(() => {
        Aos.init();
      }, [])

  return (
    <div name="skills"  className='max-w-[1640px]  mx-auto p-8 px-10 '>
        <div className='border-l-2 border-button pl-[50px]   md:pl-[200px] headings3'>
            <div className='text-center my-20'>
                <h1 className='font-title md:text-5xl text-3xl underline'>Front End</h1>
            </div> 
            <div className='grid grid-cols-1 gap-10'>
                <div data-aos="fade-right" className=' grid place-content-center md:justify-self-start'>
                    <div className='border-2 border-darkText p-10 dark:border-lightText rounded'>
                        <div className='flex items-center pl-6 mb-6'>
                            <AiFillHtml5 className="text-button" size={45} />
                            <h2 className='ml-4 underline font-bold  sm:text-2xl text-lg '>HTML</h2>
                        </div>
                        <div>
                            <p className=' max-w-[350px] border-l-2 border-l-button pl-6 sm:text-base text-sm  headingsBox'>Proficient in HTML5, the foundational programming language of the web, showcasing my strong skills for your portfolio</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className='grid place-content-center md:justify-self-end'>
                    <div className='border-2 border-darkText p-10 dark:border-lightText rounded'>
                        <div className='flex items-center  pl-6 mb-6'>
                            <FaCss3Alt className="text-button" size={45} />
                            <BiLogoTailwindCss className="text-button" size={45} />
                            <h2 className='font-bold ml-4 underline  sm:text-2xl text-lg'>CSS & Tailwind</h2>
                        </div>
                        <div>
                            <p className=' max-w-[350px] border-l-2 border-l-button pl-6  sm:text-base text-sm  headingsBox'>Additionally, I excel in harnessing the power of CSS, including the modern utility-first framework Tailwind CSS, to create visually stunning and highly responsive web designs for a seamless user experience.</p>
                        </div>
                    </div>
                    
                </div>
                <div data-aos="fade-right" className='grid place-content-center md:justify-self-start'>
                    <div className='border-2 border-darkText p-10 dark:border-lightText rounded'>
                        <div className='flex items-center  pl-6 mb-6'>
                            <BiLogoJavascript className="text-button" size={45} />
                            <FaReact className="text-button" size={45} />
                            <h2 className=' font-bold ml-4 underline  sm:text-2xl text-lg'>JS & React</h2>
                        </div>
                        <div>
                            <p className=' max-w-[350px] border-l-2 border-l-button pl-6  sm:text-base text-sm  headingsBox'>Furthermore, I leverage my expertise in JavaScript and React to develop dynamic and interactive web applications that engage users and deliver exceptional user interfaces.</p>
                        </div>
                    </div>
                   
                </div>
                <div data-aos="fade-left" className='grid place-content-center md:justify-self-end'>
                    <div className='border-2 border-darkText p-10 dark:border-lightText rounded'>
                        <div className='flex items-center  pl-6 mb-6'>
                            <FiFigma className="text-button" size={45} />
                            <h2 className='font-bold ml-4 underline  sm:text-2xl text-lg'>Figma</h2>
                        </div>
                        <div>
                            <p className=' max-w-[350px] border-l-2 border-l-button pl-6  sm:text-base text-sm  headingsBox'>Moreover, I proficiently use Figma to craft intuitive user interfaces, collaborating seamlessly with design teams to transform concepts into pixel-perfect web experiences.</p>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='text-center my-20 '>
                <h1 className='font-title md:text-5xl text-3xl underline '>Back End</h1>
            </div> 
            <div>
                <div data-aos="fade-up" className=' grid place-content-center'>
                    <div className='border-2 border-darkText p-10 dark:border-lightText rounded'>
                         <div className='flex items-center pl-6 mb-6'>
                             <BiLogoFirebase className="text-button" size={45} />
                             <h2 className='  sm:text-2xl text-lg ml-4 underline font-bold'>FireBase</h2>
                        </div>
                        <div>
                             <p className=' max-w-[350px] border-l-2 border-l-button pl-6  sm:text-base text-sm  headingsBox'>While I'm still in the early stages of my journey with Firebase, I'm excited to explore its capabilities, including its role in authentication, for building scalable and real-time web applications, adding yet another valuable dimension to my skill set.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills