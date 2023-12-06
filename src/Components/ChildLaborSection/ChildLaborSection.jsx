// ChildLaborSection.js
import React from "react";
import childLaborImage from "../../assets/child_labor.jpeg"; // Replace with the actual image path

const ChildLaborSection = () => {
    return (
        <section className="py-12 flex items-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Text on the left */}
                <div className="md:w-1/2 md:pr-8">
                    <h2 className="text-3xl font-bold text-gray-700 mb-4">
                        Child Labor: A Form of Exploitation
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Child labor involves the exploitation of children
                        through any form of work that deprives them of their
                        childhood, interferes with their ability to attend
                        regular schools, and is mentally, physically, socially,
                        or morally harmful. In many cases, children are forced
                        into hazardous and demeaning jobs, robbing them of their
                        right to education and a normal childhood.
                    </p>
                    <p className="text-gray-600">
                        Child exploitation can take various forms, such as child
                        trafficking, forced labor, and hazardous working
                        conditions. It is a violation of children's rights and a
                        significant social issue that requires attention and
                        action from society.
                    </p>
                </div>

                {/* Image on the right */}
                <div className="md:w-1/2 md:pl-8">
                    <img
                        src={childLaborImage}
                        alt="Child Labor"
                        className="w-full h-auto rounded-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default ChildLaborSection;
