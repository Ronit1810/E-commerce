import { MdClose } from "react-icons/md";

import Prod from "../../../assets/products/watch-prod-1.webp"

import "./Search.scss";
const Search = ({setSearchclick}) => {
    return <div className="search-model">
        <div className="form-field">
            <input 
                type="text"
                autoFocus
                placeholder="Search for Product"
            />
            <MdClose onClick={()=> setSearchclick(false)} />
        </div>
        <div className="search-result-content">
            <div className="search-result">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={Prod} alt="" />
                    </div>
                    <div className="prod-detail">
                        <span className="name">Product Name</span>
                        <span className="desc">Description</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
