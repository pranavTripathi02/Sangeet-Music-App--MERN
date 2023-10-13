import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { useGlobalContext } from '../context';

function Dashboard() {
    const { user } = useGlobalContext();
    const { name, userID, role } = user;
    // console.log('from dashboard global user: ', user);

    return (
        <>
            <div role='main'>
                <div className='text-color-success text-capitalize'>
                    <h2>
                        hello there <span>{name}</span>
                    </h2>
                    <p>
                        Your ID: <span>{userID}</span>
                    </p>
                    <p>
                        Your role: <span>{role}</span>
                    </p>
                </div>
                <div className='p-5'>
                    {/* <p>Links to :</p> */}
                    <div className='px-5 text-capitalize link text-decoration-none'>
                        {/* )} */}
                    </div>
                </div>
            </div>
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
