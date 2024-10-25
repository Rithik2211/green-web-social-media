import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { nftList } from '../utils/nftListData';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

function NFTStore(){
    let navigate = useNavigate();
    return(
        <div style={{display: "flex", flexDirection: "column", padding: "20px", gap: "4px"}}>
            <motion.div 
                variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}>
                <h1 className='gradient-text-0'> NFT Art Work</h1>
            </motion.div>
            <motion.div 
                variants={fadeIn('down',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                 style={{ display: "flex", flexDirection: "row", gap: "34px", minWidth: "100%", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                {
                    nftList?.map((data, index)=> {
                       return  <img src={data?.img } alt="nft" style={{width: "10%", height: "5%", borderRadius: "8px", minWidth: "9rem"}} onClick={() => navigate(`/NFT-Details?index=${index}`)}/>
                    })
                }
            </motion.div>
        </div>
       
    ) 
}
export default NFTStore;