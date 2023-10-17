import React, { useEffect, useState } from 'react';
// import { useGlobalContext } from '../context';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Card from '../components/Card';
import useMusic from '../hooks/useMusic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

export default function Artists() {
    // const { user } = useGlobalContext();
    const [artistName, setArtistName] = useState('');
    const [artistSongs, setArtistSongs] = useState([]);
    // const [songUrl, setSongUrl] = useState('');

    const { songs, artists } = useMusic();
    // console.log(artists);
    //
    // const handlePlay = (song) => {
    //     // console.log(song);
    // }

    useEffect(() => {
        const newList = songs.filter((song) => song.artist === artistName)
        setArtistSongs(newList);
    }, [artistName])

    console.log('artistName', artistName);


    return <> {
        artistName?.length < 1
            ? < div >
                <h2>Artists</h2>
                <div className='flex space-x-5'>
                    {artists.map((artist, idx) => {
                        return (
                            <div
                                className='text-center cursor-pointer bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text duration-100 hover:text-transparent'
                                key={idx}
                                onClick={() => setArtistName(artist)}
                            >
                                <h5>
                                    {artist}
                                </h5>
                            </div>

                        );
                    })}
                </div>
            </div >
            : <div className='flex flex-col'>
                <div
                    className='my-5 sm:ms-0 ms-5 hover:text-[var(--text-accent)]'
                    onClick={() => setArtistName('')}
                >
                    <FontAwesomeIcon icon={faLongArrowLeft} />
                    <button className='mx-2'>
                        Go back
                    </button>
                </div>
                <div className='songs mb-5'>
                    <h2>Songs by {artistName}</h2>
                    <div className='flex space-x-5 h-full'>
                        {artistSongs.map((song) => {
                            return (
                                <div
                                    className=''
                                    key={song._id}
                                    onClick={() => handlePlay(song)}
                                >
                                    <Card info={song} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
    }
    </>
}
