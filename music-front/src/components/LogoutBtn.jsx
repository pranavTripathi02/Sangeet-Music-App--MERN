import { useLogout } from "../hooks"

export default function LogoutBtn() {
    const logout = useLogout();
    return <button onClick={() => logout()}>logout</button>
}
