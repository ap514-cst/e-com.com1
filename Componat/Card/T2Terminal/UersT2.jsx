import React from 'react'
import './UersT2.css'
const UersT2 = ({Datas}) => {
    const{id,title,price,images}=Datas
  return (
    <div>
        <div className='Products-cardT2'>
            <div>
                <p>{id}</p>
                <img src={images}style={{width:'300px',}} alt="" />
            </div>
            <div>
                <h4>{title}</h4>
            </div>
            <div>
                <h4>Price:{price}$</h4>
            </div>
            <div className='t2-btn'>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default UersT2
