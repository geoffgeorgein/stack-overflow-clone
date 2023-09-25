import React, { useState } from 'react'

const Auth = () => {

    const[isSignUp,setisSignup]=useState(false);
  return (
    <div className='auth-section'>

        <div className='auth-container'>
            
            <form>
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type='email'></input>
                   
                </label>
                <label>
                    <h4>Password</h4>
                    <input type='password'></input>
                </label>

                <button className='auth-btn'>{isSignUp?"Login":"SignUp"}</button>
                
            </form>
        </div>

    </div>
  )
}

export default Auth