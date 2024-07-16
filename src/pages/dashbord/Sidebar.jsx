import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { TbUsers } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";


import { AiOutlineBars } from 'react-icons/ai'

import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Sidebar = () => {
    const [isActive, setActive] = useState(true)
    //(role)
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 w-full z-50 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer w-full p-4 font-bold'>
                        <Link to='/'>
                            {/* <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='200'
                height='100'
              /> */}

                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div className='[&>.active]:bg-red-500 [&>.active]:text-white mt-16'>

                <NavLink to='addUser' className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                    <TbUsers className='w-5 h-5' />
                    <span className='mx-4 font-medium'>Add User</span>
                </NavLink>

                {/* manage Students */}
                <NavLink to="manageStudents" className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                    <MdOutlineManageAccounts className='w-5 h-5' />

                    <span className='mx-4 font-medium'> Manage Students</span>
                   </NavLink>
                {/* logOutbutton */}
                <button
                    onClick={async () =>
                        await logOutFirebase()
                            .then(res => {
                                toast.success("logOut successful")
                                navigate('/')
                            })
                            .catch(error => toast.error(error.message))

                    }
                    className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                >
                    <GrLogout className='w-5 h-5 text-red-500' />

                    <span className='mx-4 font-medium'>Logout</span>
                </button>
            </div>
        </>
    )
}

export default Sidebar