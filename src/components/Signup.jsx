import React, { useState } from 'react'
import { NavLink, json, useNavigate } from 'react-router-dom';
import firebaseAppConfig from '../util/firebase-config'; //way of config
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; //way of config

const auth = getAuth(firebaseAppConfig); // way of config
const Signup = () => {
    const navigate = useNavigate() //for redirect the use after the signup
    const [showPass, setShowPass] = useState(false);
    const [passType, setPassType] = useState('');
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(false)
    const [formValue, setFormValue] = useState({
        Fullname: '',
        email: '',
        password: ''
    })

    const handleShowPass = () => {
        // const newShowPass = !showPass;
        setShowPass(!showPass);
        setPassType(showPass ? 'text' : 'password');
        // console.log(newShowPass ? 'text' : 'password');
    };

    const signup = async (e) => {
        try {
            setLoader(true)
            e.preventDefault();
            // alert("successfull");
            // console.log(formValue)
            // const user = await createUserWithEmailAndPassword(auth, formValue.password)
            await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
            // console.log(user);
            navigate('/')

        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoader(false)
        }


    }

    const handleOnchange = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.value;
        console.log(name, value)
        setFormValue({
            ...formValue,
            [name]: value,

        })
        setError(null)
        //    console.log(formValue)
    }

    return (
        <div className=' grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__animated animate__zoomIn   '>
            <img src="/images/signup.jpg" alt="" className='md:h-full h-4/5 object-cover w-full h ' />
            <div className='flex flex-col md:p-1 p-8'>
                {/* {JSON.stringify(formValue)} */}
                <h1 className='text-4xl font-bold'>New User</h1>
                <p className='text-gray-600'>Create Your account to start your shopping</p>
                <form action="" className='mt-8 space-y-6' onSubmit={signup}>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='mb-2 font-semibold'>Fullname</label>
                        <input
                            onChange={handleOnchange}
                            type="text"
                            name='Fullname'
                            required
                            placeholder='Enter your name'
                            className='p-3 border border-gray-300 rounded'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='mb-2 font-semibold'>Email</label>
                        <input
                            onChange={handleOnchange}
                            type="email"
                            name='email'
                            placeholder='Enter your Email'
                            className='p-3 border border-gray-300 rounded'

                        />
                    </div>

                    <div className='flex flex-col relative'>
                        <label htmlFor="" className='mb-2 font-semibold'>Password</label>
                        <input
                            onChange={handleOnchange}
                            type={passType}

                            name='password'
                            placeholder='*****'
                            className='p-3 border border-gray-300 rounded'
                        />

                        <div className='absolute top-10 rounded right-4 w-8 h-6 text-center hover:bg-gray-600' onClick={() => handleShowPass()} >
                            {
                                showPass ? <i className="ri-eye-off-line"></i> : <i className="ri-eye-line"></i>
                            }
                        </div>
                    </div>

                    {
                        loader ? <h1 className='mt-0 text-lg font-semibold text-gray-600 '>Loading...</h1> : <button className='border bg-blue-600 rounded p-2 text-white font-semibold  px-5 hover:bg-rose-600'>
                            Signup
                        </button>
                    }


                </form>

                <div className='mt-1'>
                    Already have an account ? <NavLink to='/login' className='text-blue-600 font-semibold'>Login.</NavLink>
                </div>

                {
                    error && <div className='mt2 bg-rose-600 p-1 rounded shadow text-white font-semibold animate__animated animate__zoomIn flex justify-between items-center' >
                        <p>{error}</p>
                        <button onClick={() => setError(null)}>
                            <i className="ri-close-line"></i>
                        </button>
                    </div>
                }


            </div>
        </div>
    )
}

export default Signup