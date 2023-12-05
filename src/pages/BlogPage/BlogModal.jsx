// BlogModal.js
import React from "react";

const BlogModal = ({ blog, closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-4 max-w-2xl max-h-full overflow-y-auto">
                <span className="text-gray-500 text-sm mb-2">
                    {blog.date} | {blog.author}
                </span>
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <img
                    src={blog.image}
                    alt="Blog"
                    className="w-full h-48 object-cover mb-4 rounded-md cursor-pointer"
                    onClick={closeModal}
                />
                <p className="text-gray-700">{blog.description}</p>
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default BlogModal;
