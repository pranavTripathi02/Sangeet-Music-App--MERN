import useAuth from "./useAuth";

export default function useLogout() {
    const { setAuth } = useAuth();
    const logout = async () => {
        try {
            await axios('/auth/logout', { withCredentials: true });
            setAuth({});
        }
        catch (err) {
            console.error(err);
        }
    }
    return logout;
}
