
import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Layout = ({ children }) => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const menus = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Products',
            href: '/product',
        },
        {
            label: 'Category',
            href: '/Category',
        },
        {
            label: 'Contact Us',
            href: '/contact-us',
        },

    ]
  
    const mobileLink=(href)=>{
        navigate(href);
        setOpen(false);
    }

    return (
        <div>
            <nav className='shadow-lg bg-white sticky top-0 left-0   '>
                <div className='w-10/12 mx-auto flex justify-between items-center' >
                    <img src="/images/logo2.png" alt="" className='w-[100px]' />

                    <button className='md:hidden ' onClick={() => setOpen(!open)}>
                        <i className="ri-menu-3-fill text-3xl "></i>

                    </button>
                    <ul className='md:flex gap-2 items-center hidden'>
                        {menus.map((item, index) => (

                            <li key={index}>
                                <NavLink
                                    to={item.href}
                                    className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                                >
                                    {item.label}</NavLink>
                            </li>

                        ))}
                        <NavLink
                            className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                            to='/login'
                        >Login</NavLink>


                        <NavLink
                            className="block bg-blue-400 py-3 px-8 text-md  font-semibold  text-center hover:bg-rose-600  hover:text-white"
                            to='/signup'
                        >signup</NavLink>
                    </ul>

                </div>
            </nav>


            <aside className='bg-slate-900 fixed top-0 left-0 ] h-full shadow-lg md:hidden overflow-hidden z-50 '

                style={{
                    width: open?250:0,
                    transition: '0.3s'

                }}
            >
                <div className='flex flex-col p-8 gap-6 '>
                    {
                        menus.map((item, index) => (
                            <button key={index} className="text-white border pt-2 text-center pb-2 rounded " onClick={() => mobileLink(item.href)}>
                                {item.label}
                            </button>
                        ))
                    }
                </div>

            </aside>


            {children}

            <footer className='bg-orange-600 py-16 '>

                <div className='w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8 '>


                    <div>
                        <h1 className='text-white font-semibold text-2xl mb-3 '>Website Links</h1>

                        <ul className='space-y-2 text-slate-50'>
                            {
                                menus.map((item, index) => (
                                    <li key={index}>
                                        <NavLink to={item.href}>{item.label}</NavLink>
                                    </li>
                                ))
                            }
                            <li>
                                <NavLink to='/login'>Login</NavLink>

                            </li>
                            <li> <NavLink to='/signup'>signup</NavLink></li>
                        </ul>

                    </div>
                    <div>
                        <h1 className='text-white font-semibold text-2xl mb-3'>follow us</h1>
                        <ul className='space-y-2 text-slate-50'>
                            <li><NavLink to='/'>Facebook</NavLink></li>
                            <li><NavLink to='/'>github</NavLink></li>
                            <li><NavLink to='/'>linkedIn</NavLink></li>
                            <li><NavLink to='/'>Twitter</NavLink></li>
                            <li><NavLink to='/'>instagram</NavLink></li>
                        </ul>

                    </div>

                    <div className='pr-8'>
                        <h1 className='text-white font-semibold text-2xl mb-3'>Brand details</h1>
                        <p className='text-gray-100 mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, consectetur, recusandae, laudantium id obcaecati </p>
                        <img src="/images/logo2.png" alt="" className='w-[100px]' />

                    </div>


                    <div>
                        <h1 className='text-white font-semibold text-2xl mb-3'>Contact Us</h1>
                        <form action="" className='space-y-4'>
                            <input
                                type='text'
                                required
                                placeholder='Enter your name'
                                className='p-2 w-full bg-white rounded '

                            />
                            <input
                                type='email'
                                required
                                placeholder='Enter your email '
                                className='p-2 w-full bg-white rounded '
                            />
                            <textarea
                                name='messege'
                                required
                                placeholder='Enter your  message'
                                className='p-2 w-full bg-white rounded resize-none '
                                rows={3}
                            />

                            <button className='bg-blue-600 text-white py-2 px-2 rounded'>
                                submit
                            </button>

                        </form>
                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Layout
