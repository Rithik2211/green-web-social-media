import React from 'react';
import { sample, women } from '../assests/index';

function Home(){
    return(
    <div>
        <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <img src={sample} style={{width: "70%", height: "100%", borderRadius: "8px", margin: "20px"}} alt='image'/>
            <img src={women} style={{width: "70%", height: "100%", borderRadius: "8px", margin: "20px"}} alt='avatar'/>
            <div>
                <h2 style={{fontFamily: "sans-serif"}}>Meet Some of the Users</h2>
            </div>
        </div>
    </div>
    ) 
}
export default Home;