import { MdClose } from "react-icons/md"
import Prod from "../../../assets/products/speaker-prod-1.webp"
import { useContext } from "react";
import { Context } from "../../../utils/context";

import "./CartItem.scss";
const CartItem = () => {
    const {handleRemoveFromCart, cartItem, handleCartProductQuantity} = useContext(Context)
    return <div className="cart-products">
    {cartItem.map((item) => (

        <div key={item.id} className="cart-product">
            <div className="img-container">
                <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-detail">
                <span className="name">{item.attributes.title}</span>
                <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)} />
                <div className="quantity-button">
                    <span onClick={() => handleCartProductQuantity('Dec', item)}>-</span>
                    <span>{item.attributes.quantity}</span>
                    <span onClick={() => handleCartProductQuantity('Inc', item)}>+</span>
                </div>
                <div className="text">
                    <span>{item.attributes.quantity}</span>
                    <span>X</span>
                    <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
                </div>
            </div>
        </div>
    ))}
    </div>;
};

export default CartItem;
