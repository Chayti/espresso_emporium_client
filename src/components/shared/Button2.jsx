import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';

export function Button2() {
    return (
        <Link to={`/`}>
            <button className="py-3 mb-20 hover:bg-orange-200 rounded-lg flex items-center">
                <FiArrowLeft size={20} color="#ED8914" />
                <span className="pl-2 text-gray-700 font-semibold mr-2">Back to home </span>
            </button>
        </Link>
    );
}