import React from 'react'
import { Button2 } from '../components/shared/Button2';
import { Form } from '../components/shared/Form';

function AddBook() {

    return (
        <div>
            <Button2 />
            <Form
                title={"Add New Book"}
                text={"Add Book"}
                currentBook={""}
            ></Form>
        </div>
    )
}

export default AddBook;