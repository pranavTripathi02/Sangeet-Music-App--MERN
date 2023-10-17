import axios from '../api/axios.js'
import useAuth from './useAuth.js'

export default function useRefreshToken() {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const { data } = await axios('/user/refresh', { withCredentials: true });
            // console.log(data);
            setAuth((prev) => {
                return { ...prev, user: data.user, accessToken: data.accessToken };
            })
            // return data?.accessToken;
        }
        catch (err) {
            console.error("Cannot validate using refresh token");
        }
    }
    return refresh;
}
