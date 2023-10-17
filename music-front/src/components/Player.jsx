// import { Howl, Howler } from "howler";
import { useEffect, useState } from "react";
import { useAuth, useMusic } from "../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
// import useComp from "../hooks/useComp";

export default function Player() {
    const { musicInfo } = useMusic();
    const { auth } = useAuth();
    // useEffect(() => {
    // console.log(musicInfo);
    // console.log(musicInfo?.url);
    // }, [musicUrl])
    const [isPlaying, setIsPlaying] = useState(true);

    if (!auth?.user || !musicInfo?.song_url) return null;

    return <div className="w-screen bottom-0 fixed bg-[var(--background)]" >
        <div className="flex border-t-2 border-[var(--secondary)] justify-between 
    h-24 mx-5 items-center pt-4 relative">
            <div className="flex flex-col">
                <h5>{musicInfo.title}</h5>
                <h6>{musicInfo.artist}</h6>
            </div>
            <div className="flex space-x-5 self-baseline">
                <FontAwesomeIcon icon={faChevronLeft} size='2xl' className="" />
                <div onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying
                        ? <FontAwesomeIcon icon={faPause} size='2xl' className="" />
                        : <FontAwesomeIcon icon={faPlay} size='2xl' className="" />
                    }
                </div>
                <FontAwesomeIcon icon={faChevronRight} size='2xl' className="" />
            </div>
            <div>
                <FontAwesomeIcon icon={faVolumeHigh} size='lg' className="" />
            </div>

        </div>
    </div>

}
