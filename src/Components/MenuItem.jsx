import React from 'react';
import "../styles/menu.css";
function MenuItem({title, price,img}){
    return(
<div className="MenuItem">
<div className="img" style={{ backgroundImage: `url(${img})` }}> </div>
    <h1 >{title}</h1> 
    <h3>Rs {price}</h3>
    
</div>)
}  
export default MenuItem;