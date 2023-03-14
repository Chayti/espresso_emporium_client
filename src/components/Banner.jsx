import React from 'react';
import './Banner.css';
import img_1 from '../assets/xtra/1.png';
import img_2 from '../assets/xtra/2.png';
import img_3 from '../assets/xtra/3.png';
import img_4 from '../assets/xtra/4.png';

export function Banner() {

    return (
        <div className="container-lg">
            <div className="section-1">
                <div className="md:px-5 md:mx-5 md:w-1/2">
                    <h1 className="mx-5 special">Would you like a Cup of Delicious Coffee?</h1>
                    <h2 className="mt-4 mx-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</h2>
                    <br /><br />
                    <a href="#learnMore"><button className="mx-5 px-5 btn home-banner-btn">Learn More</button></a>
                </div>
            </div>

            <div className="section-2 box p-5">
                <div className="py-3 container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="">
                            <div className="d-flex justify-content-start">
                                <img src={img_1} alt="" />
                            </div>
                            <h2 className="mt-4">Awesome Aroma</h2>
                            <p>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-start">
                                <img src={img_2} alt="" />
                            </div>
                            <h2 className="mt-4">High Quality</h2>
                            <p>We served the coffee to you maintaining the best quality</p>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-start">
                                <img src={img_3} alt="" />
                            </div>
                            <h2 className="mt-4">Pure Grades</h2>
                            <p>The coffee is made of the green coffee beans which you will love</p>
                        </div>
                        <div className="">
                            <div className="d-flex justify-content-start">
                                <img src={img_4} alt="" />
                            </div>
                            <h2 className="mt-4">Proper Roasting</h2>
                            <p>Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}