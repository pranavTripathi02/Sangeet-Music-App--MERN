import { createContext, useState, useEffect } from "react";
import axios from '../api/axios'

const MusicContext = createContext(null);

const MusicProvider = ({ children }) => {
    const [musicIsLoading, setMusicIsLoading] = useState(true);
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    const [musicInfo, setMusicInfo] = useState(null);

    const fetchSongs = async () => {
        setMusicIsLoading(true);
        try {
            const { data } = await axios.get('/songs/', { withCredentials: true });
            setSongs(data.songs);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            setMusicIsLoading(false);
        }
    }

    const fetchArtists = async () => {
        setMusicIsLoading(true);
        try {
            const { data } = await axios.get('/songs/artists', { withCredentials: true });
            // console.log(data);
            const songs = data.songs
            const artists = [...new Set(songs.map((song) => song.artist))];
            setArtists(artists);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            setMusicIsLoading(false);
        }
    }

    useEffect(() => {
        fetchSongs();
        fetchArtists();
    }, [])

    return (
        <MusicContext.Provider value={{
            songs,
            artists,
            musicIsLoading,
            musicInfo,
            setMusicInfo
        }}>
            {children}
        </MusicContext.Provider>
    )
}

export { MusicContext, MusicProvider }
