/* eslint-disable no-unused-vars */
import React from 'react'
// ICONS
import { FaShoppingBag } from "react-icons/fa"; // shopping-bag icon
import { CiStar } from "react-icons/ci" // rating stars icon
import { FaFacebookF } from "react-icons/fa"; // facebook icon
import { FaInstagram } from "react-icons/fa"; // instagram icon
import { FaLinkedinIn } from "react-icons/fa"; // linkedin icon
import { FaXTwitter } from "react-icons/fa6"; // twitter icon
// FEATURES IMAGES
import  Shipping  from '../img/features/f1.png'
import Order from '../img/features/f2.png'
import Money from '../img/features/f3.png'
import Promotion from '../img/features/f4.png'
import Sell from '../img/features/f5.png'
import Support from '../img/features/f6.png'
// PRODUCTS IMAGES
import Pro1 from '../img/products/f1.jpg'
import Pro2 from '../img/products/f2.jpg'
import Pro3 from '../img/products/f3.jpg'
import Pro4 from '../img/products/f4.jpg'
import Pro5 from '../img/products/f5.jpg'
import Pro6 from '../img/products/f6.jpg'
import Pro7 from '../img/products/f7.jpg'
import Pro8 from '../img/products/f8.jpg'
// FOOTER IMAGES
import AppStore from '../img/pay/app.jpg'
import PlayStore from '../img/pay/play.jpg'
import Pay from '../img/pay/pay.png'



function Home() {

// get the current year to be used in the footer
const currentYear = new Date().getFullYear();

const currentMonth = new Date().toLocaleString([], 
    {month: "long"});





    return (
        <main>             
        <section id="home">
            <div className="home-content">
                <div className="home-elements">
                    <h4 className='select-none'>trade-in-offer</h4>
                    <h2 className="select-none">super values <span>deals</span></h2>
                    <h1 className="select-none">on all products</h1>
                    <p className="select-none">save more with coupons & up to <span>70% off!</span></p>
                    <button>shop now</button>
                </div>
            </div>
        </section>

        <section id="features" className="features">
                    <div className="box">
                        <img src={Shipping} alt="" />
                        <h6>free shipping</h6>
                    </div>
                    <div className="box">
                        <img src={Order} alt="" />
                        <h6>online order</h6>
                    </div>
                    <div className="box">
                        <img src={Money} alt="" />
                        <h6>save money</h6>
                    </div>
                    <div className="box">
                        <img src={Promotion} alt="" />
                        <h6>promotion</h6>
                    </div>
                    <div className="box">
                        <img src={Sell} alt="" />
                        <h6>happy sell</h6>
                    </div>
                    <div className="box">
                        <img src={Support} alt="" />
                        <h6>24/7 support</h6>
                    </div>
        </section>

        <section id="products" className="products">
            <h2>featured <span>products</span></h2>
            <p>sommer collection new modern designs</p>
            <div className="products-card">
                <div className="card">
                    <img src={Pro1} alt="product-1" />
                    <div className="card-info">
                        <span>ur-shop</span>
                        <h4>astronaut t-shirt</h4>
                        <div className="star">
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                        </div>
                        <span className="price">130$</span>
                    </div>
                    <a href="./Cart.jsx" className="cart">
                            <FaShoppingBag/>
                    </a>
                </div>
                <div className="card">
                    <img src={Pro2} alt="" />
                    <div className="card-info">
                        <span>ur-shop</span>
                        <h4>astronaut t-shirt</h4>
                        <div className="star">
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                        </div>
                        <span className="price">130$</span>
                    </div>
                    <a href="./Cart.jsx" className="cart">
                            <FaShoppingBag/>
                    </a>
                </div>
                <div className="card">
                    <img src={Pro3} alt="" />
                    <div className="card-info">
                        <span>ur-shop</span>
                        <h4>astronaut t-shirt</h4>
                        <div className="star">
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                        </div>
                        <span className="price">130$</span>
                    </div>
                    <a href="./Cart.jsx" className="cart">
                            <FaShoppingBag/>
                    </a>
                </div>
                <div className="card">
                    <img src={Pro4} alt="" />
                    <div className="card-info">
                        <span>ur-shop</span>
                        <h4>astronaut t-shirt</h4>
                        <div className="star">
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                        </div>
                        <span className="price">130$</span>
                    </div>
                    <a href="./Cart.jsx" className="cart">
                            <FaShoppingBag/>
                    </a>
                </div>
                <div className="card">
                    <img src={Pro5} alt="" />
                    <div className="card-info">
                        <span>ur-shop</span>
                        <h4>astronaut t-shirt</h4>
                        <div className="star">
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                        </div>
                        <span className="price">130$</span>
                    </div>
                    <a href="./Cart.jsx" className="cart">
                            <FaShoppingBag/>
                    </a>
                </div>
                <div className="card">
                    <img src={Pro6} alt="" />
                    <div className="card-info">
                        <span>ur-shop</span>
                        <h4>astronaut t-shirt</h4>
                        <div className="star">
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                        </div>
                        <span className="price">130$</span>
                    </div>
                    <a href="./Cart.jsx" className="cart">
                            <FaShoppingBag/>
                    </a>
                </div>
                <div className="card">
                    <img src={Pro7} alt="" />
                    <div className="card-info">
                        <span>ur-shop</span>
                        <h4>astronaut t-shirt</h4>
                        <div className="star">
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                        </div>
                        <span className="price">130$</span>
                    </div>
                    <a href="./Cart.jsx" className="cart">
                            <FaShoppingBag/>
                    </a>
                </div>
                <div className="card">
                    <img src={Pro8} alt="" />
                    <div className="card-info">
                        <span>ur-shop</span>
                        <h4>astronaut t-shirt</h4>
                        <div className="star">
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                            <CiStar/>
                        </div>
                        <span className="price">130$</span>
                    </div>
                    <a href="./Cart.jsx" className="cart">
                            <FaShoppingBag/>
                    </a>
                </div>
            </div>
        </section>

        <section id="banner" className="banner">
            <h4>repair services</h4>
            <h2>up to <span>70% off</span> all t-shirt & accessories</h2>
            <button className='normal'>explore more</button>
        </section>

        <section id="second-banner" className="second-banner">
            <div className="banner-box">
                <h4>crazy deals</h4>
                <h2><span>buy</span> 1 <span>get</span> 1 free</h2>
                <span>the best classic dress is on sale at ur-shop</span>
                <button className='normal' >learn more</button>
            </div>
            <div className="banner-box">
                <h4>spring / summer</h4>
                <h2><span>up</span>-comming season</h2>
                <span>the best classic dress is on sale at ur-shop</span>
                <button className='normal' >collection</button>
            </div>
        </section>

        <section id="third-banner" className="third-banner">
            <div className="th-banner-box">
                <h2>saison sale</h2>
                <h4>winter collection -50% off</h4>
            </div>
            <div className="th-banner-box">
                <h2>new footwear collection</h2>
                <h4>spring / summer 2024</h4>
            </div>
            <div className="th-banner-box">
                <h2>t-shirts</h2>
                <h4>new trendy prints</h4>
            </div>
        </section>

        <section id="newsletter" className="newsletter">
            <div className="newsletter-info">
                <h3>sign up for newsletter</h3>
                <p>get e-mail updates about our latest shop and <span>special offers.</span></p>
            </div>
            <form action="" className="form">
                <input type="text" placeholder='your email address' />
                <button className='newsletter-btn' type='submit'>sign up</button>
            </form>
        </section>

        <footer className="footer">
            <div className="colums">
                <div className="col">
                    <h1 id='logo' className="logo">Ur-Shop</h1>
                    <h4>contact</h4>
                    <p><span><strong>address: </strong></span>furstenwalde, germany</p>
                    <p><span><strong>phone: </strong></span>+49832728372</p>
                    <p><span><strong>hours: </strong></span>10:00 - 10:00 | mon - sat</p>
                </div>
                <div className="col">
                    <h4>about</h4>
                    <a href="../subpages/About.jsx">about us</a>
                    <a href="../subpages/Blog.jsx">delivery information</a>
                    <a href="../subpages/Blog.jsx">privacy policy</a>
                    <a href="../subpages/Blog.jsx">terms &amp; condition</a>
                    <a href="../subpages/Blog.jsx">contact us</a>
                </div>

                <div className="col">
                    <h4>my account</h4>
                    <a href="#newslettter">sign in</a>
                    <a href="../subpages/Cart.jsx">view cart</a>
                    <a href="../subpages/Shop.jsx">my wishlist</a>
                    <a href="../subpages/Product.jsx">track my order</a>
                    <a href="../subpages/Contact.jsx">help</a>
                </div>

            <div className="follow">
                    <h4>follow us</h4>
                    <div className="icon">
                        <a href="www.facebook.com"><FaFacebookF /></a>
                        <a href="www.instagram.com"><FaInstagram /></a>
                        <a href="www.linkedin.com"><FaLinkedinIn /></a>
                        <a href="www.twitter.com"><FaXTwitter /></a>
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
        </main>
    )
}

export default Home;