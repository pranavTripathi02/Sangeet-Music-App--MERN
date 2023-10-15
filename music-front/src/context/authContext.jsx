import { createContext, useState } from "react"

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    // const localPersist = (localStorage.getItem('persist'));
    // console.log("localPersist:", localPersist);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };

