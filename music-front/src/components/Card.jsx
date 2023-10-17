import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useComp, useMusic } from "../hooks";

export default function Card({ info }) {
    const { artist_img, title, artist } = info;
    // console.log(info);

    const { setMusicInfo } = useMusic();


    const addDefaultImg = (e) => {
        e.target.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F100pilabs.com%2Fimages%2Fdefault_music_player_icon_512.png&f=1&nofb=1&ipt=dc2e75b597b3482a472f91399b79cd439ecfec04268118f608ee6a85ca82ebf5&ipo=images'
    }
    // console.log(artist_img);
    return (
        <>
            <div
                className='h-[200px] w-[150px] hover:text-[var(--text-accent)] 
        cursor-pointer shadow-[var(--primary)] shadow hover:shadow-lg hover:shadow-[var(--primary)] m-5'
            >
                <div className='relative group text-white'>
                    <img
                        className='transistion ease-in-out rounded-xl group-hover:scale-110 group-hover:-translate-y-1 duration-200 h-[150px] w-[150px]'
                        src={artist_img}
                        onError={(e) => { addDefaultImg(e) }}
                        alt='artwork' />
                    <FontAwesomeIcon
                        className="right-2 bottom-2 scale-0
        group-hover:scale-100 absolute ease-out duration-200 
        hover:text-[var(--accent)]"
                        size='2xl'
                        icon={faPlay}
                        onClick={() => setMusicInfo(info)}
                    />
                </div>
                <div className='p-2'>
                    <p className='text-md line-clam-2'>{title}</p>
                    <h5 className='opacity-70 text-sm line-clam-1'>{artist}</h5>
                </div>
            </div>
        </>
    );
}
