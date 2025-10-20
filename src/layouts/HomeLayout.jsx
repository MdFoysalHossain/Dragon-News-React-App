import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <Latest></Latest>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="">
                    <div className="left-area"></div>
                    <div className="center-area">
                        <Outlet></Outlet>
                    </div>
                    <div className="right-area"></div>
                </div>
            </main>
        </div>
    );
};

export default HomeLayout;