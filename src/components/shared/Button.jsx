import React from 'react';
import { FiCoffee } from "react-icons/fi";
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to={'/addCoffee'}>
            <button className="mx-auto btn2 mt-5 mb-10 py-2 px-5 rounded-lg flex items-center">
                <h2 className="font-semibold mr-2">Add Coffee</h2>
                <FiCoffee size={20} color="#331a15" />
            </button>
        </Link>
    );
}