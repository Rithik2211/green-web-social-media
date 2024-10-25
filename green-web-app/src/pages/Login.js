import { logo1 } from '../assests/index';
import React from 'react';
import '../styles/Home.css';
import { ConnectEmbed } from '@thirdweb-dev/react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

function Login(){
    return (
        <div className='loginMain'>
            <motion.div 
                variants={fadeIn('down',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                 className='imgContainer'>
                <img src={logo1} alt='EcoSync Logo' draggable="false" style={{width: "100%", height: "100%"}}/>
            </motion.div>
            <motion.div 
                variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                 className='loginBox'>
                <h1 style={{color: '#fffff'}}>
                    Login to Join the Eco Sync!!
                </h1>
                <ConnectEmbed theme="dark" />
            </motion.div>
        </div>
      ); 
}
export default Login;