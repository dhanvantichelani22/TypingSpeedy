import { createContext, useContext, useState } from "react";


const TestModeContext = createContext();

//give out state to children
export const TestModeContextProvider = ({ children }) => {

    const [testTime, setTestTime] = useState(15);
    
    // values object
    const values = {
        testTime,
        setTestTime
    }

    return (
        <TestModeContext.Provider value={values}>
            {children}
        </TestModeContext.Provider>
    )
}


// self made context- to not remove context out
export const useTestMode = () => useContext(TestModeContext);