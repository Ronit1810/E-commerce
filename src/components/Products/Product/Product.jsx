import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="product-detail">
            <span className="name">Product NameProduct NameProduct NameProduct Name</span>
            <span className="price">&#8377;Product Price</span>
        </div>
    </div>;
};

export default Product;
