import React from 'react';
import { Outlet } from 'react-router';
import { Title } from '../components/shared/Title';

const Main = () => {
    return (
        <div className="container mx-auto">
            <Title></Title>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;