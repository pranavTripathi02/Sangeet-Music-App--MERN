import {
    Dashboard,
    Songs,
    AllUsers,
    MyAccount,
    AddSong,
    DeleteSong,
    Artists,
} from './index';

import ProtectedRoute from '../utils/ProtectedRoute';
import { Route, Routes } from 'react-router-dom';
import { MusicProvider } from '../context/musicContext';
import Player from '../components/Player';

export default function UiRouter() {
    return (
        <MusicProvider>
            <main className='sm:max-w-xl lg:max-w-3xl mx-auto w-lg flex items-center'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Dashboard />
                        }
                    />
                    <Route
                        path='/songs'
                        element={
                            <Songs />
                        }
                    />
                    <Route
                        path='/artists'
                        element={
                            <Artists />
                        }
                    />
                    <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
                        <Route
                            path='/users/me'
                            element={
                                <MyAccount />
                            }
                        />
                        <Route
                            path='/songs/addsong'
                            element={
                                <AddSong />
                            }
                        />
                    </Route>
                    <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                        <Route
                            path='/users/all'
                            element={
                                <AllUsers />
                            }
                        />
                        <Route
                            path='/songs/deletesong'
                            element={
                                <DeleteSong />
                            }
                        />
                    </Route>
                </Routes>
            </main >
            <Player />
        </MusicProvider>
    );
}
