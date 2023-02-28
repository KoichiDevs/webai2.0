import React from 'react'
import { TwitterEmbed } from 'react-social-media-embed';
import PartnerTemplate from '../utils/PartnerTemplate';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';

const Partners = () => {

    const [bitRef, bitView] = useInView({triggerOnce: true, threshold: 0.8})
    const [descRef, descView] = useInView({triggerOnce: true, threshold: 0.8})


    const partnerList = [
        {
            link: 'https://www.dexview.com',
            image: 'dexview'
        },
        {
            link: 'https://www.pinksale.finance',
            image: 'pinksale'
        },
        {
            link: 'https://poocoin.app/tokens/0x7c5e8a22a4e8f9da2797a9e30e9d64abf5493c43',
            image: 'poocoin'
        },
        {
            link: 'https://www.dextools.io/app/en/bnb/pair-explorer/0x1d643d0d670d64b5ec922d8db3d50f3af706ce93',
            image: 'dextools'
        },
        {
            link: 'https://avedex.cc/token/0x7c5e8a22a4e8f9da2797a9e30e9d64abf5493c43-bsc?from=Default',
            image: 'avedex'
        },
        {
            link: 'https://www.bitmart.com/en-US',
            image: 'bitmart'
        },

    ]

    return (
        <section className="w-full h-auto py-20 text-white bg-[#0A0B31]">
            <div className="max-w-[1700px] w-full mx-auto px-6 flex lg:justify-between items-center flex-col justify-center gap-y-14">
                <div className='text-center'>
                    <h1 className='font-saira font-bold lg:text-5xl w-fit mx-auto lg:mx-0 text-4xl'>We work with the best partners</h1>
                    <p className='max-w-[30rem] mt-3 font-poppins mx-auto'>As the crypto market continues to evolve and mature, we recognize the importance of collaboration and building strong relationships with key players in the industry.</p>
                </div>

                <div className=' gap-y-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 items-center justify-center place-items-center w-fit'>

                    {partnerList.map((items, index) => {
                        return (
                            <PartnerTemplate key={index} link={items.link} image={items.image} />
                        )
                    })}



                </div>

                <div className="flex justify-around w-fit gap-x-20 mt-20 lg:flex-row flex-col-reverse lg:items-start items-center gap-y-10">
                    <div className="w-fit  shadow-glow h-fit bg-white rounded-xl">

                        <TwitterEmbed url="https://twitter.com/BitMartExchange/status/1630223208291901442?s=20" width={325} />
                    </div>
                    <div className="max-w-[25rem]">
                        <motion.h1 initial={{x: 100, opacity: 0}} animate={bitView ? {opacity: 1, x: 0} : {}} transition={{duration: 0.7}} className="font-saira lg:text-4xl text-3xl font-bold" ref={bitRef}>We are now partnered with BitMart</motion.h1>

                        <motion.div initial={{x: 100, opacity: 0}} animate={descView ? {opacity: 1, x: 0} : {}} transition={{duration: 0.7}}  className="flex flex-col gap-y-8 mt-4 font-poppins" ref={descRef}>
                            <p className=''>BitMart is a global cryptocurrency exchange that allows users in 180+ countries to buy and sell over 1,000 digital currencies and tokens.</p>

                            <p>While BitMart offers all the features you’d expect from a global crypto exchange, it was hacked in December 2021, which resulted in an estimated $196 million cryptocurrency theft.</p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Partners