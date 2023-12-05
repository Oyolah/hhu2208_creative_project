import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-red-600 text-white">
            <Link to="/" className="w-full text-3xl font-bold text-[#00df9a]">
                REACT.
            </Link>
            <ul className="hidden md:flex">
                <Link to="/" className="p-4">
                    Home
                </Link>
                <Link to="/about" className="p-4">
                    About Us
                </Link>
                <Link to="/services" className="p-4">
                    Services
                </Link>
                <Link to="/gallery" className="p-4">
                    Gallery
                </Link>
                <Link to="/contact" className="p-4">
                    Contact
                </Link>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <ul
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "ease-in-out duration-500 fixed left-[-100%]"
                }
            >
                <Link
                    to="/"
                    className="w-full text-3xl font-bold text-[#00df9a] m-4"
                >
                    REACT.
                </Link>
                <Link to="/" className="p-4 border-b border-gray-600">
                    Home
                </Link>
                <Link to="/about" className="p-4 border-b border-gray-600">
                    About Us
                </Link>
                <Link to="/services" className="p-4 border-b border-gray-600">
                    Services
                </Link>
                <Link to="/gallery" className="p-4 border-b border-gray-600">
                    Gallery
                </Link>
                <Link to="/contact" className="p-4">
                    Contact
                </Link>
            </ul>
        </nav>
    );
};

export default Navigation;
