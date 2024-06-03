import React, { useState } from 'react'
import Layout from './Layout'

const Category = () => {
    const [category,setCategory] = useState([
        {
            title:'electronics'
        },
        {
            title:'mens'
        },
        {
            title:'womens'
        },
        {
            title:'clothes'
        },
        {
            title:'furniture'
        },
        {
            title:'smartphones'
        },
        {
            title:'kidds'
        },
        {
            title:'sneakers'
        },

    ])
    return (
        <Layout>
            <div className='md:p-16 p-8'>
                <div className= 'md:w-10/12 md:p-16 mx-auto grid md:grid-cols-4 md:gap-16 gap-8 '> 
                   {
                    category.map((item,index)=>(
                        <div key={index} className='flex justify-center items-center bg-white shadow-lg flex-col md:p-8 p-4 border rounded-lg hover:bg-orange-600 hover:text-white'>
                            <i className="ri-menu-search-line text-6xl "></i>
                          <h1 className='text2xl font-bold '>
                            {item.title}
                          </h1>
                        </div>
                    ))
                   }
                </div>
            </div>
        </Layout>
    )
}

export default Category