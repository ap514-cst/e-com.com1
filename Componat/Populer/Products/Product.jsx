import React, { useState } from 'react'
import './Product.css'
import Card from '../../../Card-count/Card';
import { Link, NavLink } from 'react-router-dom';
import { FaDatabase } from 'react-icons/fa6';


const Product = ({data,Handlercard}) => {
    
    const {id,title,price,image,rating,rate,count}=data;
    
   
    const HanderToCard=(data)=>{
      Handlercard(data)
    
    }
   
    
  return (
    <div>
      <div>
        <div className='main-Products'>
                <div>
                    <h3>{id.common}</h3>
                </div>
            <div>
                <img style={{width:'300px',height:'300px'}} src={image} alt="img" />
            </div>
            <div className='title-card'>
                
                <div>
                    <h4>{title}</h4>
                </div>
                <div>
                    <h3>Price:{price}$</h3>
                </div>
                <div>
                    <h5>Rating:{rating.rate}</h5>
                </div>
                <div>
                    <h3>Count:{rating.count}</h3>
                </div>
                <div className='buy-btn'>
                  <Link to={'/card'}><button onClick={()=>HanderToCard(data)}>Buy</button></Link>
                    
                </div>
            </div>
        </div>
      </div>
      <div>
        
          
          
        
      </div>

    </div>
  )
}

export default Product
