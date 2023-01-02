import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
        <div className='w-full h-screen'>
            <img className='sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e2232ec0-d1eb-4095-af7e-f8eacee3682b/BD-en-20221228-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
                    <div className='max-w-[320px] mx-auto py-10'>
                        <h1 className='text-3xl font-bold'>Sign up</h1>
                        <form className='w-full flex flex-col py-4 '>
                            <input className='p-3 my-4 bg-gray-600 rounded-sm ' type="email" placeholder='Email' autoComplete='email' />
                            <input className='p-3 my-2 bg-gray-600 rounded-sm' type="password" placeholder='password' autoComplete='current-password' />
                            <button className='px-6 py-2 bg-red-600 hover:rounded-full ease-out duration-500 my-6 '>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-gray-500'>
                                <p className='mr-2'>
                                    <input type="checkbox" /> Remeber me
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <div className='px-4'>
                            <p className='mt-12 text-sm text-gray-400'>Already Subscribe to Netflix? <span className='text-white'><Link to={'/login'}> Sign In</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup