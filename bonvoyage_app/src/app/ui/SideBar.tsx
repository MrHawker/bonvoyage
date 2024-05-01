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
        href:'/plan/explore',
        icon:GlobeAsiaAustraliaIcon
    },
    {
        name:'History',
        href:'/plan/history',
        icon:ClockIcon
    },
    {
        name:'Profile',
        href:'/plan/profile',
        icon:UserCircleIcon
    }
]
import Link from 'next/link';
import '../globals.css'
import { useState,useEffect } from 'react';
import { usePathname } from 'next/navigation';
const SideBar = () =>{
        const pathname = usePathname()
        console.log(pathname)
        const [expanded,setExpanded] = useState(true)
        useEffect(() => {
            const setSideBar = () => {
                if (window.innerWidth <= 640) { 
                    setExpanded(false); 
                }else{
                    setExpanded(true)
                }
            };
            setSideBar(); 
            window.addEventListener('resize', setSideBar); 
            return () => {
                window.removeEventListener('resize', setSideBar);
            } 
        }, []);
        return <div className={`flex flex-col rounded-md h-screen w-20 px-2 py-3 bg-slate-900  ${expanded && 'w-72 px-4 py-6' } transition-all duration-300`}>
            <div className={`flex text-white mt-4 justify-center items-center transition-all duration-300`}>
                { 
                    expanded && <GlobeAsiaAustraliaIcon className='w-12 fill-green-500 '/>
                }
                {expanded &&
                    <div className='flex flex-col pr-16'>
                    <p className='text-xl font-semibold'>Bonvoyage!</p>
                    <p className=' text-base '>Username</p>
                    </div>
                }
                <div className={`flex flex-col justify-center items-center ${!expanded && 'mt-4'}`} onClick={()=>setExpanded(!expanded)}>
                    {
                        !expanded ? <PlusIcon className='w-10 text-slate-300 border-slate-500 border-2 rounded-lg'/>
                        :  
                        <MinusIcon className='w-10 h-10 text-slate-300 border-slate-500 border-2 rounded-lg'/>
                    }
                </div>
            </div>
            <div className='h-20 md:block'></div>
            {
                links.map(link=>{
                    return <Link key={link.name} 
                                href={link.href}
                                className={`rounded-md bg-slate-700 w-full text-white text-xl 
                                font-semibold flex py-2 my-1 hover:bg-green-300 
                                ${pathname === link.href && "bg-green-300"}
                                ${!expanded && "justify-center items-center"}`}
                            >
                            {
                                expanded ? 
                                <div className='flex justify-center items-center'>
                                    <link.icon className='w-8'/>
                                    <p className='pl-6'>{link.name}</p>
                                </div>
                                
                                : <link.icon className='w-8'/>
                            }
                    </Link>
                })
            }
            <Link key='SignOut'
            href='http://localhost:4000'
            className={` mt-auto rounded-md bg-slate-700 w-full text-white text-xl font-semibold flex py-2 my-1 hover:bg-green-300 ${!expanded && "justify-center items-center"}`}
                >
                    {
                        expanded ? 
                        <div className='flex justify-center items-center'>
                            <ArrowLeftEndOnRectangleIcon className='w-8'/>
                            <p className='pl-6'>Sign Out</p>
                        </div>
                        
                        : <ArrowLeftEndOnRectangleIcon className='w-8'/>
                    }
            </Link>
        </div>
    }
    export default SideBar
