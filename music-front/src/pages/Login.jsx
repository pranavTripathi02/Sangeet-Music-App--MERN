import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
// import { useGlobalContext } from '../context';
import useLocalState from '../utils/localState';
import { useAuth } from '../hooks';

export default function Login() {
    // const { user, saveUser, navigate } = useGlobalContext();
    const { auth, setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailInput = useRef();
    // const handleChange = (e) => {
    //     ({ ...values, [e.target.name]: e.target.value });
    // };
    const { alert, setLoading, loading, showAlert, hideAlert } = useLocalState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        hideAlert();
        setLoading(true);
        // const { email, password } = values;
        try {
            const { data } = await axios.post(
                '/auth/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            // setLoading(false);
            // console.log(data);
            setEmail('');
            setPassword('');
            // console.log(data);
            const user = data?.user;
            const accessToken = data?.accessToken;
            setAuth({ user, accessToken });
            showAlert({
                text: 'Welcome ${data.user.name}. Redirecting to dashboard...',
                type: 'success',
            });
            navigate(from, { replace: true });
        } catch (err) {
            console.log('err is: ', err);
            showAlert({ text: err.response?.data?.message });
        }
        finally {
            setLoading(false);
        }
    };
    // console.log('alert: ', alert);

    useEffect(() => {
        if (auth?.user)
            navigate('/');
        emailInput.current.focus();
    }, [])



    return (
        <>
            {alert.show && (
                <div
                    className={`alert w-1/2 text-center mx-auto my-auto 
                    alert-${alert.type}`}
                >
                    {alert.text}
                </div>
            )}
            <div className='shadow-md shadow-[var(--secondary)] my-5 mx-auto min-w-fit w-1/2 lg:w-1/3 border border-[var(--secondary)] rounded p-5'>
                <h3 className='text-center'>Login</h3>
                <form
                    className="flex flex-col items-center justify-between"
                    onSubmit={handleSubmit}
                >
                    <div className='mb-3 text-[var(--background)]'>
                        <input
                            ref={emailInput}
                            className='rounded-sm'
                            placeholder='Email'
                            type='Email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <div className='mb-3 text-[var(--background)]'>
                        <input
                            className='rounded-sm'
                            placeholder='Password'
                            type='Password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div className='text-center flex-col flex align-item-center'>
                        <button
                            className='w-fit mx-auto bg-[var(--primary)] hover:bg-[var(--accent)] px-3 py-2 rounded-lg'
                            type='submit'>
                            {loading ? 'Loading...' : 'Login'}
                        </button>
                        <div className='py-3'>
                            <p>
                                Not a member yet?
                                <Link to='/register' className='px-2 underline hover:text-[var(--text-accent)]'>
                                    Register now
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex justify-center'>
                <Link to="/" className='hover:text-[var(--text-accent)] underline underline-offset-4'>explore</Link>
            </div>
        </>
    );
}
