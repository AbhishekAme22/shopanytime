import { render } from '@testing-library/react';
import React from 'react'; 
import "../styles/Footer.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer(){
    render()
    return(
        <>
        <div className="footer"> 
            <h2>THE FOOD APP</h2>
            <div className="icons"> <LinkedInIcon fontSize="large"/> <InstagramIcon fontSize="large"/> <FacebookIcon fontSize="large"/></div>
        </div>
        </>
    )
}
export default Footer;