import React from 'react';
import { useParams } from 'react-router';

export function Form({ title, text }) {

    const id = useParams()
    console.log(id.id)

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const author = form.author.value;
        const publisher = form.publisher.value;
        const language = form.language.value;
        const category = form.category.value;
        const subject = form.subject.value;
        const image = form.photo.value;
        const price = 1050

        const bookData = {
            title,
            author,
            publisher,
            language,
            category,
            subject,
            image,
            price
        };
        console.log(bookData);

        text == "Add Book"

            ? fetch(`http://localhost:5000/book`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
            })
                .then((res) => res.json())
                .then((data) => {
                    alert("Book added successfully");
                    form.reset()
                })

            : fetch(`http://localhost:5000/updateBook/${id.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
            })
                .then((res) => res.json())
                .then((data) => {
                    alert("Updated book information successfully");
                    form.reset()
                })

    }

    return (
        <div className="bg-gray-200 p-12 mb-20">
            <h1 className="text-4xl font-semibold text-gray-700 text-center mb-8">{title}</h1>
            <p className="text-gray-600 text-center mb-8 w-2/3 mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. </p>
            <form className="rounded-lg p-8" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-4 mb-4">
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter book title"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="subject">
                            Author
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                            id="author"
                            name="author"
                            type="text"
                            placeholder="Enter book author"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="subject">
                            Publisher
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                            id="publisher"
                            name="publisher"
                            type="text"
                            placeholder="Enter book publisher"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="subject">
                            Language
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                            id="language"
                            name="language"
                            type="text"
                            placeholder="Enter book language"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="subject">
                            Category
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                            id="category"
                            name="category"
                            type="text"
                            placeholder="Enter book category"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-4">
                        <label className="text-gray-700 font-semibold mb-2 block" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Enter book subject"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 font-semibold mb-2 block" htmlFor="photo">
                        Photo
                    </label>
                    <input
                        className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                        id="photo"
                        name="photo"
                        type="text"
                        placeholder="Enter photo URL"
                    />
                </div>
                <div className="text-center mt-8">
                    <button className="bg-orange-500 text-white py-3 px-8 rounded-lg w-full ">
                        {text}
                    </button>
                </div>
            </form>
        </div>
    );
}