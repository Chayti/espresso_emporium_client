import React from 'react';
import { MdDelete, MdEdit, MdVisibility } from "react-icons/md";
import { Link } from 'react-router-dom';

function Book({ book, refetch, setRefetch }) {

    const { _id, image, title, author, price } = book

    const handleDelete = (id) => {
        const ans = window.confirm('Do you want to delete it?')
        if (ans) {
            fetch(`http://localhost:5000/book/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        alert('Deleted')
                        setRefetch(!refetch)
                    }
                });
        }
    }

    return (
        <div className="p-6 flex items-center justify-between bg-orange-100 rounded-lg">

            <div className="w-1/4">
                <img
                    src={image}
                    alt="book"
                    className="rounded-lg object-cover w-full h-full"
                />
            </div>

            <div className="w-1/2 p-4">
                <p className="text-gray-700 font-semibold mb-2">
                    Name: <span className="font-normal">{title}</span>
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                    Author: <span className="font-normal">{author}</span>
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                    Price: <span className="font-normal">{price} Taka</span>
                </p>
            </div>

            <div className="p-4">
                <div className="flex items-center justify-center bg-[#FFBD02] p-2 mb-4 rounded-lg">
                    <Link to={`/singleBook/${_id}`}>
                        <MdVisibility size={24} color="white" />
                    </Link>
                </div>
                <div className="bg-[#016EFF] p-2 rounded-lg mb-4">
                    <Link to={`/updateBook/${_id}`}>
                        <MdEdit size={24} color="white" />
                    </Link>
                </div>
                <div className="bg-[#EA4744] p-2 rounded-lg">
                    <button onClick={() => handleDelete(_id)}>
                        <MdDelete size={24} color="white" />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Book;