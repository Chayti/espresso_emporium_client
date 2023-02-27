import React from 'react';
import { useLoaderData } from 'react-router';

function SingleBookDetails() {

    const singleBook = useLoaderData()
    console.log(singleBook)

    const { image, title, author, publisher, language, category, subject } = singleBook

    return (
        <div className="p-8 mx-auto w-3/4 mb-20 md:flex items-center justify-between bg-orange-100 rounded-lg">

            <div className="w-1/3">
                <img
                    src={image}
                    alt={title}
                    className="rounded-lg object-cover w-full h-full"
                />
            </div>

            <div className="w-2/3 p-8">
                <h2 className="text-gray-700 font-semibold mb-6 text-2xl">
                    Specification
                </h2>
                <p className="text-gray-700 font-semibold mb-2">
                    Title: <span className="font-normal">{title}</span>
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                    Author: <span className="font-normal">{author}</span>
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                    Publisher: <span className="font-normal">{publisher}</span>
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                    Language: <span className="font-normal">{language}</span>
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                    Category: <span className="font-normal">{category}</span>
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                    Subject: <span className="font-normal">{subject}</span>
                </p>
            </div>

        </div>
    );
}

export default SingleBookDetails;