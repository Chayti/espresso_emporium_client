import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';

export function Button2() {
    return (
        <Link to={`/`}>
            <button className="mb-10 py-3 hover:bg-[#d2b48c] rounded-lg flex items-center">
                <FiArrowLeft size={20} color="#331a15" />
                <h2 className="pl-2 text-gray-700 font-semibold mr-2">Back to home </h2>
            </button>
        </Link>
    );
}