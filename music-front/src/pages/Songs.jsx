import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
// import { useGlobalContext } from '../context';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Card from '../components/Card';
import useMusic from '../hooks/useMusic';

export default function Songs() {
    // const [songUrl, setSongUrl] = useState('');
    const { songs } = useMusic();


    return (
        <>
            <div className=''>
                <h2>Songs</h2>
                <div className='flex flex-wrap h-full'>
                    {songs.map((song) => {
                        return (
                            <Card
                                info={song}
                                key={song._id} />
                        );
                    })}
                </div>
            </div>
            {/* {songUrl && ( */}
            {/*     <AudioPlayer */}
            {/*         autoPlay */}
            {/*         src={songUrl} */}
            {/*         onPlay={(e) => console.log('onPlay')} */}
            {/*         style={{ */}
            {/*             width: '80%', */}
            {/*             border: 'none', */}
            {/*             position: 'fixed', */}
            {/*             bottom: 0, */}
            {/*         }} */}
            {/*     /> */}
            {/* )} */}
        </>
    );
}
