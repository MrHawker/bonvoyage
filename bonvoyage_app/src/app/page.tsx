'use client'
import './globals.css'
import { AwesomeButton } from 'react-awesome-button'
import styles from 'react-awesome-button/src/styles/themes/theme-bruce';
import Map from './ui/Map';
const Page = () =>{
    
    return <div className='flex justify-start items-start h-screen bg-gradient-to-br from-yellow-300 via-green-500 to-green-700 '>
        <div className="grid grid-flow-row grid-rows-6 w-1/3 
        h-screen rounded-md justify-center
        ">
            <div></div>
            <div></div>
            <div>
                <h1 className='text-white text-5xl font-bold stroke-black' id='Welcome'> New to a city ?</h1>
                <h1 className='text-white text-4xl font-semibold mb-6'> Explore all it has to offer!</h1>
                <AwesomeButton type='secondary' 
                cssModule={styles}
                href="http://localhost:3000/login"
                >Get Started</AwesomeButton>
                
            </div>
        </div>
        <div className='w-2/3 h-screen flex flex-col justify-center items-center '>
            <Map/>
        </div>
        
    </div>
}
export default Page;