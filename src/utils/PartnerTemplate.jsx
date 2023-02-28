import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PartnerTemplate = ({ link, image }) => {

    const [ref, inView] = useInView({triggerOnce: true, thershold: 0.9})

    return (
        <motion.a initial={{opacity: 0.1}} animate={inView ? {scale: [0.5, 1], opacity: 1} : {}} transition={{duration: 0.5}} href={link} target="_blank" rel="noopener noreferrer" className={`max-w-[17rem] p-4 border-2 border-[#03076b] hover:border-button px-10 hover:shadow-glow transition-all ease-in-out duration-300`} ref={ref}>
            <img src={`/${image}.webp`} alt="DexView" className={`w-[11rem] brightness-100 ${image === "dexview" ? "invert" : ""}`} />
        </motion.a>
    )
}

export default PartnerTemplate