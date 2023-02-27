import React from 'react';
import { FiBookOpen } from "react-icons/fi";
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to={'/addBook'}>
            <button className="bg-orange-100 py-3 px-5 mb-20 hover:bg-orange-200 rounded-lg flex items-center">
                <span className="text-gray-700 font-semibold mr-2">Add Book</span>
                <FiBookOpen size={20} color="#ED8914" />
            </button>
        </Link>
    );
}