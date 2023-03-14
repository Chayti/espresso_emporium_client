import React from 'react'
import { useLoaderData } from 'react-router';
import { Button2 } from '../components/shared/Button2';
import { Form } from '../components/shared/Form';

function UpdateCoffee() {

    const currentCoffee = useLoaderData()

    return (
        <div className="bg-image5">
            <div className="pt-10 container mx-auto">
                <Button2 />
                <Form
                    title={"Update Existing Coffee details"}
                    text={"Update Coffee details"}
                    currentCoffee={currentCoffee}
                ></Form>
            </div>
        </div>
    )
}

export default UpdateCoffee;