import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";

import "./Cart.scss";
<<<<<<< HEAD
import { Context } from "../../utils/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowCart }) => {
    const {cartItems, cartSubTotal } = useContext(Context);
    const navigate = useNavigate();
=======
const Cart = ({ setShowCart }) => {
>>>>>>> parent of f760eb8 (shopping cart add)
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">

                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">close</span>
                    </span>
                </div>

                {/*<div className="empty-cart">
                    <BsCartX />
                    <span>No product in the cart.</span>
<<<<<<< HEAD
                    <button className="return-cta"  onClick={() => navigate("/")}>RETURN TO SHOP</button>
                </div>}
=======
                    <button className="return-cta">RETURN TO SHOP</button>
                </div>*/}
>>>>>>> parent of f760eb8 (shopping cart add)

                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text total">&#8377;1234</span>
                        </div>
                        <div className="button">
                            <div className="checkout-cta">Checkout</div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Cart;
