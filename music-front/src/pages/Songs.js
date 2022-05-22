import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import Song from '../components/Song';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Songs() {
  const { user } = useGlobalContext();
  const [songs, setSongs] = useState([]);
  const [songUrl, setSongUrl] = useState('');
  useEffect(async () => {
    const { data } = await axios.get('/api/v1/songs/');
    setSongs(data.songs);
  }, [songUrl]);
  return (
    <>
      <div className='songs mb-5'>
        <h3>Songs:</h3>
        <div>
          {songs.map((song) => {
            return (
              <div
                className='d-inline-flex'
                key={song._id}
                onClick={() => setSongUrl(song.song_url)}
              >
                <Song song={song} key={song._id} />
              </div>
            );
          })}
        </div>
      </div>
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
