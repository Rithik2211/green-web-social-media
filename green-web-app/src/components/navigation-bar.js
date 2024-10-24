import React, { useState } from 'react';
import "./component.css";
import { useNavigate } from 'react-router-dom';
import { Nav, NavContainer, NavBody, NavText, NavButton, NavImg, NavHam, MobileList, MobileLink } from './styled-components';
import { profile, hamburger, logo1 } from '../assests/index';
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";

function NavBar(){
    let navigate = useNavigate();
    const address = useAddress();
    const disconnect = useDisconnect();
    const [open, setOpen] = useState(false);

    const handleNavClick = (link) => () => {
        navigate(link);
    }
    const handleHamClick = () => {
        setOpen(!open);
    }
    const handleHamNav = (link) => () => {
        setOpen(!open);
        navigate(link);
    }
    return(
        <Nav>
            <NavContainer>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={logo1} style={{height: "150px", width: "150px"}} alt='EcoSync'/>
                </div>
                <div>
                    <NavHam src={hamburger} alt='hamburger' onClick={() => handleHamClick()}/>
                </div>
                <NavBody>
                    <NavText onClick={handleNavClick("/")} >Home</NavText>
                    <NavText onClick={handleNavClick("/NFTStore")}>NFT Store</NavText>
                    <NavText onClick={handleNavClick("/Messages")}>Messages</NavText>
                    <div 
                    style={{borderRadius: "8px", backgroundColor: "#1AE570", padding: "6px 20px", color: "#0D1C12", fontFamily: "sans-serif"}}
                    onClick={handleNavClick("/Post")}
                    >New Post</div>
                    <ConnectWallet theme={"light"} className="custom-connect-wallet" style={{padding : "1px 5px", width: "20%", backgroundColor: "#E5E8EB", borderColor: "transparent", color: "black"}}/>
                    {
                        address &&  <NavButton><NavImg src={profile} alt='profile'/></NavButton>
                    }
                </NavBody>
                {
                    open && 
                    <MobileList isOpen={open}>
                        <MobileLink onClick={handleHamNav("/")} >Home</MobileLink>
                        <MobileLink onClick={handleHamNav("/NFTStore")}>NFT Store</MobileLink>
                        <MobileLink onClick={handleHamNav("/Messages")}>Messages</MobileLink>
                        <MobileLink onClick={handleHamNav("/Post")}>New Post</MobileLink>
                        {
                            address &&   <MobileLink >Profile</MobileLink>
                        }
                        {
                            address ? <MobileLink onClick={disconnect}>Disconnect</MobileLink>  :
                            <ConnectWallet 
                                theme={"light"} 
                                className="custom-connect-wallet" 
                                style={{padding : "1px 5px", width: "20%", backgroundColor: "#E5E8EB", borderColor: "transparent", color: "black"}} 
                                connectModal={{
                                    size: "wide",
                                    showThirdwebBranding: false,
                                }}
                            />
                        }
                    </MobileList>
                }
            </NavContainer>
        </Nav>
    )
}  
export default NavBar;