import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    Register,
    Login,
    UiRouter
} from './pages';
import './App.css';
// import Navbar from './components/Navbar';
import PersistLogin from './utils/PersistLogin';
import Navbar from './components/Navbar';
import { CompProvider } from './context/compContext';
import Sidebar from './components/Sidebar';

function App() {
    console.log(".");
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
            <CompProvider>
                <Navbar />
                <Sidebar />
            </CompProvider>
            <Routes>
                <Route element={<PersistLogin />}>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/*' element={<UiRouter />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
