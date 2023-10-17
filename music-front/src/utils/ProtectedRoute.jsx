import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';

const RedirectComponent = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => currentCount - 1);
        }, 1000);
        //console.log('red in', count);
        count === 0 &&
            navigate('/login', { state: { from: location }, replace: true });
        return () => clearInterval(interval);
    }, [count, navigate, location]);
    return (
        <div className='text-center my-10'>
            <h3>You need to be logged in to see this page</h3>
            <h5 className='text-[var(--accent)] my-2'>
                You will be redirected to the login page in {count} seconds...
            </h5>
        </div>
    );
};

const ProtectedRoute = ({ allowedRoles }) => {
    const { auth } = useAuth();
    // const handleClick = () => {
    //   return <Navigate to='/login' state={{ from: location }} replace />;
    // };
    // console.log(auth?.user);
    // console.log(auth?.user?.user_roles?.find((role) => allowedRoles.includes(role)), allowedRoles);

    return auth?.user?.user_roles?.find((role) => allowedRoles?.includes(role)
    ) ? (
        <Outlet />
    ) : (
        <RedirectComponent />
    );
};

export default ProtectedRoute;

