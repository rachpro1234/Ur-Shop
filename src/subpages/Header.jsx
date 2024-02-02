/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
// Header icons
import { FiHome } from "react-icons/fi"; // home-section-icon
import { LuShoppingBag } from "react-icons/lu"; // shop-section-icon
import { SiBloglovin } from "react-icons/si"; // blog-section-icon
import { MdRoundaboutRight } from "react-icons/md"; // about-section-icon
import { IoMdContacts } from "react-icons/io"; // contact-section-icon
import { HiTranslate } from "react-icons/hi"; // translation-icon
import { FaShoppingBag, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


function Header() {

    
    
    
    
    

    return (
        <div className='header'>
            <h1 id='logo' className="logo">Ur-Shop</h1>
            <nav>
                <ul className='links'>
                    <li><a className='active' href="./subpages/Home.jsx"><FiHome /></a></li>
                    <li><a href="./subpages/Shop.jsx"><LuShoppingBag /></a></li>
                    <li><a href="./subpages/Blog.jsx"><SiBloglovin /></a></li>
                    <li><a href="./subpages/About.jsx"><MdRoundaboutRight /></a></li>
                    <li><a href="./subpages/Contact.jsx"><IoMdContacts /></a></li>
                    <li className='cart-bag'><a href="./subpages/Cart.jsx"><FaShoppingBag /></a></li>
                    <a href="#" id='close'><IoMdClose /></a>
                    <p><HiTranslate /></p>
                </ul>
            </nav>

             
            <div className="mobile">
                    <a href="#"><FaShoppingBag /></a>
                    <a href="" id='bar'><FaBars /></a>
            </div>
        </div> 
    )
}

export default Header