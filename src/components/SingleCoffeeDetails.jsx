import React from 'react';
import { useLoaderData } from 'react-router';

function SingleCoffeeDetails() {

    const singleCoffee = useLoaderData()
    console.log(singleCoffee)

    const { image, name, chef, supplier, taste, category, details } = singleCoffee

    return (
        <div className="p-8 w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:flex items-center justify-between bg-[#eceae380] rounded-lg">

            <div className="w-1/4"></div>
            <div className="w-1/4">
                <img
                    src={image}
                    alt={name}
                    className="rounded-lg object-cover w-full h-full"
                />
            </div>

            <div className="w-1/4 p-8">
                <h2 className="text-gray-700 font-semibold mb-6 text-3xl">
                    Niceties
                </h2>
                <p className="text-p font-semibold mb-2">
                    Name: <span className="font-normal">{name}</span>
                </p>
                <p className="text-p font-semibold mb-2">
                    Chef: <span className="font-normal">{chef}</span>
                </p>
                <p className="text-p font-semibold mb-2">
                    Supplier: <span className="font-normal">{supplier}</span>
                </p>
                <p className="text-p font-semibold mb-2">
                    Taste: <span className="font-normal">{taste}</span>
                </p>
                <p className="text-p font-semibold mb-2">
                    Category: <span className="font-normal">{category}</span>
                </p>
                <p className="text-p font-semibold mb-2">
                    Details: <span className="font-normal">{details}</span>
                </p>
            </div>

            <div className="w-1/4"></div>
        </div>
    );
}

export default SingleCoffeeDetails;