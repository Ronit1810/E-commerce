import { MdClose } from "react-icons/md"
import Prod from "../../../assets/products/speaker-prod-1.webp"

import "./CartItem.scss";
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={Prod} alt="" />
            </div>
            <div className="prod-detail">
                <span className="name">Product Name</span>
                <MdClose className="close-btn" />
                <div className="quantity-button">
                    <span>+</span>
                    <span>5</span>
                    <span>-</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>X</span>
                    <span className="highlight">&#8377;8000</span>
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
