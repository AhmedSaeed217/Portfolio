import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext=createContext();
export const useTheme=()=>useContext(ThemeContext);

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState(
        ()=> localStorage.getItem('theme') || 'dark'
        
    );

    useEffect(()=>{
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme)
        
    },[theme]);


   const toggleTheme =()=>{
       if(theme==='light'){
        setTheme('dark')
    }else{
           setTheme('light')

       }
    }


    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
