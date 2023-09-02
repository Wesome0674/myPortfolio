import React from 'react'
import aboutimg from '../img/aboutimg.svg'

const About = () => {
  return (
    <div  name="about" className='max-w-[1640px]  mx-auto p-8 px-10   xl:h-screen flex items-center '>
      <div className='flex flex-wrap border-l-2 text-center justify-between w-full border-button  pl-[50px]    md:pl-[200px] headings2'>
          <div className='mx-auto'>
              <h1 className='font-title lg:text-8xl md:text-7xl sm:text-5xl text-4xl'>Code by Killian</h1>
              <p className=' sm:text-base md:text-xl max-w-[500px] text-center my-16 text-sm'><span className='text-3xl'>👋</span>"Hello! I'm a determined 17-year-old web developer with 1.5 years of experience. Proficient in HTML, CSS, JavaScript, and React framework, I craft exceptional websites. I also use Tailwind CSS for efficient layouts. Ready to turn your mockups (Figma, Sketch, etc.) into functional sites. Check my portfolio for past projects. Let's collaborate to bring your ideas to life online! 🌟"</p>
          </div>  
          <img className='max-w-[500px] w-[200px] sm:w-full   mx-auto' src={aboutimg} alt="" />
      </div>
    </div>
  )
}

export default About