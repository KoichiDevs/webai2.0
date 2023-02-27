import React, { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Nav from '../utils/Nav'
import Typewriter from "typewriter-effect"
import { motion, AnimatePresence } from 'framer-motion'
import { MdCopyAll, MdOutlineClose } from 'react-icons/md'

const Hero = () => {

    const [contactAddress, setContact] = useState('0x3Bc0f4F178666311F51e028FC3C1d5b561cB1dF6')
    const [clicked, setClicked] = useState(false)
    const [buttonActive, setActive] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(contactAddress)
        setClicked(true)

        setTimeout(() => {
            setClicked(false)

        }, 1000);

    }

    const buywith = [
        {
            label: "dexview",
            link: "https://www.dexview.com/bsc/0x7C5E8A22a4e8f9dA2797a9e30E9d64aBF5493C43"
        },
        {
            label: "poocoin",
            link: "https://poocoin.app/tokens/0x7c5e8a22a4e8f9da2797a9e30e9d64abf5493c43"
        },
        {
            label: "dextools",
            link: "https://www.dextools.io/app/en/bnb/pair-explorer/0x1d643d0d670d64b5ec922d8db3d50f3af706ce93"
        },
        {
            label: "AVEDEX",
            link: "https://avedex.cc/token/0x7c5e8a22a4e8f9da2797a9e30e9d64abf5493c43-bsc?from=Default"
        },

    ]

    const open = () => {
        setActive(true)
    }

    const close = () => {
        setActive(false)
    }

    const popup = (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full h-screen fixed left-0 top-0 z-50 grid place-items-center" key="HeroKey">

            <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0 cursor-pointer" onClick={close}></div>
            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }} transition={{ duration: 0.3 }} className="z-10 relative w-fit h-auto md:px-10 px-8 md:py-8 py-12 bg-[#24191e] text-white rounded-xl">

                <MdOutlineClose className='absolute top-4 right-4 text-white text-2xl cursor-pointer' onClick={close} />

                <h1 className='font-saira md:text-3xl text-center'>View chart:</h1>

                <div className="flex items-center gap-x-3 mt-5 md:flex-row flex-col gap-y-3">
                    {buywith.map((items, index) => {
                        return (
                            <a href={items.link} target="_blank" rel="noreferrer noopener" key={index}>
                                <button className='w-fit h-auto px-10 py-3 bg-button rounded-lg cursor-pointer hover:bg-white hover:text-black font-bold transition-all ease-in-out duration-300 uppercase'>
                                    <p>{items.label}</p>
                                </button>
                            </a>

                        )
                    })}
                </div>
            </motion.div>
        </motion.div>
    )

    return (
        <>
            <Parallax speed={-50}>
                <section className='w-full h-screen bg-heroblue relative text-white overflow-hidden'>
                    <motion.img initial={{ y: 200, opacity: 0 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 1 }} alt="HeroRobot" src="/herobot.webp" className='absolute bottom-0 lg:right-0 h-full z-0 right-[-15rem] opacity-60 min-w-[45rem]'></motion.img>

                    <AnimatePresence>
                        {buttonActive ? popup : null}
                    </AnimatePresence>

                    <div className='w-full max-w-[1700px] mx-auto flex items-center h-full lg:px-20 z-10 relative text-center lg:text-left justify-center lg:justify-start'>
                        <div className=''>
                            <motion.h1 initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1 }} className='font-saira lg:text-8xl font-black text-4xl'>WEB AI</motion.h1>
                            <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.05 }} className='flex lg:text-3xl text-xl font-bold font-saira gap-x-[7px] mx-auto w-fit lg:mx-0 lg:w-auto min-w-[22rem] items-center justify-center lg:justify-start'>
                                <h2 className=''>The future of</h2>
                                <div className='text-header'>
                                    <Typewriter
                                        options={{
                                            strings: ['web developers.', 'programmers.', 'front-end developers.'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>

                            </motion.div>

                            <motion.p initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.1 }} className='mt-7 xl:max-w-[40rem] lg:max-w-[30rem] max-w-[40rem] font-poppins lg:text-md sm:text-sm text-xs px-10 lg:px-0 2xl:text-lg'>AI technology is revolutionizing the world in exciting and groundbreaking ways. Artificial Intelligence 	&#40;AI&#41; is a form of technology that uses algorithms, advanced software and powerful computers to process and interpret data like humans. AI has the potential to dramatically change our society as we know it, providing solutions to problems never before thought possible.</motion.p>

                            <div className='flex gap-x-3 flex-col lg:flex-row items-center justify-center lg:justify-start gap-y-5'>

                                <motion.button initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='bg-button px-12 py-3 w-fit h-fit rounded-lg mt-10 hover:bg-[#040B9E] cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0 font-medium'>
                                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x3Bc0f4F178666311F51e028FC3C1d5b561cB1dF6" target="_blank">Buy Token</a>
                                </motion.button>



                                <motion.button initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='border-[1px] border-white px-12 py-3 w-fit h-fit rounded-lg lg:mt-10 hover:bg-white hover:text-black cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0 font-medium' onClick={open}>
                                    <p>Chart</p>
                                </motion.button>

                                <motion.button initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.15 }} className='border-[1px] border-white px-8 py-3 w-fit h-fit rounded-lg lg:mt-10 hover:bg-white hover:text-black cursor-pointer z-10 relative transition-colors ease-in-out duration-300 mx-auto lg:mx-0 font-medium flex items-center gap-x-2' onClick={handleCopy}>
                                    <MdCopyAll className='text-xl block' stle={clicked ? { display: "hidden" } : {}} />
                                    <p>{clicked ? "Copied!" : "Address"}</p>
                                </motion.button>
                            </div>

                            <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1, delay: 0.05 }} className='lg:text-xl text-xl font-bold mt-6 font-saira gap-x-[7px] mx-auto w-fit lg:mx-0 lg:w-auto min-w-[22rem] items-center justify-center lg:justify-start lg:flex hidden'>
                                <h2 className='hidden'>Contract Address</h2>
                                <div className='text-header'>
                                    <Typewriter
                                        options={{
                                            strings: [contactAddress],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>
                            </motion.div>




                        </div>
                    </div>
                </section>
            </Parallax>

        </>



    )
}

export default Hero
