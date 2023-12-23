import "./SingleProduct.scss";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
<<<<<<< HEAD

import useFatch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { data } = useFatch(`/api/products?populate=*&[filters][id]=${id}`);
    const { handleAddToCart } = useContext(Context);
    const navigate = useNavigate();

    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState -1;
        });
    };

    if(!data) return;
    const product = data.data[0].attributes;
=======
import prod from "../../assets/products/movie-1.png";

const SingleProduct = () => {
>>>>>>> parent of f760eb8 (shopping cart add)
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">Product name</span>
                        <span className="price">Price</span>
                        <span className="desc">Product description</span>
                    

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider"></span>

                        <div className="info-item">
                            <span className="text-bold">
<<<<<<< HEAD
                                Category:{' '}
                                <span onClick={() => navigate(`/category/${product.categories.data[0].id}`)}> {product.categories.data[0].attributes.title}</span>
=======
                                Category:
                                <span>Headphones</span>
>>>>>>> parent of f760eb8 (shopping cart add)
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest scale={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts />
        </div>
    )
};

export default SingleProduct;
