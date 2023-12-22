import { useContext } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/movie-1.png";
import { Context } from "../../../utils/context";

import "./CartItem.scss";
const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);
    return (
        <div className="cart-products">
            {cartItems.map(item => (
                <div className="cart-product" key={item.id}>
                    <div className="img-container">
                        <img src={"http://localhost:1337" + item.attributes.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)}/>
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                        </div>
                        <div className="texts">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span className="highlight">Rs.{item.attributes.price}.00</span>
                        </div>
                    </div>
                </div>
            ))};
            
        </div>
    );
};

export default CartItem;
