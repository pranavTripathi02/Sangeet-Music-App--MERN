import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Song from '../components/Song';

export default function Artists() {
    // const { user } = useGlobalContext();
    const [songs, setSongs] = useState([]);
    const [artistName, setArtistName] = useState('');
    const [newSongs, setNewSongs] = useState([]);
    const [songUrl, setSongUrl] = useState('');
    useEffect(async () => {
        const { data } = await axios.get('/songs/artists');
        setSongs(data.songs);
        setNewSongs(songs.filter((song) => song.artist === artistName));
    }, [artistName, songUrl]);
    const artists = [...new Set(songs.map((song) => song.artist))];
    // console.log('artists', artists);
    if (artistName.length === 0) {
        return (
            <div className='songs'>
                <h3>Artists</h3>
                <div className='ms-3 list-group mb-5'>
                    {artists.map((song, index) => {
                        return (
                            <button
                                className='list-group-item list-group-item-action'
                                // style={{ width: '100%' }}
                                key={index}
                                onClick={() => {
                                    setArtistName(song);
                                }}
                            >
                                <p className='button-text text-capitalize fs-5'>{song}</p>
                                {/* <img src={song.artist_img} className='card-img-top' /> */}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        // console.log('newsongs', newSongs);
        console.log(songUrl);
        return (
            <>
                <div className='songs mb-5'>
                    <h3>Songs by {artistName}</h3>
                    <div>
                        {newSongs.map((song) => {
                            return (
                                <div
                                    className='d-inline-flex'
                                    key={song._id}
                                    onClick={() => setSongUrl(song.song_url)}
                                >
                                    <Song song={song} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* {songUrl && <Play url={songUrl} />} */}
                {songUrl && (
                    <AudioPlayer
                        autoPlay
                        src={songUrl}
                        onPlay={(e) => console.log('onPlay')}
                        style={{
                            width: '80%',
                            border: 'none',
                            position: 'fixed',
                            bottom: 0,
                        }}
                    />
                )}
            </>
        );
    }
    // } else return <Song artistName={artistName} />;
}
