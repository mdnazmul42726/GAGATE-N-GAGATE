import { useLoaderData } from "react-router-dom"; // Importing the useLoaderData hook from react-router-dom.
import Product from "./Product"; // Importing the Product component from a local file.

// Define the Prodacts (Products) component.
const Prodacts = () => {
    // Using the useLoaderData hook to retrieve the "products" data.
    const { products } = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Mapping over the "products" array and rendering Product components */}
            {products.map(product => <Product key={product.id} product={product} />)}
        </div>
    );
};

export default Prodacts; // Exporting the Prodacts component.
