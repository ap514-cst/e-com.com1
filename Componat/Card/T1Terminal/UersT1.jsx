import React from 'react'
import './UersT1.css'
const UersT1 = ({Product,T1Handlar}) => {
   const{id,title,price,image,rating,rate,count}=Product;
   
   const Handlar=(id)=>{
      T1Handlar(id)
   }
  return (
    <div className='main-continer'>
        <div className='Product-Continer'>
          <div>
            <p>{id}</p>
          </div>
            <div>
            <img style={{width:'200px',height:'200px'}} src={image} alt="img" />
            </div>
            <div>
              <h4>{title}</h4>
            </div>
            <div>
              <h5>Price:{price}$</h5>
            </div>
            <div>
              <h4>rating:{rating.rate}</h4>
            </div>
            <div>
              <h4>count:{rating.count}</h4>
            </div>
            <div className='btn'>
              <button onClick={()=>Handlar(id)}>Buy Now</button>
            </div>
        </div>  
    </div>
  )
}

export default UersT1
