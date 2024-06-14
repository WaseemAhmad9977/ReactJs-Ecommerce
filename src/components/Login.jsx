import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Login = () => {
    const [showPass,setShowPass]=useState(false);
    const [passType,setPassType]=useState('');
    
    const handleShowPass = () => {
        // const newShowPass = !showPass;
        setShowPass(!showPass);
        setPassType(showPass ? 'text' : 'password');
        // console.log(newShowPass ? 'text' : 'password');
    };

    return (
        <div className='grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__animated animate__zoomIn '>
            <img src="/images/signup.jpg" alt="" className='md:h-full h-4/5 object-cover w-full h ' />
            <div className='flex flex-col md:p-16 p-8'>
                <h1 className='text-4xl font-bold'>Sign in</h1>
                <p className='text-gray-600'>Enter profile details to login</p>
                <form action="" className='mt-8 space-y-6'>
                    
                    <div className='flex flex-col'>
                        <label htmlFor="" className='mb-2 font-semibold'>Email</label>
                        <input type="email"
                            name='email'
                            placeholder='Enter your Email'
                            className='p-3 border border-gray-300 rounded'

                        />
                    </div>

                    <div className='flex flex-col relative'>
                        <label htmlFor="" className='mb-2 font-semibold'>Password</label>
                        <input 
                        type={passType}

                            name='email'
                            placeholder='*****'
                            className='p-3 border border-gray-300 rounded'
                        />

                        <button className='absolute top-10 rounded right-4 w-8 h-8 hover:bg-gray-600' onClick={()=>handleShowPass()} >
                         {
                              showPass?<i class="ri-eye-off-line"></i>: <i class="ri-eye-line"></i>
                         }
                        </button>
                    </div>

                    <button className='border bg-blue-600 rounded p-2 text-white font-semibold  px-5 hover:bg-rose-600'>Login</button>
                </form>

                <div className='mt-2'>
                  Don't have an account ? <NavLink to='/signup' className='text-blue-600 font-semibold'>Register now.</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login