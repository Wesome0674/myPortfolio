import { useEffect, useState, createContext } from "react";

export const themecontext = createContext()


export function UserContextProvider(props) {

    const [theme, setTheme] = useState("dark")
    const [nav, setNav] = useState(false)
  

    useEffect(() => {
        if (theme === 'dark'){
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme ==='dark' ? 'light' : 'dark')
    }


    return (
        <themecontext.Provider value={{theme, handleThemeSwitch, nav, setNav}}>
            {props.children}
        </themecontext.Provider>
    )
}