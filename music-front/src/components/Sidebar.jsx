import { Link } from "react-router-dom";
import { useAuth } from "../hooks";
import useComp from "../hooks/useComp";

export default function Sidebar() {
    const { auth } = useAuth();
    const { sidebarOpen } = useComp();


    return (
        // <nav className='h-screen float float-left p-5 w-[200px] border-r border-[var(--secondary)]'>
        <nav className={`
                    ${sidebarOpen ? 'translate-x-0' : 'translate-x-[-20rem]'}
                fixed transition ease-linear duration-200 w-44 h-full
            bg-[var(--background)] border-r border-[var(--secondary)] text-center capitalize z-50 flex flex-col justify-between`}>
            <div className='h-full'>
                <ul className='flex flex-col justify-between'>
                    <div className='flex flex-col justify-evenly my-4'>
                        {/* <div className='hover:bg-stone-700 ease-in-out duration-200 py-2'> */}
                        <Link
                            className='hover:bg-[var(--accent)] ease-in-out duration-200 py-2'
                            to='/'
                        >
                            dashboard
                        </Link>
                        <Link
                            className='hover:bg-[var(--accent)] ease-in-out duration-200 py-2'
                            to='/songs'
                        >
                            songs
                        </Link>
                        {/* </div> */}
                        {/* <div className='hover:bg-stone-700 ease-in-out duration-200 py-2'> */}
                        <Link
                            className='hover:bg-[var(--accent)] ease-in-out duration-200 py-2'
                            to='/artists'
                        >
                            artists
                        </Link>
                        {/* </div>
                                                                                                                            iv className='hover:bg-stone-700 ease-in-out duration-200 py-2'> */}
                        {/* </div> */}
                    </div>
                    <div className='width-100 border-[var(--secondary)] border-t-[1px] mx-2' />

                    {auth?.user?.user_roles.includes('admin') && (
                        <div className='flex flex-col my-4 justify-evenly'>
                            <Link
                                className='hover:bg-[var(--accent)] ease-in-out duration-200 py-2'
                                to='/users/all'
                            >
                                all users
                            </Link>
                            <Link
                                className='hover:bg-[var(--accent)] ease-in-out duration-200 py-2'
                                to='/songs/addsong'
                            >
                                add new song
                            </Link>
                        </div>
                    )}
                </ul>
            </div>
        </nav >
    )
}
