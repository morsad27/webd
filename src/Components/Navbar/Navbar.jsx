import React, { useState } from 'react'
import './Navbar.css'
import color from '../../constants/color.ts'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

      const [menu,setMenu]= useState("shop")

    const applyColorsToCSS = () => {
        const root = document.documentElement;
        Object.entries(color).forEach(([key, value]) => {
          root.style.setProperty(`--${key}`, value);
        });
      };
      
      applyColorsToCSS();

  return (
    <div className='navbar'> 
        <div className="nav-logo">
            <Link to='/about'style={{ color:'#fdf8ef' }}><p>I-HUB COLLECTION</p></Link>
        </div> 
        <ul className="nav-menu">
            <li className="navshop" onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none', color: '#ae7d5c'}}to='/'>SHOP</Link> {menu==="shop"?<hr/>:<></>} </li>
            <li className="navmen" onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:'none', color: '#ae7d5c'}}to='/mens'>MEN</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li className="navwomen" onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:'none', color: '#ae7d5c'}}to='/womens'>WOMEN</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li className="navkid" onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:'none', color: '#ae7d5c'}}to='/kids'>KIDS</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>LOGIN</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
