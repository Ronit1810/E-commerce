import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

import Cartitem from "./CartItem/CartItem"

import "./Cart.scss";
const Cart = ({setShowcart}) => {
    const navigate = useNavigate()
    const {cartItem, cartSubTotal} = useContext(Context)
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

            {!cartItem?.length && <div className="empty-cart">
                <BsCartX />
                <span className="text">No products in cart.</span>
                <button className="return-cta" onClick={
                    () => {
                        navigate("/");
                        setShowcart(false)
                    }
                }>RETURN TO SHOP</button>
            </div>}

            {!!cartItem?. length &&<>
                <Cartitem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal</span>
                        <span className="text total">&#8377;{cartSubTotal}</span>
                    </div>
                    <div className="btn">
                        <button className="checkout-btn">Checkout</button>
                    </div>
                </div>
            </>}
        </div>
    </div>;
};

export default Cart;
