// GalleryPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import local images
import Image1 from "../../assets/5eb5a7f7cdfd487cf43f51c9.webp";
import Image2 from "../../assets/Migrant_Mother_Nipomo_California_3334095096-37e37c052a0745ba9cf9fae3cc5f967b.jpg";
import Image3 from "../../assets/benjamin-disinger-2xzEIQFzw0g-unsplash.jpg";
import Image4 from "../../assets/maud-beauregard-_YBhjmUmu64-unsplash.jpg";
import Image5 from "../../assets/men-line-food-Chicago-Great-Depression-Illinois.webp";
import Image6 from "../../assets/nikko-balanial-mpGaig42bv4-unsplash.jpg";
import Image7 from "../../assets/rich&poor_housing.webp";
import Image8 from "../../assets/tent&skyscrappers.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(images[index]);
    };

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden">
                        <img
                            src={image}
                            alt={`poverty ${index + 1}`}
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => handleImageClick(index)}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative overflow-hidden">
                        <img
                            src={selectedImage}
                            alt="Selected figure"
                            className="max-w-full max-h-full"
                        />
                        <Link
                            to="/gallery"
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            Close
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
