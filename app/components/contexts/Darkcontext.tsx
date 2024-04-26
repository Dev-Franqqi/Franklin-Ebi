'use client'
import { ReactNode } from "react"
import { Dispatch,useState ,createContext} from "react"
interface Darkcontextype {
    darkMode:boolean,
    setDarkMode:Dispatch<React.SetStateAction<boolean>>
}
type Props = {
    children:ReactNode
}
const defaultContext = {
    darkMode:false,
    setDarkMode:()=>{}
} 

export const Darkcontext = createContext<Darkcontextype>(defaultContext);


export function DarkcontextProvider({children}:Props){

    const [darkMode,setDarkMode] = useState(false)
    return(
        <Darkcontext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </Darkcontext.Provider>
    )

}