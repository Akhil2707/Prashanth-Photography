import React, { useState } from 'react'
import {SidebarData} from "./SidebarData";
import MenuIcon from '@mui/icons-material/Menu';
import profile from "../assests/profile.png";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({children}) => {

    const[expand,setExpand]=useState(false);
const toggle=()=>{
    setExpand(!expand);
}
  return (
    <>
    <div className='container'>
        <div  style={{width:expand ? "190px" :  "50px"}} className='sidebar'>
            <div className='top-section' >
                <div className='card'></div>
                <h1 className='logo' style={{display:expand ? "block" :  "none"}}>Facebook</h1>
<div className='logo-icon' >{expand ? <CloseIcon onClick={toggle}/> :<MenuIcon  onClick={toggle}/>}</div>             
            </div>
        {
       SidebarData.map((item,index)=>{    
        return(
         <NavLink to={item.path} key={index} className='nav-text'   activeclassName="active">
                <div className='icon'>{item.icon}</div>
                <div className='text' style={{display:expand ? "block" :  "none"}}>{item.title}</div>
            </NavLink>
        
        )
       })
        }
        </div>
        <main>{children}</main>
        </div>
        </>
  )
}

export default Sidebar