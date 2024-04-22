import { post } from '../assests/index';
import React from 'react';
import '../styles/Home.css';

function Post(){
    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", width: "100%", height: "80vh", gap: "44px"}}>
            <h1 className='gradient-text-0'>
                Share You Portraits Here!!
            </h1>
            <img src={post} alt='message' style={{}}/>
        </div>
      ); 
}
export default Post;