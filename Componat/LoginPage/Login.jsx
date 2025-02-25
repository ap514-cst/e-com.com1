import React, { useState } from 'react';
import './Login.css';
const login = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')

  const submitContiner=(e)=>{
    console.log(name,email);
    
  }
  return (
    <div>
        <div className='main-login'>
          <div className='login-div'>
            <h3>Login</h3>
            <form action="" onSubmit={submitContiner}>
              <div>
                  <label htmlFor="name">Email:</label>
                  <input 
                    placeholder='users-email'
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e)=>setName(e.target.value)}
                    />
              </div>
              <div>
                  <label htmlFor="name">Password:</label>
                  <input 
                  placeholder='users-password'
                  type="password"
                  name="name"
                  id="name"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  />
              </div>
              <button type='submit'>submit</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default login;
