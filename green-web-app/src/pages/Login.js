import { login3 } from '../assests/index';
import React from 'react';
import '../styles/Home.css';
import { ConnectEmbed } from '@thirdweb-dev/react';

function Login(){
    return (
        <div className='loginMain'>
            <div className='imgContainer'>
                <img src={login3} alt='message' draggable="false" style={{width: "100%", height: "100%"}}/>
            </div>
            <div className='loginBox'>
                <h1 className='gradient-text-2'>
                    Login to Join the Green Web!!
                </h1>
                <ConnectEmbed 
                    theme="dark" 
                    connectModal={{
                        size: "wide",
                        showThirdwebBranding: false,
                    }}
                />
            </div>
        </div>
      ); 
}
export default Login;