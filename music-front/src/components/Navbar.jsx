import React from 'react';
// import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import LogoutBtn from './LogoutBtn'
import { useAuth } from '../hooks';

export default function Navbar() {
    // const { user } = useGlobalContext();
    const { auth } = useAuth();

    return (
        <>
            <nav
                className='flex border-b-2 border-[var(--secondary)] 
        justify-between items-center h-16'
            >
                <Link to='/' className='border-2'>
                    <img
                        className='logo'
                        src=""
                        alt='logo'
                    />
                </Link>
                {auth && (
                    <div className='flex justify-between'>
                        <span className=''>{auth.user?.user_name}</span>
                        <LogoutBtn />
                    </div>
                )}
            </nav>
            {auth && (
                <div className='row'>
                    <nav className='col-md-2 col-lg-2 d-none d-md-block bg-dark sidebar'>
                        <div className='sidebar-sticky'>
                            <ul className='nav flex-column'>
                                <li className='nav-item'>
                                    <Link to='/dashboard/songs' className='nav-link'>
                                        <span>Songs</span>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/dashboard/songs/artists' className='nav-link'>
                                        <span>Artists</span>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/users/me' className='nav-link'>
                                        <span>My account</span>
                                    </Link>
                                </li>
                                {auth?.user?.user_roles === 'admin' && (
                                    <>
                                        <li className='nav-item'>
                                            <Link to='/users/all' className='nav-link'>
                                                <span className='text-danger'>All Users</span>
                                            </Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link to='/dashboard/songs/addsong/' className='nav-link'>
                                                <span className='text-danger'>Add Song</span>
                                            </Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link
                                                to='/dashboard/songs/deletesong/'
                                                className='nav-link'
                                            >
                                                <span className='text-danger'>Delete Song</span>
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}

// const Wrapper = styled.nav`
//   background: #fff;
//   height: 6rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   .nav-center {
//     width: 90vw;
//     max-width: 1120px;
//   }
//   .nav-links {
//     display: flex;
//     flex-direction: column;
//   }
//   .nav-links p {
//     margin: 0;
//     text-transform: capitalize;
//     margin-bottom: 0.25rem;
//   }
//   .home-link {
//     display: flex;
//     align-items: flex-end;
//   }
//   @media (min-width: 776px) {
//     .nav-links {
//       flex-direction: row;
//       align-items: center;
//     }
//     .nav-links p {
//       margin: 0;
//       margin-right: 1.5rem;
//     }
//   } ;
// `;
