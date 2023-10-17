import axios from '../api/axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useLocalState from '../utils/localState';

export default function AddSong() {
    const [values, setValues] = useState({
        title: '',
        artist: '',
        song_url: '',
        artist_img: '',
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
        const { title, artist, song_url, artist_img } = values;
        const song = { title, artist, song_url, artist_img };
        setValues({
            title: '',
            artist: '',
            song_url: '',
            artist_img: '',
        });
        console.log('song:', song);
        try {
            const { data } = await axios.post('/songs/', song, { withCredentials: true });
            showAlert({ text: `Song ${song.title} added`, type: 'success' });
            console.log(data);
        } catch (err) {
            showAlert({
                text: err.response.data.message || `Please try again`,
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
                <h3 className='text-center'>Add Song</h3>
                <p className='justify-content-center d-flex'>
                    Enter Details of the Song you wish to add
                </p>
                <form action='' className='form' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <input
                            name='title'
                            type='title'
                            onChange={handleChange}
                            value={values.title}
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            name='artist'
                            type='artist'
                            onChange={handleChange}
                            value={values.artist}
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            name='song_url'
                            type='song_url'
                            onChange={handleChange}
                            value={values.song_url}
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            name='artist_img'
                            type='artist_img'
                            onChange={handleChange}
                            value={values.artist_img}
                        />
                    </div>
                    <div className='text-end'>
                        <button className='btn btn-lg btn-success' type='submit'>
                            Add Song
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
