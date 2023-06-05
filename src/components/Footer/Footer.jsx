import "./Footer.scss";
import React from "react";
import payment from "../../assets/payments.png"
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return <div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Eu mi bibendum neque egestas congue. Felis imperdiet proin fermentum leo vel orci porta non pulvinar.</div>
            </div>

            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">65, Ideal Indl Estate, S B Marg, Mathurdas Mills Compound, Lower Parel (west)</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 5448 6658 2558</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: storerp1810@dev.com</div>
                </div>
            </div>

            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphone</div>
                <div className="text">Smart watches</div>
                <div className="text">Bluetooth Speaker</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theater</div>
                <div className="text">Projector</div>
            </div>

            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & condition</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    RP1810 ©2023 CREATED BY RONIT PATEL
                </div>
                <img src={payment} alt="" />
            </div>
        </div>
    </div>;
};

export default Footer;
