import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom";



const Layouter = ({ children }) => {


  // const [open,setOpen]=useState(true)

  const [size, setSize] = useState(280);
  const [mobileSize, setMobileSize] = useState(0);
  const [accountMenu, setAccountMenu] = useState(false)
  const location = useLocation();


  const menu = [

    {
      label: 'Dashboard',
      icon: <i class="ri-dashboard-3-line mr-2"></i>,
      to: '/admin/dashboard',


    },
    {
      label: 'Customer',
      icon: <i class="ri-user-line mr-2"></i>,
      to: '/admin/customer',
    },



    {
      label: 'Products',
      icon: <i className="ri-shopping-cart-2-line mr-2"></i>,
      to: '/admin/product',


    },
    {
      label: 'Order',
      icon: <i class="ri-shape-line mr-2"></i>,
      to: '/admin/order'
    },
    {
      label: 'payment',
      icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
      to: '/admin/payment'
    },
    {
      label: 'setting',
      icon: <i class="ri-settings-2-line mr-2"></i>,
      to: '/admin/setting'
    }
   

  ]


  return (
    <>
      {/* desktop */}
      <div className="md:block hidden">
        <aside className=" bg-indigo-600  fixed top-0 left-0 h-full overflow-hidden"
          style={{
            width: size,
            transition: '0.3s'
          }}
        >


          <div className="flex flex-col">

            <div className="flex flex-col">
              {
                menu.map((item, index) => (
                  <NavLink
                    to={item.to}
                    className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white'
                    key={index}
                    style={{
                      background: location.pathname === item.to ? 'red' : ''
                    }}
                  >
                    {item.icon}
                    {item.label}
 
                  </NavLink>
                  

                ))
              }

              <button className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white text-left'><i class="ri-logout-circle-r-line mr-2"></i>Logout</button>
            </div>


          </div>


        </aside>
        <section className=" h-screen "

          style={{
            marginLeft: size,
            transition: '0.3s'
          }}
        >

          <nav className="bg-white p-6 shadow  gap-4 items-center flex justify-between sticky left-0 top-0">

            <div className="flex gap-4  items-center">

              <button className="bg-gray-50 hover:bg-indigo-500 hover:text-white w-8 h-8 border" onClick={() => setSize(size == 280 ? 0 : 280)}>
                <i className="ri-menu-2-line text-xl"></i>
              </button>
              <h1 className="text-md font-semibold">ShopCode</h1>

            </div>

            <div>
              <button className="relative" >
                <img src="../images/9440461.jpg" className="w-10 h-10 rounded-full" onClick={() => setAccountMenu(!accountMenu)} />

                {
                  accountMenu && <div className="absolute top-18 right-0 bg-white shadow-lg p-6 w-[200px]">
                    <h1 className="text-lg font-semibold">Er Waseem</h1>
                    <p className="text-gray-500">xyz@gmail.com</p>
                    <div className="border h-px my-4 "></div>
                    <button>
                      <i className="ri-logout-circle-r-line mr-2"></i>
                      Logout
                    </button>
                  </div>
                }

              </button>
            </div>
          </nav>
          <div className="p-6">

            {children}


          </div>
        </section>
      </div>

      {/* mobile */}
      <div className="md:hidden block">
        <aside className=" bg-indigo-600  fixed top-0 left-0 h-full overflow-hidden z-50"
          style={{
            width: mobileSize,
            transition: '0.3s'
          }}
        >


          <div className="flex flex-col">

            <button onClick={() => setMobileSize(mobileSize === 280 ? 0 : '')}  
            className="text-left mx-4 mt-4"
            
            ><i className="ri-menu-fold-fill text-white text-xl"></i></button>

            <div className="flex flex-col">
              {
                menu.map((item, index) => (
                  <NavLink
                    to={item.to}
                    className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white'
                    key={index}
                    style={{
                      background: location.pathname === item.to ? 'red' : ''
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </NavLink>
                ))
              }
                 <button className='px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white text-left'><i class="ri-logout-circle-r-line mr-2"></i>Logout</button>
            </div>


          </div>


        </aside>
        <section className=" h-screen "

          style={{
            // marginLeft: mobileSize,
            // transition: '0.3s'
          }}
        >

          <nav className="bg-white p-6 shadow  gap-4 items-center flex justify-between sticky left-0 top-0">

            <div className="flex gap-4  items-center">

              <button className="bg-gray-50 hover:bg-indigo-500 hover:text-white w-8 h-8 border" onClick={() => setMobileSize(mobileSize == 0 ? 280 : 0)}>
                <i className="ri-menu-2-line text-xl"></i>
              </button>
              <h1 className="text-md font-semibold">ShopCode</h1>

            </div>

            <div>
              <button className="relative" >
                <img src="../images/9440461.jpg" className="w-10 h-10 rounded-full" onClick={() => setAccountMenu(!accountMenu)} />

                {
                  accountMenu && <div className="absolute top-18 right-0 bg-white shadow-lg p-6 w-[200px]">
                    <h1 className="text-lg font-semibold">Er Waseem</h1>
                    <p className="text-gray-500">xyz@gmail.com</p>
                    <div className="border h-px my-4 "></div>
                    <button>
                      <i className="ri-logout-circle-r-line mr-2"></i>
                      Logout
                    </button>
                  </div>
                }

              </button>
            </div>
          </nav>
          <div className="p-6">

            {children}


          </div>
        </section>
      </div>




    </>
  )
}

export default Layouter;

