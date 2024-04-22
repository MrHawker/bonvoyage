
'use client'
import '../globals.css'
import { MapPinIcon } from '@heroicons/react/24/solid'
import {signika, rowdies} from '../lib/fonts'
import Link from 'next/link';
const LoginPage = () =>{
    return (
    <div className='flex h-screen w-screen justify-center items-center  bg-gradient-to-br from-yellow-300 via-green-500 to-green-700'>
        <div className='flex flex-col justify-start h-fit w-1/3 border-2 border-black shadow-2xl rounded-2xl bg-slate-100'>
            <div className='w-full h-1/3 flex flex-col justify-center items-center'>
                <MapPinIcon className=" text-blue-500 h-12" />
                <h1 className={`${rowdies.className} antialiased text-3xl font-normal`} >LOG IN</h1>
            </div>
            <form className='flex flex-col items-center' onSubmit={e=>{e.preventDefault()}}>
                <div className='flex flex-col ml-4 mr-4 border-black border rounded-xl h-fit w-2/3'>
                    <label className={`${rowdies.className} antialiased font-bold ml-4 mt-2 h-1/2`} htmlFor='username'>Username</label>
                    <input className={`${signika.className} ml-4 mb-1 focus:outline-none mr-2 bg-slate-100 h-1/2`} type='text' id='username' name='username' placeholder='John Doe'/>
                </div>
                <div className='flex flex-col ml-4 mr-4 border-black border rounded-xl h-fit mt-4 w-2/3'>
                    <label className={`${rowdies.className} antialiased ml-4 font-bold mt-2`} htmlFor='password'>Password</label>
                    <input className={`${signika.className} ml-4 mb-1 focus:outline-none mr-2 bg-slate-100`} type='password' id='password' name='password' placeholder='Password'/>
                </div>
                <div className='h-10 w-2/3 flex justify-center items-center bg-black border border-black rounded-3xl mt-4 text-white hover:bg-slate-800 hover:border-slate-800 duration-300'>
                    <input type='submit' value='Log In!'/>
                </div>
                <div className='h-10 w-2/3 flex justify-center items-center bg-black border border-black rounded-3xl mt-4 text-white hover:bg-slate-800 hover:border-slate-800 duration-300'>
                    <Link className='w-full h-full flex justify-center items-center' href="http://localhost:4000/api/users/OAuth">Sign In with Google</Link>
                </div>
            </form>

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