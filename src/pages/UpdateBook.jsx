import React from 'react'
import { Button2 } from '../components/shared/Button2';
import { Form } from '../components/shared/Form';

function UpdateBook() {

    return (
        <div>
            <Button2 />
            <Form
                title={"Update Existing Book"}
                text={"Update Book"}
            ></Form>
        </div>
    )
}

export default UpdateBook;