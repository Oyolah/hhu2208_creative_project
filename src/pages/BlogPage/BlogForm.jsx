// BlogForm.js
import React, { useState } from "react";

const BlogForm = ({ addBlog }) => {
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
        addBlog(newBlog);
        setNewBlog({
            image: "",
            date: "",
            author: "",
            title: "",
            description: "",
        });
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
            <div className="mb-2">
                <label htmlFor="date">Date:</label>
                <input
                    type="text"
                    id="date"
                    name="date"
                    value={newBlog.date}
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
