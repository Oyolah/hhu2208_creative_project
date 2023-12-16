// BlogForm.js
import React, { useState } from "react";

const BlogForm = ({ addBlog }) => {
    const [formErrors, setFormErrors] = useState({
        image: "",
        date: "",
        author: "",
        title: "",
        description: "",
    });
    const [newBlog, setNewBlog] = useState({
        image: "",
        date: "",
        author: "",
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBlog({
            ...newBlog,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form fields
        let isValid = true;
        const newErrors = { ...formErrors };

        Object.keys(newBlog).forEach((field) => {
            if (newBlog[field].trim() === "") {
                newErrors[field] = `Please fill in the ${field} field.`;
                isValid = false;
            } else {
                newErrors[field] = "";
            }
        });

        setFormErrors(newErrors);

        // If the form is valid, proceed with adding the blog
        if (isValid) {
            addBlog(newBlog);
            setNewBlog({
                image: "",
                date: "",
                author: "",
                title: "",
                description: "",
            });
        }
    };

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-2">Add New Blog</h2>
            <div className="mb-2">
                <label htmlFor="image">Image URL:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={newBlog.image}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            {/* Update the date field to datetime-local */}
            <div className="mb-2">
                <label htmlFor="datetime">Date and Time:</label>
                <input
                    type="datetime-local" // Change the input type
                    id="datetime"
                    name="datetime"
                    value={newBlog.datetime}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="mb-2">
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={newBlog.author}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={newBlog.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={newBlog.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
            </div>
            {/* Display error messages */}
            {Object.values(formErrors).map(
                (error, index) =>
                    error && (
                        <p key={index} className="text-red-500">
                            {error}
                        </p>
                    )
            )}
            <button
                type="submit"
                className="button-color text-white px-4 py-2 rounded"
            >
                Save Your Story
            </button>
        </form>
    );
};

export default BlogForm;
