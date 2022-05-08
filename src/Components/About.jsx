import React from 'react'
import photo from '../assests/photo.jpeg'
import "../styles/about.css"
function About(){
    return(
        <>
        <div className="above" style={{ backgroundImage: `url(${photo})` }} ></div>
        <div className="below">
            <h1>ABOUT</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor 
                sit lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor 
                sitlorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor 
                sitlorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor 
                sitlorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor 
                sitlorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor 
                sitvvvlorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor 
                sitlorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitlorem 
                ipsum dolor sit amet, consectetur adip lorem ipsum dolor sitlorem ipsum dolor 
                sit amet, consectetur adip lorem ipsum dolor sitlorem ipsum dolor sit amet, 
                consectetur adip lorem ipsum dolor sitlorem ipsum dolor sit amet, consectetur 
                adip lorem ipsum dolor sit am</p>
        </div>

        </>
    )
}
export default About