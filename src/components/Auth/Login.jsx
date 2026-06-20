import React from 'react'
import { useState } from 'react'

const Login=() => {

    const [email, setEmail]=useState('')
     const [password, setPassword]=useState('')



    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("email is",email);
        console.log("password is",password);

        setEmail("")
        setPassword("")
        
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e)

            }} 
            className='flex flex-col items justify-center'>
                
                <input onChange={(e)=>{
                   setEmail(e.target.value);
                    
                }}
                required
                 className= 'outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-4 px-5 placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)

                }}
                required
                 className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-4 px-5 placeholder: text-white' type="password" placeholder='Enter your password'/>
                <button className='text-white border-none outline-none  bg-emerald-600 text-xl  py-3 px-5 rounded-full  mt-3 placeholder: text-white' >Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login
