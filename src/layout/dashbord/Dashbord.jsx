import React from 'react'

import { Outlet } from 'react-router-dom'
import Sidebar from '../../pages/dashbord/Sidebar'
import Navbar from '../../pages/header/Navbar'

function Dashboard() {
  return (
 <div className='w-full'>
     <div className=' w-[1180px] mx-auto'>
    <Navbar />
     <div className='flex min-h-screen '>
      <div>
       <Sidebar />
      </div>
      <div className='flex-1'>
       <div className='pl-5'>
        <Outlet></Outlet>
       </div>
      </div>
    </div>
   </div>
 </div>
  )
}

export default Dashboard
