// BlogPage.js
import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import BlogForm from "./BlogForm";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // useEffect(() => {
    //     // Load blogs from local storage on component mount
    //     const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    //     setBlogs(storedBlogs);
    // }, []);

    // const addBlog = (newBlog) => {
    //     const updatedBlogs = [newBlog, ...blogs];
    //     setBlogs(updatedBlogs);
    //     localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    //     setShowForm(false);
    // };

    useEffect(() => {
        // Load blogs from local storage on component mount
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        setBlogs(
            storedBlogs.map((blog, index) => ({ ...blog, id: index + 1 }))
        );
    }, []);

    const addBlog = (newBlog) => {
        const updatedBlogs = [{ ...newBlog, id: blogs.length + 1 }, ...blogs];
        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        setShowForm(false);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">My Blogs</h1>

            {/* Toggle button for Add Blog Form */}
            <button
                className="button-color text-white px-4 py-2 rounded mb-4"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "Close Form" : "Add Your Story"}
            </button>

            {/* Blog Form */}
            {showForm && <BlogForm addBlog={addBlog} />}

            {/* Displaying each blog */}
            {blogs.map((blog, index) => (
                <Blog key={index} blog={blog} />
            ))}
        </div>
    );
};

export default BlogPage;
