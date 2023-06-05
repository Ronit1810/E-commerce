import {useContext, useEffect, useState} from "react";
import { useNavigate} from "react-router-dom"

import {AiOutlineHome} from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";



import "./Header.scss";

const Header = () => {
    //header sticky after certain scroll
    const[scrolled , setScrolled] = useState(false)
    const handlescroll = ()=>{
        const offset = window.scrollY;
        if(offset > 150){
            setScrolled(true);
        }
        else{
            setScrolled(false)
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll", handlescroll)
    }, [])
    return (
        //adding class to header after certain scroll by using JS [``]
        <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}> 
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">R O N I T.</div>
                <div className="right">
                    <AiOutlineSearch />
                    <AiOutlineHome />
                    <span   className="cart-icon">
                        <AiOutlineShoppingCart />
                        <span>5</span>
                    </span> 
                </div>
            </div>
        </header>
    )
};

export default Header;
