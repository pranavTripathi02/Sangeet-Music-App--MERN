import React, { useState } from 'react';
import FormRow from '../components/FormRow';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from '../api/axios';
import { useGlobalContext } from '../context';
import useLocalState from '../utils/localState';

export default function Login() {
    const { user, saveUser, navigate } = useGlobalContext();
    // const navigate = useNavigate();
    const [values, setValues] = useState({ email: '', password: '' });
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const { alert, setLoading, loading, showAlert, hideAlert } = useLocalState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        hideAlert();
        setLoading(true);
        const { email, password } = values;
        const user = { email, password };
        try {
            const { data } = await axios.post('/auth/login', user);
            // setLoading(false);
            console.log(data);
            setValues({ email: '', password: '' });
            showAlert({
                text: 'Welcome ${data.user.name}. Redirecting to dashboard...',
                type: 'success',
            });
            setLoading(false);
            saveUser(data.user);
            // navigate('/dashboard');
        } catch (err) {
            console.log('err is: ', err);
            showAlert({ text: err.response.data.message });
            setLoading(false);
        }
    };
    console.log('alert: ', alert);
    return (
        <>
            {alert.show && (
                <div className={`alert alert-${alert.type}`}>{alert.text}</div>
            )}
            {user && <Navigate to='/dashboard' />}
            <div className='container-sm shadow my-5 border rounded p-5'>
                <h3 className='text-center'>Login</h3>
                <form
                    className={loading ? 'form form-loading' : 'form'}
                    onSubmit={handleSubmit}
                >
                    <div className='mb-3'>
                        <FormRow
                            name='email'
                            type='email'
                            handleChange={handleChange}
                            value={values.email}
                        />
                    </div>
                    <div className='mb-3'>
                        <FormRow
                            name='password'
                            type='password'
                            handleChange={handleChange}
                            value={values.password}
                        />
                    </div>
                    <div className='text-center justify-contents-center'>
                        <button className='btn btn-lg btn-success' type='submit'>
                            {loading ? 'Loading...' : 'Login'}
                        </button>
                        <div className='p-3 text-decoration-none d-inline'>
                            Not a member yet?
                            <Link to='/register' className='px-2 text-decoration-none'>
                                Register now
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
