import "./Product.scss";

import prod from "../../../assets/products/movie-1.png";

const Product = ({id, data}) => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={"http://localhost:1337" + data.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">Rs.{data.price}.00</span>
            </div>
        </div>
    )
};

export default Product;
