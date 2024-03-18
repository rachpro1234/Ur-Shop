import React from 'react'
import "./newsletter.css"


export const Newsletter = () => {
  return (
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
  )
}

export default Newsletter;