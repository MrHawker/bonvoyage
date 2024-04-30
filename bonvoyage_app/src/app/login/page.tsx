
'use client'
import '../globals.css'
import { MapPinIcon } from '@heroicons/react/24/solid'
import {signika, rowdies} from '../lib/fonts'
import Link from 'next/link';
const LoginPage = () =>{
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 sm:h-screen bg-gradient-to-br from-yellow-300 via-green-500 to-green-700">
            <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <MapPinIcon className=" w-10 h-10 mr-2 text-blue-700" />
                Bonvoyage
            </div>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
    // return (
    // <div className='flex h-screen w-screen justify-center items-center  bg-gradient-to-br from-yellow-300 via-green-500 to-green-700'>
    //     <div className='flex flex-col justify-start h-2/3 w-2/6 border-2 border-black shadow-2xl rounded-2xl bg-slate-100'>
    //         <div className='w-full h-1/3 flex flex-col justify-center items-center'>
    //             <MapPinIcon className=" text-blue-500 h-1/4" />
    //             <h1 className={`${rowdies.className} antialiased text-3xl font-normal`} >LOG IN</h1>
    //         </div>
    //         <form className='flex flex-col h-2/4 items-center' onSubmit={e=>{e.preventDefault()}}>
    //             <div className='flex flex-col ml-4 mr-4 border-black border rounded-xl h-fit w-2/3'>
    //                 <label className={`${rowdies.className} antialiased font-bold ml-4 mt-2 h-1/2`} htmlFor='username'>Username</label>
    //                 <input className={`${signika.className} ml-4 mb-1 focus:outline-none mr-2 bg-slate-100 h-1/2`} type='text' id='username' name='username' placeholder='John Doe'/>
    //             </div>
    //             <div className='flex flex-col ml-4 mr-4 border-black border rounded-xl h-fit mt-4 w-2/3'>
    //                 <label className={`${rowdies.className} antialiased ml-4 font-bold mt-2`} htmlFor='password'>Password</label>
    //                 <input className={`${signika.className} ml-4 mb-1 focus:outline-none mr-2 bg-slate-100`} type='password' id='password' name='password' placeholder='Password'/>
    //             </div>
    //             <div className='h-10 w-2/3 flex justify-center items-center bg-black border border-black rounded-3xl mt-4 text-white hover:bg-slate-800 hover:border-slate-800 duration-300'>
    //                 <input type='submit' value='Log In!'/>
    //             </div>
    //             <div className='h-10 w-2/3 flex justify-center items-center bg-black border border-black rounded-3xl mt-4 text-white hover:bg-slate-800 hover:border-slate-800 duration-300'>
    //                 <Link className='w-full h-full flex justify-center items-center' href="http://localhost:4000/api/users/OAuth">Sign In with Google</Link>
    //             </div>
    //         </form>

    //     </div>
    // </div>
    // )
}
export default LoginPage;