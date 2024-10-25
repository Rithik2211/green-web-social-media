import React from 'react';
import { sample, women } from '../assests/index';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

function Home(){
    return(
    <div>
        <motion.div 
        variants={fadeIn('down',0.2)}
        initial="hidden"
        whileInView={"show"}
        style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", flexDirection: "column"}}
        >
            <img src={sample} style={{width: "70%", height: "100%", borderRadius: "8px", margin: "20px"}} alt='dashlogo'/>
            <img src={women} style={{width: "70%", height: "100%", borderRadius: "8px", margin: "20px"}} alt='avatar'/>
            <motion.div
            variants={fadeIn('down',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            >
                <h2 style={{fontFamily: "sans-serif"}}>Meet Some of the Users</h2>
            </motion.div>
        </motion.div>
    </div>
    ) 
}
export default Home;