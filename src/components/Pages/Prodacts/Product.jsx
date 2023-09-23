import { Link, useNavigate } from "react-router-dom"; // Importing necessary components from react-router-dom.
import Login from "../../Error/Login"; // Importing the Login component from a local file.

// Define the Product component which displays a single product.
const Product = ({ product }) => {
    // Destructure product properties or provide an empty object if product is undefined.
    const { id, thumbnail, price, title } = product || {};

    const navigate = useNavigate(); // Initialize the useNavigate hook to handle routing.

    // Function to handle navigation to product details.
    const handleNavgtDtls = () => {
        const userLogin = true; // Assuming a user is logged in.

        if (userLogin) {
            // If user is logged in, navigate to the product details page.
            navigate(`/products/${id}`);
        } else {
            // If user is not logged in, navigate to the login page.
            navigate("/login");
        }
    }

    return (
        <div>
            {/* Product card */}
            <div className="w-80 h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="w-80 h-56 p-8 rounded-t-lg" src={thumbnail} alt="product image" />
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        {/* Star rating icons */}
                        <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            {/* Star icon path */}
                        </svg>
                        {/* Repeat the star icons for the product rating */}
                        {/* Note: The SVG paths for star icons are missing in your code. */}
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        {/* Product price */}
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        {/* Button to view product details */}
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleNavgtDtls}> View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product; // Export the Product component.
