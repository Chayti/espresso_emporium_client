import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';
import { Title } from '../components/shared/Title';

const Main = () => {
    return (
        <div>
            <Title></Title>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;