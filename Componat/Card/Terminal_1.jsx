import React, { useEffect, useState } from 'react'
import './Terminal_1.css'
import UersT1 from './T1Terminal/UersT1';


const Terminal_1 = () => {
 
  const[Product,setProduct]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    
    .then((res)=>{
      if(!res.ok){
        throw new Error("Data is not found")
      }
      return res.json()
    })
    .then(data=>{
      setProduct(data)
      setLoading(false)
      setError(false)
    })
    .catch((error)=>{
      setError(error.massage)
      setError(true)
      setLoading(false)
    })
    
  },[3000])

  
  return (
    <div>
      <div>
      <div className='Banner-card'>
        <div className='discount-card'>
          <h1>40% diccount <h2>Our Shop</h2></h1>
          <button>shop now</button>
        </div>
      </div>
          <div className='Our-Products'>
            <h2>OUR PRODUCT'S</h2>
            <hr />
          </div>
          <div className='massage-page' style={{textAlign:'center'}}>
              {loading && <h2>Data is loading...</h2>}
              {error && <h2>Data not found...404..Error</h2>}
          </div>
          <div className='main-user-continer'>
            <div className='User-Product-div'>
            {
                  Array.isArray(Product) && Product?.map((Product)=><UersT1
                  key={Product.id}
                  Product={Product}
                  ></UersT1>)
            }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Terminal_1;
