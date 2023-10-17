import { useContext } from "react";
import { MusicContext } from "../context/musicContext";

const useMusic = () => useContext(MusicContext);

export default useMusic;
