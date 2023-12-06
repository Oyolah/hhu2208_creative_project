import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import Footer from "./Footer/Footer";

const duration = 300;

const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateX(100%)",
};

const transitionStyles = {
    entering: { transform: "translateX(0)" },
    entered: { transform: "translateX(0)" },
    exiting: { transform: "translateX(100%)" },
    exited: { transform: "translateX(100%)" },
};

const Layout = ({ children }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    Blow Your Mind
                </Link>

                <div className="block lg:hidden">
                    <button
                        className="text-white hover:text-gray-300 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        &#9776;
                    </button>
                </div>

                <nav className="hidden lg:flex mt-2">
                    <ul className="flex">
                        <li className="mr-6">
                            <Link
                                to="/"
                                className="text-white hover:text-gray-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link
                                to="/aboutus"
                                className="text-white hover:text-gray-300"
                            >
                                About
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link
                                to="/history"
                                className="text-white hover:text-gray-300"
                            >
                                History
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link
                                to="/blog"
                                className="text-white hover:text-gray-300"
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link
                                to="/services"
                                className="text-white hover:text-gray-300"
                            >
                                Services
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link
                                to="/gallery"
                                className="text-white hover:text-gray-300"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contactus"
                                className="text-white hover:text-gray-300"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Transition
                    in={isMobileMenuOpen}
                    timeout={duration}
                    unmountOnExit
                >
                    {(state) => (
                        <div
                            className={`lg:hidden fixed top-0 right-0 w-28 h-full bg-gray-800`}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                            }}
                        >
                            <ul className="flex flex-col items-center mt-12">
                                <li className="my-2">
                                    <Link
                                        to="/"
                                        className="text-white hover:text-gray-300"
                                        onClick={toggleMobileMenu}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link
                                        to="/aboutus"
                                        className="text-white hover:text-gray-300"
                                        onClick={toggleMobileMenu}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link
                                        to="/history"
                                        className="text-white hover:text-gray-300"
                                        onClick={toggleMobileMenu}
                                    >
                                        History
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link
                                        to="/blog"
                                        className="text-white hover:text-gray-300"
                                        onClick={toggleMobileMenu}
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link
                                        to="/services"
                                        className="text-white hover:text-gray-300"
                                        onClick={toggleMobileMenu}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link
                                        to="/gallery"
                                        className="text-white hover:text-gray-300"
                                        onClick={toggleMobileMenu}
                                    >
                                        Gallery
                                    </Link>
                                </li>
                                <li className="my-2">
                                    <Link
                                        to="/contactus"
                                        className="text-white hover:text-gray-300"
                                        onClick={toggleMobileMenu}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </Transition>
            </header>

            <main className="flex-grow pl-2 pr-2">{children}</main>

            <footer className="bg-gray-800 p-4 text-white">
                <Footer />
                {/* &copy; 2023 Your App Name. All rights reserved. */}
            </footer>
        </div>
    );
};

export default Layout;
