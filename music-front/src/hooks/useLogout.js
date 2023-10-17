import axios from '../api/axios'
import useAuth from "./useAuth";

export default function useLogout() {
    const { setAuth } = useAuth();
    const logout = async () => {
        console.log("in useLogout");
        try {
            await axios('/auth/logout', { withCredentials: true });
            setAuth(null);
        }
        catch (err) {
            console.error(err);
        }
    }
    return logout;
}
