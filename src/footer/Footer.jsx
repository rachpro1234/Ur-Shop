import React from 'react'
import { Link } from 'react-router-dom'
// FOOTER IMAGES
import AppStore from '../img/pay/app.jpg'
import PlayStore from '../img/pay/play.jpg'
import Pay from '../img/pay/pay.png'
import { FaFacebookF } from "react-icons/fa"; // facebook icon
import { FaInstagram } from "react-icons/fa"; // instagram icon
import { FaLinkedinIn } from "react-icons/fa"; // linkedin icon
import { FaXTwitter } from "react-icons/fa6"; // twitter icon
import "./footer.css"
import logo from '../img/others/shop-l.png'


const Footer = () => {

   // get the current year to be used in the footer
const currentYear = new Date().getFullYear();

const currentMonth = new Date().toLocaleString([], 
    {month: "long"});



  return (
    <footer className="footer">
            <div className="colums">
                <div className="col">
                    <img src={logo} alt="logo"  className='logo'/>
                    {/* <h1 id='logo' className="logo">Ur-Shop</h1> */}
                    <h4>contact</h4>
                    <p><span><strong>address: </strong></span>furstenwalde, germany</p>
                    <p><span><strong>phone: </strong></span>+49832728372</p>
                    <p><span><strong>hours: </strong></span>10:00 - 23:00 | mon - sat</p>
                </div>
                <div className="col">
                    <h4>about</h4>
                    <Link className='item' to="/about" >aboot us</Link>
                    <Link className='item' to="/blog" >delivery information</Link>
                    <Link className='item' to="/blog" >privacy policy</Link>
                    <Link className='item' to="/blog" >terms &amp; condition</Link>
                    <Link className='item' to="/contact" >contact us</Link>
                </div>

                <div className="col">
                    <h4>my account</h4>
                    <Link to="/login" className='item'>log-in</Link>
                    <Link to="/cart" className='item'>view cart</Link>
                    <Link to="/shop" className='item'>my wishlist</Link>
                    <Link to="/shop"  className='item'>track my order</Link>
                    <Link to="/contact" className='item'>help</Link>
                </div>

            <div className="follow">
                    <h4>follow us</h4>
                    <div className="icon">
                        <a href="https://www.facebook.com" className='social-icon' rel="noreferrer" target='_blank'><FaFacebookF /></a>
                        <a href="https://www.instagram.com" className='social-icon' rel="noreferrer" target='_blank'><FaInstagram /></a>
                        <a href="https://www.linkedin.com" className='social-icon' rel="noreferrer" target='_blank'><FaLinkedinIn /></a>
                        <a href="https://www.twitter.com" className='social-icon' rel="noreferrer" target='_blank'><FaXTwitter /></a>
                    </div>
            </div>
                <div className="col install">
                    <h4>install app</h4>
                    <p>from app store or google play</p>
                    <div className="row">
                        <img src={AppStore} alt="app" />
                        <img src={PlayStore} alt="play" />
                    </div>
                    <p>secured payment gathways</p>
                    <img src={Pay} alt="pay" />
                </div>
            </div>


            <div className="copyright">
                     <p>&copy; {currentYear} {currentMonth} | <span>ur-shop.</span> all rights reserved.</p>
            </div>
        </footer>
  )
}

export default Footer





