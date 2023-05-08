import React from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';

export function Form({ title, text, currentCoffee }) {

    const id = useParams()
    console.log(id.id)
    console.log(currentCoffee)

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const image = form.photo.value;
        const price = 890

        const coffeeData = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            image,
            price
        };
        console.log(coffeeData);

        text == "Add Coffee"

            ? fetch(`http://localhost:5000/coffee`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(coffeeData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    swal({
                        title: "Yahhh!!!",
                        text: "Coffee added successfully",
                        icon: "success",
                    })
                    form.reset()
                })

            : fetch(`http://localhost:5000/updateCoffee/${id.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(coffeeData),
            })
                .then((res) => res.json())
                .then((data) => {
                    swal({
                        title: "Yahhh!!!",
                        text: "Updated coffee details successfully",
                        icon: "success",
                    })

                    form.reset()
                })

    }

    return (
        <div className="bg-[#eceae380] p-12 mb-20">
            <h2 className="text-4xl font-semibold text-gray-700 text-center mb-8">{title}</h2>
            <p className="text-p text-gray-600 text-center mb-8 w-2/3 mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. </p>
            <form className="rounded-lg p-8" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-4 mb-4">
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2  focus:border-[#d2b48c]"
                            id="name"
                            name="name"
                            type="text"
                            placeholder={currentCoffee ? currentCoffee.name : "Enter coffee name"}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="chef">
                            Chef
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-[#d2b48c]"
                            id="chef"
                            name="chef"
                            type="text"
                            placeholder={currentCoffee ? currentCoffee.chef : "Enter coffee chef"}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="supplier">
                            Supplier
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-[#d2b48c]"
                            id="supplier"
                            name="supplier"
                            type="text"
                            placeholder={currentCoffee ? currentCoffee.supplier : "Enter coffee supplier"}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="taste">
                            Taste
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-[#d2b48c]"
                            id="taste"
                            name="taste"
                            type="text"
                            placeholder={currentCoffee ? currentCoffee.taste : "Enter coffee taste"}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="category">
                            Category
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-[#d2b48c]"
                            id="category"
                            name="category"
                            type="text"
                            placeholder={currentCoffee ? currentCoffee.category : "Enter coffee category"}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="details">
                            Details
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-[#d2b48c]"
                            id="details"
                            name="details"
                            type="text"
                            placeholder={currentCoffee ? currentCoffee.details : "Enter coffee details"}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 font-semibold mb-2 block" htmlFor="photo">
                        Photo
                    </label>
                    <input
                        className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-[#d2b48c]"
                        id="photo"
                        name="photo"
                        type="text"
                        placeholder={currentCoffee ? currentCoffee.image : "Enter photo URL"}
                    />
                </div>

                <div className="text-center mt-8">
                    <button className="btn2 py-2 px-8 rounded-lg w-full ">
                        {text}
                    </button>
                </div>
            </form>
        </div>
    );
}