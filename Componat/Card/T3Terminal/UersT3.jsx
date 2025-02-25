import React from 'react'
import './UersT3.css'
const UersT3 = ({Datas}) => {
    const{id,title,images,price}=Datas
  return (
    <div>
        <div className='main-T3-div'>
            <div>
                <p>{id}</p>
            </div>
            <div>
                <img src={images} style={{width:'300px'}} alt="" />
            </div>
            <div className='price-div'>
                <h4>title:{title}</h4>
                <h3>price:{price}$</h3>
            </div>
        </div>
    </div>
  )
}

export default UersT3
