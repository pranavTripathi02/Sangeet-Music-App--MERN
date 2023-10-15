import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export default function Home() {
    const { auth } = useAuth();
    console.log(auth);
    return (
        <>
            {auth?.user && <Navigate to='/dashboard' />}
            <div className='container text-center justify-contents-center text-decoration-none'>
                <h2>Welcome to Sangeet</h2>
                <div className='m-auto p-auto '>
                    <Link to='/login' className='me-3 btn btn-lg btn-primary'>
                        Login
                    </Link>
                    <Link to='/register' className='me-3 btn btn-lg btn-primary'>
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
}
