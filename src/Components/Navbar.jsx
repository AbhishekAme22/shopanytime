import React from 'react';  
import logo from '../assests/logo.png'
import {Link} from 'react-router-dom'
import "../styles/Navbar.css"
function Navbar(){

    return(

        <>
        <div className="navbar">
            <div className="leftside">
               <img src={logo}/>
               
               <div className="title">Food App</div>
            </div>
            <div className="rightside">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;