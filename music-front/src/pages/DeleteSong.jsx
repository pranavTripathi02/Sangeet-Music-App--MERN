import axios from '../api/axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import FormRow from '../components/FormRow';
import useLocalState from '../utils/localState';

export default function DeleteSong() {
    const [values, setValues] = useState({
        title: '',
        artist: '',
    });
    const { alert, setLoading, loading, showAlert, hideAlert } = useLocalState();
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        // console.log(values);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        hideAlert();
        setLoading(true);
        const { title, artist } = values;
        const song = { title, artist };
        setValues({
            title: '',
            artist: '',
        });
        // console.log('song:', song);
        try {
            const { data } = await axios.delete(`/songs/`, { data: { song } });
            showAlert({
                text: `Song ${song.title} deleted.`,
                type: 'danger',
            });
            console.log(data);
        } catch (err) {
            showAlert({
                text: err.response.data.message || `Song ${song.title} found.`,
                type: 'danger',
            });
            console.log(err);
        }
        setLoading(false);
    };
    return (
        <>
            {alert.show && (
                <div className={`alert alert-${alert.type}`}>{alert.text}</div>
            )}
            <div className='shadow border mx-auto rounded p-5 col-lg-8 col-md-10 col-sm-8'>
                <h3 className='text-center'>Delete Song</h3>
                <p className='justify-content-center d-flex'>
                    Enter Details of the Song you wish to Delete
                </p>
                <form action='' className='form' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <FormRow
                            name='title'
                            type='title'
                            handleChange={handleChange}
                            value={values.title}
                        />
                    </div>
                    <div className='mb-3'>
                        <FormRow
                            name='artist'
                            type='artist'
                            handleChange={handleChange}
                            value={values.artist}
                        />
                    </div>
                    <div className='text-end'>
                        <button className='btn btn-lg btn-danger' type='submit'>
                            Delete Song
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
