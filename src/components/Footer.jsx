import React from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import { HiEnvelope } from 'react-icons/hi2'

const Footer = () => {
    return (
        <section className='w-full h-[20rem] py-16 bg-black px-20 text-white relative'>
            <a href="#home" rel="no">
                <img src="/logo.webp" alt="Logo" className="w-32 mx-auto cursor-pointer" />
            </a>

            <div className='mx-auto w-fit mt-4 flex gap-x-6 text-4xl'>
                <a href="https://twitter.com/WebAIofficial" target="_blank">
                    <SiTwitter className='hover:scale-[1.1] cursor-pointer transition-all ease-in-out' />
                </a>

                <a href="https://t.me/WebAIofficial" target="_blank">
                    <FaTelegramPlane className='hover:scale-[1.1] cursor-pointer transition-all ease-in-out' />
                </a>

                <a href="mailto:contact@webai.live" target="_blank">
                    <HiEnvelope className='hover:scale-[1.1] cursor-pointer transition-all ease-in-out' />
                </a>



            </div>

            <p className='text-center absolute mx-auto left-0 right-0 bottom-4 text-xs font-poppins'>COPYRIGHT WEB AI. 2023. ALL RIGHT RESERVED</p>

        </section>
    )
}

export default Footer
