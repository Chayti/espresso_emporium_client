import React from 'react';
import notFound from '../assets/404/404.gif';
import { Button2 } from '../components/shared/Button2';

const NotFound = () => {

    return (
        <div className="mx-auto w-11/12 h-screen">


            <div className="flex justify-center mt-5">
                <Button2 />
            </div>

            <div className="flex justify-center">
                <img src={notFound} alt="404" />
            </div>

        </div>
    )
}

export default NotFound;
