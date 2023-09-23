import { useLoaderData, useParams } from "react-router-dom"; // Import necessary components and hooks from react-router-dom.
import React, { useEffect, useState } from "react"; // Import React and its related functions.
import ErrorPage from "../../Error/Error"; // Import the ErrorPage component from a local file.

// Define the ProductDetail component for displaying product details.
const ProductDetail = () => {
    const productDtls = useLoaderData(); // Get product details data using the useLoaderData hook.
    const { id } = useParams(); // Get the "id" parameter from the URL using useParams.

    // Destructure product details properties or provide an empty object if productDtls is undefined.
    const { id: pId, thumbnail, price, title, category, brand, stock, rating, description } = productDtls || {};

    const [show, setShow] = useState(false); // Initialize state for showing/hiding shipping and returns details.
    const [show2, setShow2] = useState(false); // Initialize state for showing/hiding contact us details.

    useEffect(() => {
        if (id != pId) {
            console.log(id, pId);
            return (
                <ErrorPage />
            );
        }
    }, []);

    return (
        <div>
            {/* Product details layout */}
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                    {/* Product image */}
                    <img className="w-full" alt="img of a product" src={thumbnail} />
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                        {/* Product title */}
                        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">{title}</h1>
                        {/* Product price */}
                        <h1 className="text-2xl font-bold mt-7 text-[#ff0000]">Price: ${price}</h1>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Stock</p>
                        <div className="flex items-center justify-center">
                            {/* Product stock */}
                            <p className="text-sm leading-none text-gray-600">{stock} copy</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Rating</p>
                        <div className="flex items-center justify-center">
                            {/* Product rating */}
                            <p className="text-sm leading-none text-gray-600">{rating}</p>
                        </div>
                    </div>
                    <button
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700"
                    >
                        Add To Card
                    </button>
                    <div>
                        {/* Product description */}
                        <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">{description}</p>
                        {/* Product ID */}
                        <p className="text-base leading-4 mt-4 text-gray-600">ID: {pId}</p>
                        {/* Product brand */}
                        <p className="text-base leading-4 mt-7 text-gray-600">Brand: {brand}</p>
                        {/* Product category */}
                        <p className="text-base leading-4 mt-4 text-gray-600">Category: {category}</p>
                    </div>
                    <div>
                        <div className="border-t border-b py-4 mt-7 border-gray-200">
                            <div
                                onClick={() => setShow(!show)}
                                className="flex justify-between items-center cursor-pointer"
                            >
                                <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                                <button
                                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                    aria-label="show or hide"
                                >
                                    {/* Arrow icon for showing/hiding details */}
                                    <svg
                                        className={"transform " + (show ? "rotate-180" : "rotate-0")}
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 1L5 5L1 1"
                                            stroke="#4B5563"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div
                                className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")}
                                id="sect"
                            >
                                {/* Shipping and returns details */}
                                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border-b py-4 border-gray-200">
                            <div
                                onClick={() => setShow2(!show2)}
                                className="flex justify-between items-center cursor-pointer"
                            >
                                <p className="text-base leading-4 text-gray-800">Contact us</p>
                                <button
                                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                    aria-label="show or hide"
                                >
                                    {/* Arrow icon for showing/hiding details */}
                                    <svg
                                        className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 1L5 5L1 1"
                                            stroke="#4B5563"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div
                                className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")}
                                id="sect"
                            >
                                {/* Contact us details */}
                                If you have any questions on how to return your item to us, contact us.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail; // Export the ProductDetail component.
