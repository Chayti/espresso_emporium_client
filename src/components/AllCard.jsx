import React, { useEffect, useState } from 'react';
import Card from './Card';

export function AllCard() {

    const [refetch, setRefetch] = useState(false)
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [refetch])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {
                books.map((book) => <Card
                    key={book._id}
                    book={book}
                    refetch={refetch}
                    setRefetch={setRefetch}

                ></Card>)
            }
        </div>
    );
}