// BlogDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = ({ blogs }) => {
    console.log(blogs);
    const { id } = useParams();
    const blog = blogs.find((blog) => blog.id === parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
            <p className="text-gray-500 text-sm mb-2">
                {blog.date} | {blog.author}
            </p>
            <img
                src={blog.image}
                alt="Blog"
                className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <p className="text-gray-700">{blog.description}</p>
        </div>
    );
};

export default BlogDetails;
