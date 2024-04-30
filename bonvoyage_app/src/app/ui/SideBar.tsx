'use client'
import {
    GlobeAsiaAustraliaIcon,
    ClockIcon,
    UserCircleIcon,
    ArrowLeftEndOnRectangleIcon,
    MinusIcon,
    PlusIcon
  } from '@heroicons/react/24/outline';

const links = [
    {
        name:'Explore',
        href:'explore',
        icon:GlobeAsiaAustraliaIcon
    },
    {
        name:'History',
        href:'history',
        icon:ClockIcon
    },
    {
        name:'Profile',
        href:'profile',
        icon:UserCircleIcon
    }
]
import Link from 'next/link';
import '../globals.css'
import { useState } from 'react';
const SideBar = () =>{
    const [retracted,setRetracted] = useState(true)
    return retracted ? <div className="flex flex-col rounded-md h-screen md:w-72 bg-slate-900 md:px-4 md:py-6">
        <div className='hidden md:flex text-white mt-4'>
            <GlobeAsiaAustraliaIcon className='w-12 fill-green-500 '/>
            <div className='flex flex-col pr-16'>
                <p className='text-xl font-semibold'>Bonvoyage!</p>
                <p className=' text-base '>Username</p>
            </div>
            <div className='flex flex-col justify-center items-center' onClick={()=>setRetracted(!retracted)}>
                <MinusIcon className='w-10 h-10 text-slate-300 border-slate-500 border-2 rounded-lg'/>
            </div>
        </div>
        <div className='hidden h-20 md:block'></div>
        {
            links.map(link=>{
                return <Link key={link.name} 
                            href={link.href}
                            className=' rounded-md bg-slate-700 w-full text-white text-xl font-semibold flex py-2 my-1 hover:bg-green-300'
                        >
                        <link.icon className='w-8'/>
                        <p className='pl-6'>{link.name}</p>
                </Link>
            })
        }
        <Link key='SignOut'
        href='http://localhost:4000'
        className=' mt-auto rounded-md bg-slate-700 w-full text-white text-xl font-semibold flex py-2 my-1 hover:bg-green-300'
            >
            <ArrowLeftEndOnRectangleIcon className='w-8'/>
            <p className='pl-6'>Sign Out</p>
        </Link>
    </div>:
    
    <div className="flex flex-col rounded-md h-screen md:w-20 bg-slate-900 px-2 py-3">
         <div className='flex flex-col justify-center items-center mt-4' onClick={()=>setRetracted(!retracted)}>
                <PlusIcon className='w-10 h-10 text-slate-300 border-slate-500 border-2 rounded-lg'/>
        </div>
        <div className='h-20 md:block'></div>
        {
            links.map(link=>{
                return <Link key={link.name} 
                            href={link.href}
                            className=' justify-center items-center rounded-md bg-slate-700 w-full text-white text-xl font-semibold flex py-2 my-1 hover:bg-green-300'
                        >
                        <link.icon className='w-10'/>
                </Link>
            })
        }
        <Link key='SignOut'
        href='http://localhost:4000'
        className=' justify-center items-center mt-auto rounded-md bg-slate-700 w-full text-white text-xl font-semibold flex py-2 my-1 hover:bg-green-300'
            >
            <ArrowLeftEndOnRectangleIcon className='w-10'/>
        </Link>
        <div className='ml-auto w-10 hover:bg-white'></div>
    </div>
}
export default SideBar