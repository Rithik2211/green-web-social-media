import { message } from '../assests/index';
import React from 'react';
import '../styles/Home.css';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

function Messages(){
    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", width: "100%", height: "80vh", gap: "44px"}}>
            <motion.div 
            variants={fadeIn('right',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}>
                <h1 className='gradient-text-0'>
                Join the Conversation Here!!
                </h1>
            </motion.div>
            <motion.div 
            variants={fadeIn('left',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}>
                <img src={message} alt='message' style={{}}/>
            </motion.div>
            
        </div>
      ); 
}
export default Messages;