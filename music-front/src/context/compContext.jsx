import { createContext, useEffect, useState } from "react";

const CompContext = createContext(null);

const CompProvider = ({ children }) => {


    const [sidebarOpen, setSidebarOpen] = useState(false);
    // const [isMusicLoaded, setIsMusicLoaded] = useState(false);
    // const [isPlayer, setIsPlayer] = useState(false);

    return <CompContext.Provider value={{
        sidebarOpen,
        setSidebarOpen,
        // isMusicLoaded,
        // setIsMusicLoaded,
        // isPlayer,
        // setIsPlayer
    }}>
        {children}
    </CompContext.Provider>
}

export { CompProvider, CompContext };
