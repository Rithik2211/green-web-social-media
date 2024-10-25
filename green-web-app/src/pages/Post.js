import { post } from '../assests/index';
import React from 'react';
import '../styles/Home.css';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

function Post(){
    return (
        <motion.div 
        variants={fadeIn('down',0.2)}
        initial="hidden"
        whileInView={"show"}
        style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", width: "100%", height: "80vh", gap: "44px"}}>
            <h1 className='gradient-text-0'>
                Share You Portraits Here!!
            </h1>
            <img src={post} alt='message' style={{}}/>
        </motion.div>
      ); 
}
export default Post;