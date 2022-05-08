import React from 'react';
import fooda from '../assests/fooda.jpeg'
import "../styles/contactus.css"
function ContactUs(){

    return(
        <>
        <div className="contactus">
            <div className="leftside" style={{ backgroundImage: `url(${fooda})` }}
 ></div>    
            <div className="rightside">
                <h1> Contact Us</h1>
            <form>
                <lable>Name</lable>
                <input type="text" />
                <lable>Email</lable>
                <input type="email" />
                <lable>Phone Number</lable>
                <input type="text" />
                <lable>Message</lable>
                <input type="textarea" />
                <div className="ex">
                <input type="submit" />
                </div>

                
                
            </form>    
            </div>    

        </div>
        </>
    )
} 
export default ContactUs