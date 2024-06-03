import React, { useState } from 'react';
import Layouter from './Layouter';

const Product = () => {
  const [products, setProducts] = useState([
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/a.jpg'
    },
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/b.jpg'
    },
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/c.jpg'
    },
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/d.jpg'
    },
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/e.jpg'
    },
   
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/g.jpg'
    },
   
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/i.jpg'
    },
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/j.jpg'
    },
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/k.jpg'
    },
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/l.jpg'
    },
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/k.jpg'
    },
    
    {
      title: "Men's shirt blue denim",
      description: "I am related to men's product",
      price: 2000,
      discount: 15,
      Image: '/products/j.jpg'
    },

  ]);

  return (
    <Layouter>
      <div>
        <h1 className='text-xl font-semibold mb-4'>Products</h1>
        <div className='grid md:grid-cols-4 gap-8'>
          {products.map((item, index) => (
            <div key={index} className='bg-white rounded-md shadow-lg'>
              <img src={item.Image} alt={item.title} className='rounded-t-md w-full  h-[270px] object-cover' />
              <div className='p-4 '>
                <h1 className='font-semibold text-md '>{item.title}</h1>
                <p className='text-gray-600 text-sm'>{item.description.slice(0,50)}...</p>
                <div className='flex gap-2 mt-2'>
                  <label htmlFor="">₹{item.price-(item.price*item.discount)/100}</label>
                  <del htmlFor="">₹{item.price}</del>
                  <label htmlFor="" className='text-gray-600'>({item.discount}% Off)</label>
                </div>
              </div>
              
            </div>
           
          ))} 
        </div>
      </div>
    </Layouter>
  );
}

export default Product;
