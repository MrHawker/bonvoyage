'use client'
import '../../../globals.css'
import { useEffect, useState } from 'react';
import { AwesomeButton } from 'react-awesome-button'
import styles from 'react-awesome-button/src/styles/themes/theme-bruce';
import UpdateProfile from '../../../lib/UpdateUserProfile'
const Page = () =>{
    const [isSmall,setIsSmall] = useState(false)
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
    const updateUserProfile = async (e:any)=>{
        e.preventDefault()
        const username = (document.getElementById("username") as HTMLInputElement).value
        const description =(document.getElementById("description") as HTMLInputElement).value
        await UpdateProfile(username,description)
        location.replace("http://localhost:3000/plan/profile")
    }
    return <div className="w-full h-screen flex flex-col relative">
        {!isSmall && <div className=" md:h-52 w-full" style={{backgroundImage: `url('/forest.jpg')`, backgroundSize: isSmall ? 'cover ' : 'contain', backgroundPosition: 'center'}}>
        </div>}
        <div className='grow bg-cyan-50 pt-10 pb-4'>
            <form className='md:flex px-6 mx-8  bg-white grow h-full border-slate-500 border-2 rounded-md shadow-2xl ' onSubmit={e=>{updateUserProfile(e)}}>
                <div className='grow flex flex-col'>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-6 mb-12">
                        Your profile
                    </h1>
                    <div className='mb-2'>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="username" id="username" placeholder="John Doe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About me</label>
                        <input type="text" name="description" id="description" placeholder="My name is John Doe and I love hiking! add me as friend when feature is available and we are sure to have a great time" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='mb-2 mt-auto'>
                        <AwesomeButton type='primary' 
                        cssModule={styles}
                        >Update</AwesomeButton>
                    </div>
                </div>
            </form>
        </div>
    </div>
}
export default Page;