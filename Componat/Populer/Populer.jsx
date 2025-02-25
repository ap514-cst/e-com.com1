import React, { useEffect, useState } from 'react';
import Product from './Products/Product';
import './Populer.css';
import Card from '../../Card-count/Card';


const Populer = () => {
    

    const[Products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(null)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>{
            if(!res.ok){
                throw new Error("Failed to fetch Data....")
                
            }
            return res.json()
           
        })
        .then((data)=>{
           
            setLoading(false);
            setError(null)
            setProducts(data); 
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false)
        })
        
    });
return (
   <div>
        <div style={{textAlign:'center'}}>
            {loading && <h2>Data is Loading....</h2>}
            {error && <h2>Data not found.....404:Error</h2>}
        </div>
        
        <div className='Products-div'>
        {
            Products.map((Data)=><Product
            key={Data.id}
            data={Data}
            ></Product>)
        }

        
        
        
        
    </div>
   </div>
  )
}

export default Populer
