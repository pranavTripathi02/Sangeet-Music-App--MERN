import React from 'react';
// import { Link } from 'react-router-dom';
import { useAuth } from '../hooks';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { useGlobalContext } from '../context';

function Dashboard() {
    // const { user } = useGlobalContext();
    // console.log('from dashboard global user: ', user);
    const { auth } = useAuth();
    // console.log(auth);
    // const { user_name, user_id, user_roles } = auth?.user;

    return (
        <>
            <div className=''>
                <div className='text-[var(--text)]'>
                    <h1> hello there {auth?.user && <span className='text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text'>{auth.user.user_name}</span>}</h1>
                </div>
                <div className='my-5'>
                    <h3>Welcome to <span className='text-[var(--text-accent)]' >Sangeet</span></h3>
                    {!auth?.user && <h5>
                        <Link className='underline mx-1 text-[var(--accent)]'
                            to='/login'  >Login</Link> or
                        <Link className='underline mx-1 text-[var(--accent)]'
                            to='/register'  >Register</Link>
                        to unlock more features</h5>
                    }
                </div>
                <div className='mt-10'>
                    <h4>Use these links to navigate the application</h4>
                    <div className='flex flex-col space-y-2'>
                        <Link
                            className='underline underline-offset-2 hover:text-[var(--text-accent)]'
                            to='/songs'
                        >
                            <h4>Songs</h4>
                        </Link>
                        <Link
                            className='underline underline-offset-2 hover:text-[var(--text-accent)]'
                            to='/artists'
                        >
                            <h4>Artists</h4>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    );
}

// const Button = style.

// const Wrapper = styled.div`
//   p span {
//     text-transform: capitalize;
//     background: #645cff;
//     padding: 0.15rem 0.25rem;
//     color: #fff;
//     border-radius: 0.25rem;
//     letter-spacing: 1px;
//   }
//   span {
//     color: blue;
//   }
//   Link {
//     border: 1rem solid #000;
//   }
// `;
//
// const Sidebar = styled.div`
//   aside {
//     height: 100%;
//     width: 5rem;
//     background: #333;
//     margin: 0.5rem;
//     letter-spacing: 0.1rem;
//     padding: 0.3rem;
//   }
// `;

export default Dashboard;
