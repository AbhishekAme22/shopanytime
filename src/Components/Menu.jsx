import React from 'react'
import {MenuList} from '../Data/MenuList'
import MenuItem from './MenuItem'
import "../styles/menu.css";

function Menu(){
return(
    <>
    <div className="menu">
    <div className="Title"> MENU</div>
    <div className="menu-item">
        {MenuList.map((data)=>{return(
            <MenuItem img={data.image} title={data.name} price={data.price}/>)
        })}
    </div>
    </div>
    </>
)
}
export default Menu