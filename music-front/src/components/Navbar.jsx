import React from 'react';
// import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import LogoutBtn from './LogoutBtn'
import { useAuth } from '../hooks';
import useComp from '../hooks/useComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    // const { user } = useGlobalContext();
    const { auth } = useAuth();
    const { sidebarOpen, setSidebarOpen } = useComp();

    return (
        <>
            <nav
                className='flex border-b-2 border-[var(--secondary)] 
        justify-between items-center h-16 mx-5'
            >
                <div>
                    <button
                        className='hover:text-[var(--primary)]'
                        onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <FontAwesomeIcon
                            size='xl'
                            icon={faHeadphonesAlt}
                        />
                    </button>
                </div>
                {auth?.user
                    ? (
                        <div className='flex justify-between items-center'>
                            <Link
                                className='mx-5 hover:text-[var(--text-accent)] cursor-pointer'
                                to='/users/me'
                            >
                                {auth.user?.user_name}</Link>
                            <LogoutBtn />
                        </div>
                    )
                    : (
                        <LogoutBtn />
                    )}
            </nav >
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
