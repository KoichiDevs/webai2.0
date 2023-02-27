import React from 'react'

const Partners = () => {
    return (
        <section className="w-full h-auto py-20 text-white bg-[#0A0B31]">
            <div className="max-w-[1700px] w-full mx-auto px-6 flex lg:justify-between items-center flex-col justify-center gap-y-14">
                <div className='text-center'>
                    <h1 className='font-saira font-bold lg:text-5xl w-fit mx-auto lg:mx-0 text-4xl'>We work with the best partners</h1>
                    <p className='max-w-[30rem] mt-3 font-poppins mx-auto'>As the crypto market continues to evolve and mature, we recognize the importance of collaboration and building strong relationships with key players in the industry.</p>
                </div>

                <div className=' gap-y-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 items-center justify-center place-items-center w-fit'>

                    <a href="https://www.dexview.com" target="_blank" rel="noopener noreferrer" className="max-w-[17rem] p-4 border-2 border-button px-10 hover:shadow-glow transition-all ease-in-out duration-300">
                        <img src="/dexview.webp" alt="DexView" className="w-[11rem] invert" />
                    </a>
                    <a href="https://www.pinksale.finance" target="_blank" rel="noopener noreferrer" className="max-w-[17rem]  p-4 border-2 border-button px-10 hover:shadow-glow transition-all ease-in-out duration-300 ">
                        <img src="/pinksale.webp" alt="PinkSale" className="w-[11em] brightness-100" />
                    </a>
                    <a href="https://poocoin.app/tokens/0x7c5e8a22a4e8f9da2797a9e30e9d64abf5493c43" target="_blank" rel="noopener noreferrer" className=" p-4 border-2 border-button px-10 max-w-[17rem] hover:shadow-glow transition-all ease-in-out duration-300">
                        <img src="/poocoin.webp" alt="poocoin" className="w-[11em] brightness-100" />
                    </a>
                    <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0x1d643d0d670d64b5ec922d8db3d50f3af706ce93" target="_blank" rel="noopener noreferrer" className=" p-4 border-2 border-button px-10 max-w-[17rem] lg:col-start-1 lg:col-end-2">
                        <img src="/dextools.webp" alt="dextools" className="w-[11em] brightness-100 hover:shadow-glow transition-all ease-in-out duration-300" />
                    </a>
                    <a href="https://avedex.cc/token/0x7c5e8a22a4e8f9da2797a9e30e9d64abf5493c43-bsc?from=Default" target="_blank" rel="noopener noreferrer" className=" p-4 border-2 border-button px-10 max-w-[17rem] lg:col-start-3 lg:col-end-4 hover:shadow-glow transition-all ease-in-out duration-300">
                        <img src="/avedex.webp" alt="avedex" className="w-[11em] brightness-100" />
                    </a>



                </div>
            </div>
        </section>

    )
}

export default Partners