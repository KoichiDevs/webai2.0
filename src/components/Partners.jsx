import React from 'react'

const Partners = () => {
    return (
        <section className="w-full h-auto py-20 text-white bg-[#0A0B31]">
            <div className="max-w-[1700px] w-full mx-auto px-14 flex lg:justify-between items-center lg:flex-row flex-col justify-center gap-y-14">
                <div className='text-center lg:text-left'>
                    <h1 className='font-saira font-bold lg:text-5xl w-fit mx-auto lg:mx-0 text-4xl'>We work with the best partners</h1>
                    <p className='max-w-[30rem] mt-3 font-poppins'>As the crypto market continues to evolve and mature, we recognize the importance of collaboration and building strong relationships with key players in the industry.</p>
                </div>

                <div className='flex flex-col flex-start gap-y-7'>
                    <a href="https://www.dexview.com" target="_blank" rel="noopener noreferrer" className="">
                        <img src="/dexview.webp" alt="DexView" className="w-[14rem] invert" />
                    </a>
                    <a href="https://www.pinksale.finance" target="_blank" rel="noopener noreferrer" className="">
                        <img src="/pinksale.webp" alt="PinkSale" className="w-[14em] brightness-100" />
                    </a>



                </div>
            </div>
        </section>

    )
}

export default Partners