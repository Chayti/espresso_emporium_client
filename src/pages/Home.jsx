import React from 'react';
import { AllCoffee } from '../components/AllCoffee';
import { Banner } from '../components/Banner';
import Gallery from '../components/Gallery';
import { Button } from '../components/shared/Button';
import './Home.css';

function Home() {
    return (
        <div>

            <Banner />

            <div className="bg-image3">
                <div className="container mx-auto">
                    <div className="text-center mt-20">
                        <p className="text-p">--- Sip & Savor ---</p>
                        <h1 className="text-h1">Our Popular Products</h1>
                    </div>

                    <Button />

                </div>

                <div className="bg-image4">
                    <div className="container mx-auto">
                        <AllCoffee />
                    </div>
                </div>

                <Gallery />
            </div>
        </div>
    )
}

export default Home;