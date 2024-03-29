import { useEffect, useState } from "react";
import { useAuth, useLogout, useRefreshToken } from "../hooks/index.js";
import { Outlet } from "react-router-dom";

export default function PersistLogin() {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAuth();
    const logout = useLogout();

    const verifyRefreshToken = async () => {
        setIsLoading(true);
        try {
            await refresh();
            // console.log(accToken, auth);
        }
        catch (err) {
            console.error(err);
        }
        setIsLoading(false);
    }

    // console.log(auth);

    useEffect(() => {
        // console.log("hi", !auth.accessToken);
        !auth?.accessToken
            ? persist
                ? verifyRefreshToken()
                : logout()
            : setIsLoading(false);
    }, [])
    // useEffect(() => {
    //     console.log("here", auth);
    // }, [isLoading])

    return !persist
        ? <Outlet />
        : isLoading
            ? <div>Loading</div>
            : <Outlet />
}

