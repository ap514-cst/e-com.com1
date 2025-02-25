import React, { useEffect, useState } from 'react'
import './Terminal_2.css'
import UersT2 from './T2Terminal/UersT2'


const Terminal_2 = () => {
  const [Data, setData]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=')
    .then((res)=>{
      if(!res.ok){
        throw new Error("Data is not found")
      }
      return res.json()
    })
    .then(data=>{
      setData(data);
      setLoading(false)
      setError(false)
    })
    .catch((error)=>{
      setError(error.massage)
      setLoading(false)
      setError(true)

    })
  })
  return (
    <div>
      <div>
      <div className='T2-Diccount'>
        <div className='discount-card'>
          <h1>10% diccount <h2>Our Shop</h2></h1>
          <button>shop now</button>
        </div>
      </div>
        <div>
          <div className='our-div'>
            <h2>OUR PRODUCT'S</h2>
            <hr />
            <div>
              {loading && <h2>Data is Loading....</h2>}
              {error && <h2>Data is not found...404..Error</h2>}
            </div>
          </div>
          <div className='main-T2-card'>
            <div className='T2-Products'>
            {
              Data.map((Datas)=><UersT2
              key={Datas.id}
              Datas={Datas}
              ></UersT2>)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terminal_2;
