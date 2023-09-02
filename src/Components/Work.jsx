import React, { useEffect } from 'react'
import swiftchat from '../img/swiftchat.png'
import yankeebites from '../img/yankeebites.png'
import weatherapp from '../img/theweather.png'
import { FaReact } from 'react-icons/fa'
import { BiLogoFirebase, BiLogoTailwindCss } from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Work = () => {

    useEffect(() => {
        Aos.init();
      }, [])

  return (
    <div name="work"  className='max-w-[1640px]  mx-auto p-8 px-10 sm:h-screen my-16 flex items-center  '>
        <div className='border-l-2 w-full  border-button pl-[50px] md:pl-[150px] headings4'>
            <div className='text-center my-20'>
                <h1 className='font-title  underline md:text-5xl text-3xl'>My latest projects</h1>
            </div> 
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                    <section data-aos="fade-up" className='border-2 border-button rounded-lg'>
                        <img className='rounded' src={weatherapp} alt="" />
                        <div className='p-4'>
                            <h1><span className='font-bold text-button'>The.weather </span>- weather web app</h1>
                            <div className='flex flex-wrap items-center gap-4'>
                                <span className=' font-semibold'>Built using:</span>
                                <div className='flex flex-wrap items-center gap-3'>
                                    <FaReact className="text-button" size={30} />
                                    <span> & OpenWeather API</span>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-4 mt-4'>
                                <button className='border-button border-2 py-1 px-2 text-sm rounded-full hover:text-darkText hover:bg-button'>Code</button>
                                <button className='border-button border-2 py-1 px-2 text-sm rounded-full hover:text-darkText hover:bg-button'>Site</button>
                            </div>
                        </div>
                    </section>
                    <section data-aos="fade-up" data-aos-duration="600" className='border-2 border-button rounded-lg'>
                         <img className='rounded' src={yankeebites} alt="" />
                        <div className='p-4'>
                            <h1><span className='font-bold font-yankeebites text-button'>YankeeBites </span>- Food app</h1>
                            <div className='flex flex-wrap items-center gap-4'>
                                    <span className=' font-semibold'>Built using:</span>
                                    <div className='flex flex-wrap items-center gap-3'>
                                        <FaReact className="text-button" size={30} />
                                        <span> & </span>
                                        <BiLogoTailwindCss className="text-button" size={30}/>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-4 mt-4'>
                                    <button className='border-button border-2 py-1 px-2 text-sm rounded-full hover:text-darkText hover:bg-button'>Code</button>
                                    <button className='border-button border-2 py-1 px-2 text-sm rounded-full hover:text-darkText hover:bg-button'>Site</button>
                                </div>
                        </div>
                       
                    </section>
                    <section data-aos="fade-up" data-aos-duration="800" className='border-2 border-button rounded-lg'>
                        <img className='rounded' src={swiftchat} alt="" />
                        <div className='p-4'>
                            <h1><span className='font-bold font-swiftchat text-button'>SwiftChat </span>- Chat app</h1>
                            <div className='flex flex-wrap items-center gap-4'>
                                    <span className=' font-semibold'>Built using:</span>
                                    <div className='flex flex-wrap items-center gap-3'>
                                        <FaReact className="text-button" size={30} />
                                        <BiLogoTailwindCss className="text-button" size={30}/>
                                        <span> & </span>
                                        <BiLogoFirebase className="text-button" size={30} />
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-4 mt-4'>
                                    <button className='border-button border-2 py-1 px-2 text-sm rounded-full hover:text-darkText hover:bg-button'>Code</button>
                                    <button className='border-button border-2 py-1 px-2 text-sm rounded-full hover:text-darkText hover:bg-button'>Site</button>
                                </div>
                        </div>
                    </section>
                </div>
        </div>
  </div>
  )
}

export default Work