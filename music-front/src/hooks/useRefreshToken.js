import axios from '../api/axios.js'
import useAuth from './useAuth.js'

export default function useRefreshToken() {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const { data } = axios('/user/refresh', { withCredentials: true });
            console.log(data);
            setAuth((prev) => {
                return { ...prev, user: data.user, accessToken: data.accessToken };
            })
            return data.accessToken;
        }
        catch (err) {
            console.err(err);
        }
    }
    return refresh;
}
