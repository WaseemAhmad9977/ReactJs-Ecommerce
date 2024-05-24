import { useState } from "react"

const Admin = () => {

  // const [open,setOpen]=useState(true)

  const [size, setSize] = useState(280);
  const [accountMenu, setAccountMenu] = useState(false)

  return (
    <div>
      <aside className=" bg-indigo-600  fixed top-0 left-0 h-full"
        style={{
          width: size,
          transition: '0.3s'
        }}
      ></aside>
      <section className="bg-gray-300 h-screen "

        style={{
          marginLeft: size,
          transition: '0.3s'
        }}
      >

        <nav className="bg-white p-6 shadow  gap-4 items-center flex justify-between">

          <div className="flex gap-4  items-center">

            <button className="bg-gray-50 hover:bg-indigo-500 hover:text-white w-8 h-8 border" onClick={() => setSize(size == 280 ? 0 : 280)}>
              <i className="ri-menu-2-line text-xl"></i>
            </button>
            <h1 className="text-md font-semibold">ShopCode</h1>

          </div>

          <div>
            <button className="relative" >
              <img src="../images/9440461.jpg" className="w-10 h-10 rounded-full" onClick={()=>setAccountMenu(!accountMenu)} />

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
      </section>
    </div>
  )
}

export default Admin

