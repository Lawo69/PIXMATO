import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({id, data}) => {
    const navigate = useNavigate();
    return (
        <div className="product-card" onClick={() => navigate("/product/" + id)}>
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