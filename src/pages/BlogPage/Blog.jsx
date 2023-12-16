// Blog.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogModal from "./BlogModal";

const Blog = ({ blog }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div class="mx-auto px-4 py-8 max-w-xl my-20">
                <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                    <div class="md:flex-shrink-0">
                        <img
                            src={blog.image}
                            alt="blog"
                            class="w-full h-64 rounded-lg rounded-b-none"
                            onClick={openModal}
                        />
                    </div>
                    <div class="px-4 py-2 mt-2">
                        <h2 class="font-bold text-2xl text-gray-800 tracking-normal">
                            {blog.title}
                        </h2>
                        <p class="text-sm text-gray-700 px-2 mr-1">
                            {blog.description.slice(
                                0,
                                blog.description.indexOf(
                                    ".",
                                    blog.description.indexOf(".") + 1
                                ) + 1
                            )}
                        </p>
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <button
                                class="text-blue-500 text-xs -ml-3 "
                                onClick={openModal}
                            >
                                Show More
                            </button>
                            <a href="#" class="flex text-gray-700">
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    class="w-6 h-6 text-blue-500"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    />
                                </svg>
                                5
                            </a>
                        </div>
                        <div class="author flex items-center -ml-3 my-3">
                            <div class="user-logo">
                                <img
                                    class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                                    src={blog.image}
                                    alt="avatar"
                                />
                            </div>
                            <h2 class="text-sm tracking-tighter text-gray-900">
                                <a href="https://www.instagram.com/oyolah.sl/">
                                    By {blog.author} |
                                </a>{" "}
                                <span class="text-gray-600">{blog.date}</span>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                {modalOpen && <BlogModal blog={blog} closeModal={closeModal} />}
            </div>
        </>
    );
};

export default Blog;
