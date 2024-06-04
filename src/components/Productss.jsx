import { useState } from 'react';
import React from 'react'
import Layout from './Layout'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



// import required modules
import { Navigation } from 'swiper/modules';



const Productss = () => {

    const [product, setProducts] = useState([
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/a.jpg',
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/b.jpg',
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/c.jpg',
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/d.jpg',
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/e.jpg',
        },


        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/g.jpg',
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/i.jpg',
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/j.jpg',
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/j.jpg',  // corrected to thumbnail
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/l.jpg',
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/j.jpg',  // corrected to thumbnail
        },
        {
            title: "new blue shirt's Men",
            price: 12000,
            discount: 15,
            thumbnail: '/products/l.jpg',
        },
        
    ]);




    return (
        <Layout>
            <div>
             

                <div className='md:p-16 p-8'>
                    <h1 className='text-3xl font-bold text-center'>All products</h1>
                    <p className='text-center text-gray-600 md:w-7/12 mt-2 mb-6 mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sit facere veniam dolorem numquam fuga cupiditate.!</p>
                    <div className='md:w-10/12 mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  '>
                        {product.map((item, index) => (
                            <div key={index} className='bg-white shadow-lg border'>
                                <img src={item.thumbnail} />
                                <div className='p-4 '>
                                    <h1 className='text-lg font-semibold'>{item.title}</h1>
                                    <div className='space-x-2 '>
                                        <label className='font-semibold' htmlFor="">₹{item.price - (item.price * item.discount) / 100}</label>
                                        <del className='text-gray-500 ' htmlFor="">₹{item.price}</del>
                                        <label htmlFor="" className='text-gray-600 text-sm text-center'>({item.discount}%Off)</label>
                                    </div>
                                    <button className='bg-green-500 p-2 w-full mt-4 rounded mx-auto '>buy now</button>
                                    <button className='bg-rose-500 p-2 w-full mt-2 rounded mx-auto '>
                                    <i className="ri-shopping-cart-line mr-2"></i>
                                        Add To Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Layout>

    )
}

export default Productss
