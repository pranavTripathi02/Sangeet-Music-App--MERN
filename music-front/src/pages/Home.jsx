import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

export default function Home() {
  const { user } = useGlobalContext();
  return (
    <>
      {user && <Navigate to='/dashboard' />}
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
