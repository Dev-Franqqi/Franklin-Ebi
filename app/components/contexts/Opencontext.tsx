'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
interface OpenProps{
    children:ReactNode
}
interface Opencontexttype{
    open :boolean;
    setOpen:Dispatch<SetStateAction<boolean>>
}

const defaultContext = {
    open:false,
    setOpen:(open:boolean)=>{}
} as Opencontexttype
export const Opencontext= createContext(defaultContext)

export function OpencontextProvider({children}:OpenProps){

    const [open ,setOpen] = useState(false)



return(

    <Opencontext.Provider value={{open,setOpen}}>
        {children}
    </Opencontext.Provider>

)

}