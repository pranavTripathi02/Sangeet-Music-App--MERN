import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Register,
  Login,
  Songs,
  ProtectedRoute,
  AllUsers,
  MyAccount,
  AddSong,
  DeleteSong,
  Artists,
} from './pages';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { useGlobalContext } from './context';

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section className='page page-center'>
        <div className='loading'></div>
      </section>
    );
  }
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
            <Route
              path='/dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path='/users/me'
              element={
                <ProtectedRoute>
                  <MyAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path='/users/all'
              element={
                <ProtectedRoute>
                  <AllUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path='/dashboard/songs'
              element={
                <ProtectedRoute>
                  <Songs />
                </ProtectedRoute>
              }
            />
            <Route
              path='/dashboard/songs/artists'
              element={
                <ProtectedRoute>
                  <Artists />
                </ProtectedRoute>
              }
            />
            <Route
              path='/dashboard/songs/addsong'
              element={
                <ProtectedRoute>
                  <AddSong />
                </ProtectedRoute>
              }
            />
            <Route
              path='/dashboard/songs/deletesong'
              element={
                <ProtectedRoute>
                  <DeleteSong />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
