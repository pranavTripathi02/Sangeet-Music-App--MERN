import React, { useState, useRef, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import useLocalState from '../utils/localState';

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {
        alert,
        showAlert,
        loading,
        setLoading,
        hideAlert,
        setSuccess,
    } = useLocalState();


    const nameInput = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        hideAlert();
        setLoading(true);
        // console.log('from env', process.env.REACT_APP_REGISTER);
        try {
            const { data } = await axios.post(
                '/auth/register',
                JSON.stringify({ name, email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            setSuccess(true);
            showAlert({ text: data.msg, type: 'success' });
            navigate('/');
        } catch (err) {
            const { message } = err.response.data;
            showAlert({ text: message || 'there was an error' });
        }
        setLoading(false);
    };

    useEffect(() => {
        nameInput.current.focus();
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
            <div className='shadow my-5 mx-auto min-w-fit w-1/2 lg:w-1/3 border border-[var(--secondary)] shadow-[var(--secondary)] shadow-md rounded p-5'>
                <h3 className='text-center'>Register</h3>
                <form
                    className="flex flex-col items-center justify-between"
                    onSubmit={handleSubmit}
                >
                    <div className='text-[var(--background)]'>
                        <div className='my-3 '>
                            <input
                                ref={nameInput}
                                className='rounded-sm py-1'
                                placeholder='Name'
                                type='text'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className='mb-3'>
                            <input
                                className='rounded-sm py-1'
                                placeholder='Email'
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className='mb-3'>
                            <input
                                className='rounded-sm py-1'
                                placeholder='Password'
                                type='password'
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                            />
                            {/* <div className='form-text'>Must be at least 8 character long</div> */}
                        </div>
                    </div>
                    <div className='text-center flex-col flex align-item-center'>
                        <button
                            className='w-fit mx-auto bg-[var(--primary)] px-3 py-2 rounded-lg'
                            type='submit'>
                            {loading ? 'Loading...' : 'Register'}
                        </button>
                        <div className='py-3'>
                            <p>
                                Already registered?
                                <Link to='/login' className='px-2 underline hover:text-[var(--text-accent)]'>
                                    Login
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
