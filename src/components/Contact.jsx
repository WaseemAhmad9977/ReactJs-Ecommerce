import React from 'react'
import Layout from './Layout'

const Contact = () => {
  return (
    <Layout>
      <div>

        <header className=' md:w-6/12 mx-auto md:my-16 my-14 bg-white shadow-lg border '>

          <img src="/public/images/contact-us-banner.jpg" alt="" className='w-full' />
          <div className='p-8'>

            <form action="" className=' space-y-6'>

              <div className='flex flex-col'>
                <label htmlFor="" className='mb-2 font-semibold'>Name</label>
                <input type="text"
                  name='email'
                  placeholder='Jhone Doe'
                  className='p-3 border border-gray-300 rounded'

                />
                
              </div>

              <div className='flex flex-col'>
                <label htmlFor="" className='mb-2 font-semibold'>email</label>
                <input type="email"
                  name='email'
                  placeholder='enter your gmail'
                  className='p-3 border border-gray-300 rounded'
                />
                
              </div>

              
              <div className='flex flex-col'>
                <label htmlFor="" className='mb-2 font-semibold'>Message</label>
                <textarea 
                  name='messege'
                  placeholder='enter your messege'
                  className='p-3 border border-gray-300 rounded'
                  rows={3}

                />
                
              </div>
              <button class="border bg-blue-600 rounded p-2 text-white font-semibold  px-5 hover:bg-rose-600">Get Response</button>



            </form>
          </div>
        </header>
      </div>


    </Layout>

  )
}

export default Contact