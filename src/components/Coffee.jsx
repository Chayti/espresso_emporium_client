import React from 'react';
import { MdDelete, MdEdit, MdVisibility } from "react-icons/md";
import { Link } from 'react-router-dom';

function Coffee({ coffee, refetch, setRefetch }) {

    const { _id, image, name, chef, price } = coffee

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete it?",
            icon: "warning",
            dangerMode: true,
        })
            .then(ans => {
                if (ans) {
                    fetch(`https://espresso-emporium-server-chayti.vercel.app/coffee/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.acknowledged) {
                                swal({
                                    title: "Good Luck!!!",
                                    text: "Deleted coffee details",
                                    icon: "success",
                                })
                                setRefetch(!refetch)
                            }
                        });
                }
            })
    }

    return (
        <div className="p-6 flex items-center justify-between bg-[#eceae380] rounded-lg">

            <div className="w-1/4">
                <img
                    src={image}
                    alt="Coffee Coffee"
                    className="rounded-lg object-cover w-full h-full"
                />
            </div>

            <div className="w-1/2 p-4">
                <p className="text-gray-700 font-semibold mb-2">
                    Name: <span className="font-normal">{name}</span>
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                    Chef: <span className="font-normal">{chef}</span>
                </p>
                <p className="text-gray-700 font-semibold mb-2">
                    Price: <span className="font-normal">{price} Taka</span>
                </p>
            </div>

            <div className="p-4">
                <div className="flex items-center justify-center bg-[#d2b48c] p-2 mb-4 rounded-lg">
                    <Link to={`/singleCoffee/${_id}`}>
                        <MdVisibility size={24} color="white" />
                    </Link>
                </div>
                <div className="bg-[#3c393b] p-2 rounded-lg mb-4">
                    <Link to={`/updateCoffee/${_id}`}>
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

export default Coffee;