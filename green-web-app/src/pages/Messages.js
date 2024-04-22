import { message } from '../assests/index';
import React from 'react';
import '../styles/Home.css';

function Messages(){
    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", width: "100%", height: "80vh", gap: "44px"}}>
            <h1 className='gradient-text-0'>
            Join the Conversation Here!!
            </h1>
            <img src={message} alt='message' style={{}}/>
        </div>
      ); 
}
export default Messages;