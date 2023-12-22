import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";

import "./Cart.scss";
import { Context } from "../../utils/context";
import { useContext } from "react";

const Cart = ({ setShowCart }) => {
    const {cartItems, cartSubTotal } = useContext(Context);
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

                {!cartItems?.length && <div className="empty-cart">
                    <BsCartX />
                    <span>No product in the cart.</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div>}

                {!!cartItems?.length && <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text total">Rs.{cartSubTotal}.00</span>
                        </div>
                        <div className="button">
                            <div className="checkout-cta">Checkout</div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
};

export default Cart;
