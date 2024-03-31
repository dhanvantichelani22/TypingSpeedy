import {createContext, useState} from "react";
import {themeOptions} from "../Utils(Utilities)/themeOptions";
import { useContext } from "react";

const ThemeContext = createContext();
export const ThemeContextProvider = ({children})=>{

    const defaultValue = JSON.parse(localStorage.getItem('theme')) || themeOptions[0].value; //themeOptions[0].value- dark theme as default
    const [theme,setTheme] = useState(defaultValue);

    const values = {
        theme,
        setTheme

    }

    return(<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>)
}

export const useTheme = ()=> useContext(ThemeContext);
