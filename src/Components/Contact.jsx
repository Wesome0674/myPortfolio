import React,  { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import {LuSend} from "react-icons/lu"
import contactimg from '../img/contactimg.svg'

const Contact = () => {
    const [validation, setValidation] = useState('')

    const form = useRef();

    const inputs = useRef([])

  const addInputs = el => {
    if (el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }

  console.log(inputs);

    const sendEmail = (e) => {
      e.preventDefault();

      if (inputs.current[0].value.length === 0) {
        setValidation('Please enter a valid name')
        return
      } else if (inputs.current[1].value.length === 0) {
        setValidation('Please enter a valid email')
        return
      } else if (inputs.current[2].value.length === 0) {
        setValidation('Please enter a valid message')
        return
      }
     
  
      emailjs.sendForm('service_weq4eww', 'template_uyo64rq', form.current, 'Y-kUBr67FiIff59A0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
       form.current.reset()
        setValidation('Message sent')
    };
  
  return (
        <div name="contact"  className='max-w-[1640px]  mx-auto p-8 px-10 xl:h-screen flex items-center'>
            <div className='border-l-2 w-full  border-button pl-[50px] md:pl-[150px] headings5'>
                <div className='text-center my-20'>
                    <h1 className='font-title  underline md:text-5xl text-3xl'>Contact me here !</h1>
                </div> 
                <div>
                  <div className='grid md:grid-cols-2 grid-cols-1 '>
                      <form ref={form} className='flex flex-col' onSubmit={sendEmail}>
                          <input ref={addInputs} className='mb-6 focus:outline-none w-[100%] max-w-[300px] h-10 dark:placeholder:text-lightText dark:text-lightText placeholder:text-darkText text-darkText border-b-2 border-b-button bg-transparent' placeholder='Name' type="text" name="user_name" />
                          <input ref={addInputs} className='mb-6 focus:outline-none w-[100%] max-w-[500px] h-10 dark:placeholder:text-lightText dark:text-lightText  placeholder:text-darkText text-darkText border-b-2 border-b-button bg-transparent ' placeholder='Email' type="email" name="user_email" />
                          <label>Message</label>
                          <textarea ref={addInputs} className=' mb-6 focus:outline-none min-h-[150px] max-w-[500px]  w-[100%] border-button border-2 bg-transparent dark:text-darkBg text-darkText' name="message" />
                          <p className='text-button font-bold'>{validation}</p>
                          <div className='flex my-6 cursor-pointer'>
                              <button  type="submit" value="Send"  className='md:text-lg text-sm flex gap-4 items-center border-2 border-button p-4 rounded hover:bg-button hover:text-darkBg duration-200' >
                                  Send message
                                  <LuSend size={25} />
                              </button>
                          </div>
                      </form>
                      <img src={contactimg} className='max-w-[500px]' alt="" />
                  </div>
                </div>
               
            </div>
        </div>
  )
}

export default Contact