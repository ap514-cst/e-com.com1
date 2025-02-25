import React, { useEffect, useState } from 'react'
import './Terminal_3.css'
import UersT3 from './T3Terminal/UersT3'
const Terminal_3 =() => {
  const[Data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
    .then((res)=>{
      return res.json()
    })
    .then(data=>{
      setData(data)
    })
  })
  return (
    <div>
      <div>
      <div>
      <div className='T3-diccount'>
        <div className='discount-card'>
          <h1>30% diccount <h2>Our Shop</h2></h1>
          <button>shop now</button>
        </div>
      </div>
        <div className='T3-continer'>
          <div className='T3-products-div'>
            {
              Data.map((Datas)=><UersT3
              key={Datas.id}
              Datas={Datas}
              ></UersT3>)
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Terminal_3;
