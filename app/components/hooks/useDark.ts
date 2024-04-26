'use client'
import { useContext } from "react"
import { Darkcontext } from "../contexts/Darkcontext"


export default function useDark (){
    const context = useContext(Darkcontext)
    if(!context)
        {
            throw new Error("useDark must be used within an DarkcontextProvider")
        }
   return context ;
}