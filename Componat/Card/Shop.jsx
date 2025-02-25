import React from 'react'
import './Shop.css'
import { FiChevronsRight } from "react-icons/fi";
import { FcHome } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div>
      <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
            <span><FcHome/></span>

          </div>
          <p>collections</p>       
          <p>for everyone</p>
        </div>
        <div className='btn-div'>
          <Link to={'populer'}><button>Latest collection <span> <FiChevronsRight/></span> </button></Link>
        </div>
      </div>
      <div className='hero-right'>
        <img src="https://img.freepik.com/premium-photo/beauty-woman-with-shopping-bags_78203-574.jpg?ga=GA1.1.819132749.1677990575&semt=ais_hybrid" alt="" />
      </div>
    </div>
    <div>
      <div className='newsletter'>
          <h1>Get Exclusive ofeers on your Email</h1>
          <p>Subscribe to our newletter and stay updata</p>
          <div>
           <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
          </div>
      </div>
      <div>
        
      </div>
    </div>
    </div>
  )
}

export default Shop

