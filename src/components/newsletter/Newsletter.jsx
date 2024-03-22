import React from 'react'
import "./newsletter.css"
import newsletterCover from "../../img/banner/b1.jpg"

const Newsletter = () => {
  return (
    <section className="newsletter">
            <img src={newsletterCover} alt="" />
            <div className="newsletter-content">
                <div className="newsletter-info">
                    <h3>sign up for newsletter</h3>
                    <p>get e-mail updates about our latest shop and <span>special offers.</span></p>
                </div>
                <form action="" className="form">
                    <input type="text" placeholder='your email address' />
                    <button className='newsletter-btn' type='submit'>sign up</button>
                </form>
            </div>
    </section>
  )
}

export default Newsletter;