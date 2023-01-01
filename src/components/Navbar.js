import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='text-white flex justify-between items-center py-4 px-6 z-[100] w-full absolute '>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer '>NETFLIX</h1>
            <div>
                <button className='pr-4 '>Sign In</button>
                <button className=' bg-red-600 px-6 py-2 text-white rounded cursor-pointer'>Sign Up</button>
            </div>
        </div>
    </>
  )
}

export default Navbar