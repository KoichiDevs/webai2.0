import React from 'react'
import Question from '../templates/Question';

const FAQ = () => {
    return (
        <section className='w-full h-auto py-20 px-10 bg-darker text-white'>
            <h1 className='text-center mt-7 font-saira text-5xl font-bold select-none text-white'>FAQ</h1>
            <div className='w-full h-auto mt-10 max-w-[1300px] mx-auto flex flex-col gap-y-4'>

                <Question title="Q1: What are the safety measures for the project?" desc="Three main components making the project safe are KYC, Audit and DOXX features which will be done through Pinksale launchpad platform. Audit will be implemented for $WEBAI token contract in order to guarantee safety of the trading for investors." />

                <Question title="Q2: Where I can buy $WEBAI?" desc="From 22nd to 24th February, Web AI is conducting a fairlaunch on Pinksale platform where investors are able to contribute before $WEBAI is officially launched. After 24th February, next chance to buy $WEBAI tokens is the official launch day, 27th February, where trading opens on Pancakeswap DEX. “BUY” button will appear our website in order to provide easy access to Pancakeswap page." />

                <Question title="Q3: How I can contact Web AI team?" desc="To contact us, feel free to join our Telegram community at @WebAIofficial where you are able to ask any questions regarding Web AI project. For any sort of proposals, we have instructions in our Telegram community to hear your thoughts about the project." />

            </div>
        </section>
    )
}

export default FAQ
