import React, { useEffect, useState, useContext } from 'react';
import axios from './api/axios';
// import url from './utils/url';
// import { useNavigate } from 'react-router-dom';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    // const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    // const [user, setUser] = useState(null);
    // const saveUser = (user) => {
    //     setUser(user);
    // };
    // const removeUser = () => {
    //     setUser(null);
    // };
    // const fetchUser = async () => {
    //     try {
    //         const cyz = await axios.get(`/user/me`);
    //         console.log('LAKJFLKDAJLKFJSDFJSDLKFJ', axios.get(`/api/v1/user/me`));
    //         // console.log('LAKJFLKDAJLKFJSDFJSDLKFJ', typeof cyz());
    //         const { data } = cyz;
    //         console.log('user from fetchUser:', data.user);
    //         saveUser(data.user);
    //     } catch (err) {
    //         removeUser();
    //         console.log('error from fetchUser: ', err);
    //     }
    //     setIsLoading(false);
    // };
    // const logoutUser = async () => {
    //     try {
    //         // const url = process.env.REACT_APP_LOGOUT;
    //         // console.log('From logoutUser: ', url);
    //         await axios.delete('/auth/logout');
    //         removeUser();
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     // navigate('/');
    // };
    // useEffect(() => {
    //     fetchUser();
    // }, []);
    // console.log('User from context: ', user);

    return (
        <AppContext.Provider
            value={{
                isLoading,
                setIsLoading,
                // user,
                // setUser,
                // saveUser,
                // removeUser,
                // fetchUser,
                // logoutUser,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
