'use client'
import { useContext } from "react";
import { Opencontext } from "../contexts/Opencontext";


export default function useOpen (){
    const context = useContext(Opencontext)
    if(!context)
        {
            throw new Error("useOpen must be used within an OpencontextProvider")
        }
   return context ;
}