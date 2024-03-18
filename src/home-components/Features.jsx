import React from 'react'
// FEATURES IMAGES
import  Shipping  from '../img/features/f1.png'
import Order from '../img/features/f2.png'
import Money from '../img/features/f3.png'
import Promotion from '../img/features/f4.png'
import Sell from '../img/features/f5.png'
import Support from '../img/features/f6.png'

const Features = () => {
  return (
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
  )
}

export default Features;