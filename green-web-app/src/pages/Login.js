import { logo1 } from '../assests/index';
import React from 'react';
import '../styles/Home.css';
import { ConnectEmbed } from '@thirdweb-dev/react';

function Login(){
    return (
        <div className='loginMain'>
            <div className='imgContainer'>
                <img src={logo1} alt='EcoSync Logo' draggable="false" style={{width: "100%", height: "100%"}}/>
            </div>
            <div className='loginBox'>
                <h1 style={{color: '#fffff'}}>
                    Login to Join the Eco Sync!!
                </h1>
                <ConnectEmbed theme="dark" />
            </div>
        </div>
      ); 
}
export default Login;