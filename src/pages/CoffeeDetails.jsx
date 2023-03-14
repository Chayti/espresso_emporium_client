import React from 'react'
import { Button2 } from '../components/shared/Button2';
import SingleCoffeeDetails from '../components/SingleCoffeeDetails';

function CoffeeDetails() {

    return (
        <div className="bg-image5">
            <div className="pt-10 container mx-auto">
                <Button2 />
                <SingleCoffeeDetails />
            </div>
        </div>
    )
}

export default CoffeeDetails;