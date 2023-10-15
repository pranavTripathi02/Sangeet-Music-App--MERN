import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    Home,
    Register,
    Login,
    Songs,
    AllUsers,
    MyAccount,
    AddSong,
    DeleteSong,
    Artists,
} from './pages';
import './App.css';
import ProtectedRoute from './utils/ProtectedRoute';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
    // const { isLoading } = useGlobalContext();
    // if (isLoading) {
    //     return (
    //         <section className='page page-center'>
    //             <div className='loading'></div>
    //         </section>
    //     );
    // }
    return (
        <>
            <aside>
                <Navbar />
            </aside>
            {/* <main className='justify-content-center col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'> */}
            <div className='container-fluid'>
                <main className='col-md-8 mx-auto col-lg-8 px-md-4 my-5 py-5'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                    <Routes>
                        <Route element={<ProtectedRoute allowedRoles={'Admin'} />}>
                            <Route
                                path='/dashboard'
                                element={
                                    <Dashboard />
                                }
                            />
                            <Route
                                path='/users/me'
                                element={
                                    <MyAccount />
                                }
                            />
                            <Route
                                path='/users/all'
                                element={
                                    <AllUsers />
                                }
                            />
                            <Route
                                path='/dashboard/songs'
                                element={
                                    <Songs />
                                }
                            />
                            <Route
                                path='/dashboard/songs/artists'
                                element={
                                    <Artists />
                                }
                            />
                            <Route
                                path='/dashboard/songs/addsong'
                                element={
                                    <AddSong />
                                }
                            />
                            <Route
                                path='/dashboard/songs/deletesong'
                                element={
                                    <DeleteSong />
                                }
                            />
                        </Route>
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
