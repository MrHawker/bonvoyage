'use client'
import {
    GlobeAsiaAustraliaIcon,
    ClockIcon,
    UserCircleIcon,
    ArrowLeftEndOnRectangleIcon,
    MinusIcon,
    PlusIcon,
    ChatBubbleBottomCenterIcon
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
    },
    {
        name:'Chat(Upcoming)',
        href:'/plan/chats',
        icon:ChatBubbleBottomCenterIcon
    }
]
import Link from 'next/link';
import '../globals.css'
import { useState,useEffect} from 'react';
import { usePathname } from 'next/navigation';
const SideBar = ({username}:{username:string}) =>{
        const[window_size,setWindowSize] = useState(0)
        const pathname = usePathname()
        const [expanded,setExpanded] = useState(true)
        useEffect(() => {
            const setSideBar = () => {
                setWindowSize(window.innerWidth)
                if(pathname === '/plan/explore'){
                    setExpanded(false)
                }
                else if (window.innerWidth <= 768) { 
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
        if(pathname === '/plan/explore'){
            return <div className={` z-50 absolute flex flex-col text-white md:px-4 md:py-6 px-2 py-3 rounded-t-md  ${expanded ? 'md:h-screen' : 'md:h-28'} md:w-96 w-full  bg-slate-900 transition-all duration-300 `}>
                <div className='hidden md:flex w-full h-fit md:mt-4  '>
                    <GlobeAsiaAustraliaIcon className='w-12 fill-green-500'/>
                        <div className='flex flex-col'>
                            <p className='text-xl font-semibold'>Bonvoyage!</p>
                            <p className=' text-base '>{username}</p>
                    </div>
                    <div className={` hidden ml-auto md:flex md:flex-col justify-center`} onClick={()=>setExpanded(!expanded)}>
                        {
                            !expanded ? <PlusIcon className='w-10 h-10 text-slate-300 border-slate-500 border-2 rounded-lg'/>
                            :  
                            <MinusIcon className='w-10 h-10 text-slate-300 border-slate-500 border-2 rounded-lg'/>
                        }
                    </div>
                </div>
                {
                    expanded && <div className='hidden h-20 md:block'></div>
                }
                {
                    (expanded || window_size<=768 ) && 
                    <div className='flex md:flex-col md:h-screen'>
                    {
                        links.map(link=>{
                            return <Link key={link.name} 
                                        href={link.href}
                                        className={`rounded-md w-full text-white text-xl 
                                        font-semibold flex md:py-2 py-1 my-1  md:mx-0 hover:bg-green-300 
                                        ${pathname === link.href ? "bg-green-300":""}
                                        ${!expanded && "justify-center items-center"}`}
                                    >
                                    {
                                        (expanded && window_size>768) ? 
                                        <div className='flex '>
                                            <link.icon className='w-8'/>
                                            <p className='pl-6'>{link.name}</p>
                                        </div>
    
                                        : <link.icon className='w-8'/>
                                    }
                            </Link>
                        })
                    }
                    <Link key='SignOut'
                        href='http://localhost:4000/logout'
                        className={`mt-auto  md:mx-0 rounded-md  w-full text-white text-xl font-semibold flex md:py-2 py-1 my-1 hover:bg-green-300 ${!expanded && "justify-center items-center"}`}
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
                
            </div>
        }
        return <div className={` flex flex-col rounded-md md:h-screen px-2 py-3 bg-slate-900   ${expanded ? 'w-72 px-4 py-6' : 'md:w-20 sm:w-full ' } transition-all duration-300`}>
            <div className={`hidden md:flex text-white mt-4 justify-center items-center `}>
                {expanded &&
                    <div className='flex w-full h-fit'>
                        <GlobeAsiaAustraliaIcon className='w-12 fill-green-500 '/>
                        <div className='flex flex-col '>
                        <p className='text-xl font-semibold'>Bonvoyage!</p>
                        <p className=' text-base '>{username}</p>
                        </div>
                    </div>
                    
                }
                <div className={` ${expanded && "ml-auto"}  hidden md:flex flex-col justify-center items-center ${!expanded && 'mt-4'}`} onClick={()=>setExpanded(!expanded)}>
                    {
                        !expanded ? <PlusIcon className='w-10 text-slate-300 border-slate-500 border-2 rounded-lg'/>
                        :  
                        <MinusIcon className='w-10 h-10 text-slate-300 border-slate-500 border-2 rounded-lg'/>
                    }
                </div>
            </div>
            <div className='hidden h-20 md:block'></div>
            <div className='flex md:flex-col md:h-screen'>
                {
                    links.map(link=>{
                        return <Link key={link.name} 
                                    href={link.href}
                                    className={`rounded-md w-full text-white text-xl 
                                    font-semibold flex md:py-2 py-1 my-1  md:mx-0 hover:bg-green-300 
                                    ${pathname === link.href ? "bg-green-300":""}
                                    ${!expanded && "justify-center items-center"}`}
                                >
                                {
                                    expanded ? 
                                    <div className='flex '>
                                        <link.icon className='w-8'/>
                                        <p className='pl-6'>{link.name}</p>
                                    </div>

                                    : <link.icon className='w-8'/>
                                }
                        </Link>
                    })
                }
                <Link key='SignOut'
                    href='http://localhost:4000/logout'
                    className={`mt-auto  md:mx-0 rounded-md  w-full text-white text-xl font-semibold flex md:py-2 py-1 my-1 hover:bg-green-300 ${!expanded && "justify-center items-center"}`}
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
        </div>
    }
    export default SideBar
