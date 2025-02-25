import React, { useState } from 'react';
import './Navbar.css';
import { GiShoppingBag } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import {NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from '../Card-count/Card';

const Navbar = () => {
    const [menu,setMenu]=useState('shop')
    

    
  return (
    <div className='main-card'>
        <div className='continar-card'>
            <div className='logo-card'>
               <span style={{color:'red',fontSize:'24px'}}> <GiShoppingBag /></span>
                <h2>Shopping</h2>
            </div>
            <ul className='navbar-card'>
                <Link to={'/'} onClick={()=>{setMenu('shop')}}> Shop{menu==='shop'? <hr/>:<></>}</Link>
                <Link to={'terminal_1'} onClick={()=>{setMenu('woman')}}>Terminal:1{menu==='woman'?<hr/>:<></>}</Link>
                <Link to={'terminal_2'} onClick={()=>{setMenu('girl')}}>Terminal:2{menu==='girl'?<hr/>:<></>}</Link>
                <Link to={'terminal_3'} onClick={()=>{setMenu('boy')}}>Terminal:3{menu==='boy'?<hr/>:<></>}</Link>
            </ul>
            <div className='login-card'>
                <Link to={'login'}><button>Login</button></Link>
               
                <NavLink to={'/card'} ><span style={{cursor:'pointer'}}><FaCartShopping /></span></NavLink>  
                <div className="card-count">10</div>
            </div>
        </div>
        <div>
            <div className='img-folder'>
               
            </div>
        </div>
    </div>
  )
}

export default Navbar
