import React, { useState } from 'react';
import "./component.css";
import { useNavigate } from 'react-router-dom';
import { Nav, NavContainer, NavBody, NavText, NavButton, NavImg, NavHam, MobileList, MobileLink } from './styled-components';
import { search, notify, profile, green, hamburger } from '../assests/index';

function NavBar(){
    let navigate = useNavigate();
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
                    <img src={green} style={{height: "50px", width: "50px"}} alt='green'/>
                    <div style={{marginTop: "14px", fontWeight: "600", fontFamily: "sans-serif", fontSize: "20px"}}>Green Web</div>
                </div>
                <div>
                    <NavHam src={hamburger} alt='hamburger' onClick={() => handleHamClick()}/>
                </div>
                <NavBody>
                    <NavText onClick={handleNavClick("/")} >Home</NavText>
                    <NavText onClick={handleNavClick("/Explore")}>Explore</NavText>
                    <NavText onClick={handleNavClick("/Notification")}>NFT Store</NavText>
                    <NavText onClick={handleNavClick("/Messages")}>Messages</NavText>
                    <div style={{borderRadius: "8px", backgroundColor: "#1AE570", padding: "6px 20px", color: "#0D1C12", fontFamily: "sans-serif"}}>New Post</div>
                    <NavButton ><NavImg src={search} alt='search'/></NavButton>
                    <NavButton ><NavImg src={notify} alt='nofication'/></NavButton>
                    <NavButton ><NavImg src={profile} alt='profile'/></NavButton>
                </NavBody>
                {
                    open && 
                    <MobileList isOpen={open}>
                        <MobileLink onClick={handleHamNav("/")} >Home</MobileLink>
                        <MobileLink onClick={handleHamNav("/Explore")}>Explore</MobileLink>
                        <MobileLink onClick={handleHamNav("/Notification")}>NFT Store</MobileLink>
                        <MobileLink onClick={handleHamNav("/Messages")}>Messages</MobileLink>
                        <MobileLink onClick={handleHamNav("/")}>New Post</MobileLink>
                        <MobileLink onClick={handleHamNav("/")}>Announcements</MobileLink>
                        <MobileLink onClick={handleHamNav("/")}>Profile</MobileLink>
                    </MobileList>
                }
            </NavContainer>
        </Nav>
    )
}  
export default NavBar;