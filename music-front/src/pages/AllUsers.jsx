import axios, { axiosPrivate } from '../api/axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks';
// import styled from 'styled-components';
// import { useGlobalContext } from '../context';

export default function AllUsers() {
    // const { user } = useGlobalContext();
    const { auth } = useAuth();
    const [users, setUsers] = useState([]);

    const allUsers = async () => {
        try {
            const { data } = await axiosPrivate.get('/user',
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${auth?.accessToken}`
                    },
                }
            );
            console.log(data);
            setUsers(data.users);
        }
        catch (err) {
            console.error("error occurred");
        }
    };

    // if (user.role === 'admin') {
    useEffect(() => {
        allUsers();
    }, []);
    // }

    return (
        <>
            <div>
                {auth.user?.user_roles?.includes('Admin') && (
                    <div>
                        <h3>All Users</h3>
                        {users.map((user) => {
                            return (
                                <div className='border py-2 my-3' key={user._id}>
                                    <p>
                                        Name: <span>{auth.user.user_name}</span>
                                    </p>
                                    <p>
                                        UserID: <span>{auth.user.user_id}</span>
                                    </p>
                                    <p>
                                        Email: <span>{auth.user.user_email}</span>
                                    </p>
                                    <p>
                                        Role: <span>{auth.user.user_role}</span>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

// const Wrapper = styled.div`
//   div {
//     // display: float;
//   }
//   p span {
//     margin-left: 0.25rem;
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
