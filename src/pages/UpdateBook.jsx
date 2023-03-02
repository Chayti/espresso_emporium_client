import React from 'react'
import { useLoaderData } from 'react-router';
import { Button2 } from '../components/shared/Button2';
import { Form } from '../components/shared/Form';

function UpdateBook() {

    const currentBook = useLoaderData()

    return (
        <div>
            <Button2 />
            <Form
                title={"Update Existing Book"}
                text={"Update Book"}
                currentBook={currentBook}
            ></Form>
        </div>
    )
}

export default UpdateBook;