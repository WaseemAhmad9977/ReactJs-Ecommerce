import React, { useState } from 'react'
import Layouter from './Layouter'

const Customer = () => {
    const [customer, setCustomer] = useState([
        {
          
            CustomerName: 'waseem ahmad',
            email: 'waseemahmad9977@gmail.com',
            mobile: '7906327065',
            amount:9000,
            date: '25/05/2024 10:15:14',
            
            
        }
     

    ])
    return (
        <Layouter>
            <div>
                <h1 className='text-xl font-semibold'>Customer</h1>
                <div className='mt-6'>
                    <table className="w-full">
                        <thead>
                            <tr className='bg-rose-600 text-white text-left'>
                                {/* <th className='py-4'>OrderId</th> */}
                                <th className='p-4'>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Amount</th>
                                {/* <th>Product</th> */}
                                {/* <th>Amount</th> */}
                                <th>Date</th>
                                {/* <th>Status</th> */}
                            </tr>
                        </thead>

                        <tbody>
                            {customer.map((item, index) => (
                                <tr  key={index}

                                    style={{
                                        background: (index + 1) % 2 === 0 ? '#F3F4F6' : 'white'
                                    }}

                                > 
                                    <td className='capitalize px-4 py-2'> 

                                    <div className='flex gap-2 items-center'>
                                        <img src="../images/9440461.jpg" alt=""  className="w-10 h-10 rounded-full"  / >
                                         <div className='flex flex-col justify-center'>
                                         <span className='font-semibold'>{item.CustomerName}</span>
                                         <small>{item.date}</small>
                                         </div>
                                    </div>
                                    
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>₹ {item.amount !== 0 ? item.amount.toLocaleString() : "0"}</td>
                                  
                                    <td>{item.date}</td>
                                    
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </Layouter>

    )
}

export default Customer
