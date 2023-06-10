import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"

import Cartitem from "./CartItem/CartItem"

import "./Cart.scss";
const Cart = ({setShowcart}) => {
    return <div className="cart-panel">
        <div className="opacity-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=> setShowcart(false)}>
                    <MdClose />
                    <span className="text">Close</span>
                </span>
            </div>

            {/* <div className="empty-cart">
                <BsCartX />
                <span className="text">No products in cart.</span>
                <button className="return-cta">RETURN TO SHOP</button>
            </div> */}

            <>
                <Cartitem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal</span>
                        <span className="text total">&#8377;4500</span>
                    </div>
                    <div className="btn">
                        <button className="checkout-btn">Checkout</button>
                    </div>
                </div>
            </>
        </div>
    </div>;
};

export default Cart;
