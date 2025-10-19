import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
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