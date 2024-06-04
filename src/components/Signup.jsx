import React, { useState } from 'react'


const Signup = () => {
    const [showPass,setShowPass]=useState(false);
    const [passType,setPassType]=useState('');
    
    const handleShowPass = () => {
        // const newShowPass = !showPass;
        setShowPass(!showPass);
        setPassType(showPass ? 'text' : 'password');
        // console.log(newShowPass ? 'text' : 'password');
    };


    return (
        <div className='grid md:grid-cols-2 md:h-screen md:overflow-hidden  '>
            <img src="/images/signup.jpg" alt="" className='md:h-full h-4/5 object-cover w-full h ' />
            <div className='flex flex-col md:p-16 p-8'>
                <h1 className='text-4xl font-bold'>New User</h1>
                <p className='text-gray-600'>Create Your account to start your shopping</p>
                <form action="" className='mt-8 space-y-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='mb-2 font-semibold'>Fullname</label>
                        <input type="text"
                            required
                            name='Fullname'
                            placeholder='Enter your name'
                            className='p-3 border border-gray-300 rounded'

                        />
                    </div>
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

                    <button className='border bg-blue-600 rounded p-2 text-white font-semibold  px-5 hover:bg-rose-600'>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup