import React from 'react';
import { women, demo2, trees, demo3 } from '../assests/index';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

function Home(){
    return(
    <div className='min-h-screen bg-white'>
        <motion.div 
            variants={fadeIn('down',0.2)}
            initial="hidden"
            whileInView={"show"} className='relative h-[500px] rounded-lg mx-4 my-6 overflow-hidden'>
            <img src={demo3} alt='trees' className='rounded-lg w-full ' style={{objectFit: "cover"}}/>
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-6'>
                <h1 className='text-5xl mb-4'>Welcome to EcoSync!!</h1>
                <p className='text-xl mb-8 text-center max-w-2xl'>Connect with like-minded individuals and share your knowledge about environmental issues.</p>
                <div className='w-full max-w-2xl relative'>
                    <input type='text' placeholder='Search for like minded peoples' className='w-full rounded-full placeholder-gray-600 py-2 px-3 text-black outline-none'/>
                    <button className='absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-green-400 px-3 py-1 '>Search</button>
                </div>
            </div>
        </motion.div>
        <motion.div 
            variants={fadeIn('down',0.2)}
            initial="hidden"
            whileInView={"show"} className='rounded-lg mx-4 my-6 overflow-hidden '>
            <img src={women}  alt='women' className='rounded-lg m-[20px] relative ml-5 '/>
        </motion.div>
    </div>
    ) 
}
export default Home;