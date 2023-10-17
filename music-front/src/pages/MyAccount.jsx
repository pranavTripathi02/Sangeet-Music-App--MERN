// import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../hooks';
// import styled from 'styled-components';
// import { useGlobalContext } from '../context';

export default function MyAccount() {
    // const { user } = useGlobalContext();
    // const [users, setUsers] = useState([]);
    const { auth } = useAuth();

    // const allUsers = async () => {
    //   const { data } = await axios.get('/api/v1/user/all');
    //   setUsers(data.users);
    // };

    // if (user.role === 'admin') {
    // useEffect(() => {
    //   allUsers();
    // }, [user.role]);
    // }

    return (
        <>
            <div>
                <div>
                    <h2>Your Account</h2>
                    <div className='py-2 my-3 flex flex-col justify-between'>
                        <p>
                            Name: <span>{auth.user.user_name}</span>
                        </p>
                        <p>
                            UserID: <span>{auth.user.user_id}</span>
                        </p>
                        <p>
                            Roles: <span> [
                                {auth.user.user_roles.map((item, idx) =>
                                    idx + 1 < auth.user.user_roles.length
                                        ? item + ', '
                                        : item)}
                                ] </span>
                        </p>
                    </div>
                </div>
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
