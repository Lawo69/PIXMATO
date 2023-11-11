import "./Products.scss";
import Product from "./Product/Product";

const Products = () => {
    return (
        <div className="product-container">
            <div className="sec-heading">Section Heading</div>
            <div className="products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
};

export default Products;
