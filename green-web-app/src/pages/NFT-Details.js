import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nftList } from '../utils/nftListData';
import '../styles/Home.css';
import { useAddress } from '@thirdweb-dev/react';
import { NftCardDetails } from '../components/styled-components';
import { arrowleft } from '../assests/index'

function NftDetails(){
    let navigate = useNavigate();
    const [nftData, setNftData] = useState({});
    const address = useAddress();
    useEffect(()=> {
        const index = new URLSearchParams(window.location.search).get('index');
        setNftData(nftList[index]);
    },[])

    return(
        <div style={{display: "flex", flexDirection: "column", padding: "20px", gap: "4px"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <h1 className='gradient-text-0'> NFT Details </h1>
                <div 
                    style={{borderRadius: "8px", padding: "6px 20px", color: "white", fontFamily: "sans-serif", gap: "4px"}}
                    onClick={()=> navigate("/NFTStore")} className='gradient-button'> <img src={arrowleft} style={{width: "20px", height: "20px", marginBottom: "-4px"}} alt='arrow'/> NFT Store </div>
            </div>
            <NftCardDetails>
                <img className='nftImage' src={nftData?.img} alt="img"/>
                <div style={{ dispaly: "flex", backgroundColor: "#E5E8EB", width : "70%", height: "70%", marginRight: "44px", borderRadius: "8px", flexDirection: "column", margin: "5px", justifyContent: "center", gap: "2px", padding: "20px"}}>
                    <h2 className='gradient-text-3'> Name : {nftData?.name} </h2>
                    <h2 className='gradient-text-3'> Description : {nftData?.desc} </h2>
                    <h2 className='gradient-text-3'> Qty : {nftData?.qty} </h2>
                    <h2 className='gradient-text-3'> Status : {nftData?.status} </h2>
                    <h2 className='gradient-text-3'> Type : {nftData?.type} </h2>
                    <h2 className='gradient-text-3'> Price : {nftData?.price} </h2>
                    <h2 className='gradient-text-2'> Address : {address} </h2>
                </div>
            </NftCardDetails>
        </div>
    ) 
}
export default NftDetails;