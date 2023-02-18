import React, { useState } from 'react'
import { RiArrowDownSFill } from "react-icons/ri";


const Question = ({ title, desc }) => {

    const [active, setActive] = useState(false)

    const toggle = () => {
        setActive(curr => !curr)
    }

    return (
        <div className='w-full h-auto' onClick={toggle}>
            <div className='w-full h-auto bg-black sm:p-5 p-4 flex items-center justify-between sm:px-10 px-6 font-semibold cursor-pointer'>
                <h1 className='font-saira md:text-lg select-none max-w-[13rem] text-sm sm:max-w-full'>{title}
                </h1>
                <RiArrowDownSFill className='text-4xl transition-all duration-300 ease-in-out w-14 min-w-[2.5rem]' style={active ? { transform: "rotateX(180deg)" } : {}} />
            </div>
            <div className='bg-[#111111] w-full p-0 h-0 opacity-0 transition-all ease-in-out duration-500' style={active ? { height: "auto", padding: "2.5rem", opacity: '100%' } : {}}>
                <p className='transition-all ease-in-out duration-75 select-none' style={active ? { display: "block" } : { display: "none" }}>{desc}</p>
            </div>
        </div>
    )
}

export default Question