import React, { useState } from 'react'
import Layouter from './Layouter'

const Order = () => {
    const [order, setOrder] = useState([
        {
            orderId: 'WRT97987',
            CustomerName: 'waseem ahmad',
            email: 'waseemahmad9977@gmail.com',
            mobile: '7906327065',
            product: 'iphone 13',
            amount: 54000,
            date: '25/05/2024',
            status: 'pending'

        },
        {
            orderId: 'WRT97987',
            CustomerName: 'waseem ahmad',
            email: 'waseemahmad9977@gmail.com',
            mobile: '7906327065',
            product: 'iphone 13',
            amount: 54000,
            date: '25/05/2024',
            status: 'pending'

        },
        {
            orderId: 'WRT97987',
            CustomerName: 'waseem ahmad',
            email: 'waseemahmad9977@gmail.com',
            mobile: '7906327065',
            product: 'iphone 13',
            amount: 54000,
            date: '25/05/2024',
            status: 'pending'

        },
        {
            orderId: 'WRT97987',
            CustomerName: 'waseem ahmad',
            email: 'waseemahmad9977@gmail.com',
            mobile: '7906327065',
            product: 'iphone 13',
            amount: 54000,
            date: '25/05/2024',
            status: 'pending'

        },
        {
            orderId: 'WRT97987',
            CustomerName: 'waseem ahmad',
            email: 'waseemahmad9977@gmail.com',
            mobile: '7906327065',
            product: 'iphone 13',
            amount: 54000,
            date: '25/05/2024',
            status: 'pending'

        },
        {
            orderId: 'WRT97987',
            CustomerName: 'waseem ahmad',
            email: 'waseemahmad9977@gmail.com',
            mobile: '7906327065',
            product: 'iphone 13',
            amount: 54000,
            date: '25/05/2024',
            status: 'pending'

        },
        {
            orderId: 'WRT97987',
            CustomerName: 'waseem ahmad',
            email: 'waseemahmad9977@gmail.com',
            mobile: '7906327065',
            product: 'iphone 13',
            amount: 54000,
            date: '25/05/2024',
            status: 'pending'

        },

    ])
    return (
        <Layouter>
            <div>
                <h1 className='text-xl font-semibold'>Orders</h1>
                <div className='mt-6'>
                    <table className="w-full">
                        <thead>
                            <tr className='bg-rose-600 text-white'>
                                <th className='py-4'>OrderId</th>
                                <th>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {order.map((item, index) => (
                                <tr className='text-center' key={index}

                                style={{
                                   background:(index+1)%2===0?'#F3F4F6':'white'
                                }}

                                > {/* Remember to add a unique key */}
                                    <td className='py-4'>{item.orderId}</td>
                                    <td className='capitalize'> {item.CustomerName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td className='capitalize'>{item.product}</td>
                                    <td>₹ {item.amount !== 0 ? item.amount.toLocaleString() : "0"}</td>
                                    <td>{item.date}</td>
                                    <td className='capitalize'>
                                        <select name="" id="" className='border-gray-500 p-2'>
                                            <option value="pending">Pending</option>
                                            <option value="dispatch">Dispatch</option>
                                            <option value="returnded">Returned</option>

                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </Layouter>
    )
}

export default Order
