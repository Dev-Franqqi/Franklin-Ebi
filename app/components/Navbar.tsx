"use client"
import { useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import useDark from "./hooks/useDark";
import useOpen from "./hooks/useOpen";
export default function Navbar(){
        const {open,setOpen} = useOpen();
        const {darkMode,setDarkMode} = useDark();
        useEffect(()=>{
            const body  = document.querySelector('body')!;
            if(darkMode){
                body.style.backgroundColor = '#000C23'
                console.log(body.style.backgroundColor)
            }
            else{
                body.style.backgroundColor='white'
            }

            
        },[darkMode,open])
             return(
        
        <nav className='flex justify-between'>
            <div className="flex py-2 gap-x-4">
            {open?<IoMdClose className=" scale-150 mt-1" onClick={()=>setOpen(false)} />:<HiOutlineMenuAlt4 className="scale-150 mt-1" onClick={()=>setOpen(true)}/>}
                    <header className="font-bold">DEV-FRANQQI</header>
            </div>

            <div className="w-fit h-fit p-3 bg-gray-100 dark:bg-gray-500 rounded-full">

            {darkMode?<IoSunnyOutline className="scale-150 " onClick={()=>setDarkMode(false)} />:<IoMoonOutline className="scale-150" onClick={()=>setDarkMode(true)}/>}
            </div>
        
        </nav>
        
        
    )
}