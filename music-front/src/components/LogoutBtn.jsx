import { Link, useNavigate } from "react-router-dom";
import { useAuth, useLogout } from "../hooks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

export default function LogoutBtn() {
    const { auth } = useAuth();
    const logout = useLogout();
    const navigate = useNavigate();

    const signout = async () => {
        await logout();
        navigate('/');
    }

    return auth?.user ? (
        <button
            className='bg-[var(--primary)] hover:bg-[var(--accent)] rounded-md px-2 py-1'
            onClick={signout}
        >
            <FontAwesomeIcon
                icon={faRightFromBracket}
                className=""
                aria-label="sign-out"
            />
        </button>
    ) : (
        <Link
            className='bg-[var(--primary)] hover:bg-[var(--accent)] rounded-md px-2 py-1'
            to='/login'
        >
            <FontAwesomeIcon
                icon={faUser}
                className="me-2"
                aria-label="sign-in"
            />
            Sign In
        </Link>
    );

}
