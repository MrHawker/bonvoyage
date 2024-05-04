'use client'
import '../../globals.css'
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { BiRestaurant } from 'react-icons/bi';
import { FaLandmark } from 'react-icons/fa';
import { MdMuseum } from 'react-icons/md';
import { BiHotel } from 'react-icons/bi';
import { GiFishing } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { MdInterests } from 'react-icons/md';
import { PlusIcon } from '@heroicons/react/24/outline';
import { AwesomeButton } from 'react-awesome-button'
import styles from 'react-awesome-button/src/styles/themes/theme-bruce';
const tags = [
    {
        name:"restaurant",
        icon: BiRestaurant
    },
    {
        name: "landmark",
        icon: FaLandmark
    },
    {
        name: "museum",
        icon: MdMuseum
    },
    {
        name: "accomodation",
        icon: BiHotel
    },
    {
        name: "fisheries",
        icon: GiFishing
    },
    
]
const Page = () =>{
    const [isSmall,setIsSmall] = useState(false)
    const [open,setOpen] = useState(false)
    const [interests,setInterests] = useState(tags)
    useEffect(() => {
        const setUserIcon = () => {
            if (window.innerWidth <= 768) { 
                setIsSmall(true); 
            }else{
                setIsSmall(false)
            }
        };
        setUserIcon(); 
        window.addEventListener('resize', setUserIcon); 
        return () => {
            window.removeEventListener('resize', setUserIcon);
        } 
    }, []);
    const onClick = (e:any) =>{
        e.preventDefault()
        const name = e.currentTarget.getElementsByTagName("p")[0].innerHTML
        const newArray = [...interests]
        const newInterest = {
            name:name,
            icon:MdInterests
        }
        newArray.push(newInterest)
        setInterests(newArray)
    }
    return <div className="w-full h-screen flex flex-col relative">
        <div className=" md:h-52 w-full" style={{backgroundImage: `url('/forest.jpg')`, backgroundSize: isSmall ? 'cover ' : 'contain', backgroundPosition: 'center'}}>
        </div>
        <div className=' hidden md:flex absolute rounded-full md:w-36 md:h-36   bg-white' style={{top: !isSmall ? '130px' : '175px', left:'10px'}}>
            <UserCircleIcon />
        </div>
        <div className='grow bg-cyan-50 md:pt-20 pt-10 pb-4'>
            <form className='md:flex px-6 mx-8  bg-white grow h-full border-slate-500 border-2 rounded-md shadow-2xl ' onSubmit={(e)=>{e.preventDefault()}}>
                <div className='grow'>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-6 mb-12">
                        Your profile
                    </h1>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    </div>
                    <div className='mt-6 mb-2'>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="username" id="username" placeholder="John Doe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <AwesomeButton type='primary' 
                    cssModule={styles}
                    className='mb-2'
                    >Update</AwesomeButton>
                </div>
                <div className='md:flex flex-col md:w-1/3'>
                    <div className='flex flex-wrap mr-4 ml-8 mt-4 mb-0 rounded-lg h-fit pt-4 '>
                        {
                            interests.map(interest =>{
                                return <div key={interest.name} className='  mr-2 flex border-1 rounded-xl bg-gray-400 h-6 justify-center items-center px-4 my-2 hover:bg-opacity-40 transition-all duration-500 hover:cursor-pointer'>
                                    <interest.icon className='w-4 '/>
                                    <p className=' font-semibold ml-2  '>{interest.name}</p>
                                </div>
                            })
                        }
                    </div>
                    <div onMouseLeave={()=>setOpen(false)} className='flex flex-col mr-4 ml-8 rounded-lg h-fit w-fit'>
                            <div onMouseEnter={()=>setOpen(true)}
                            key="add" className=' w-16 mr-2 flex border-1 rounded-xl bg-gray-400 h-6 justify-center items-center px-4 my-2 hover:bg-opacity-40 transition-all duration-500 hover:cursor-pointer'>
                                <PlusIcon className='w-4'/>
                            </div>
                            {
                                open &&
                                <div className='overflow-y-auto h-12 mr-2 flex flex-col border-1 rounded-sm my-2 pr-2 w-36'>
                                    {
                                        interests.map(interest =>{
                                            return <div onClick={e=>{onClick(e)}}
                                             key={interest.name} className=' flex bg-gray-400 hover:bg-opacity-40 transition-all duration-500 hover:cursor-pointer' >
                                                <interest.icon className='w-4 mt-1 ml-1'/>
                                                <p className=' font-semibold ml-2 '>{interest.name}</p>
                                            </div>
                                        })
                                    }
                                </div>
                                
                            }
                        </div>
                </div>
            </form>
        </div>
    </div>
}
export default Page;