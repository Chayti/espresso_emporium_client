import React from 'react'
import { Button2 } from '../components/shared/Button2';
import { Form } from '../components/shared/Form';

function AddCoffee() {

    return (
        <div className="bg-image5">
            <div className="pt-10 container mx-auto">
                <Button2 />
                <Form
                    title={"Add New Coffee"}
                    text={"Add Coffee"}
                    currentCoffee={""}
                ></Form>
            </div>
        </div>
    )
}

export default AddCoffee;