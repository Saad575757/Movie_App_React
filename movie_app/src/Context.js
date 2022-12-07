import React, { useContext } from "react";

const AppContext = React.createContext(); //context
//Provider
const AppProvider = ({ children }) => {
    return <AppContext.Provider value="Saad">{children}</AppContext.Provider>
}

const useGlobalcontext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalcontext };