import "./Product.scss";


const Product = ({id, data}) => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={process.env.REACT_APP_URL + data.img.data[0].attributes.url} alt="" />
        </div>
        <div className="product-detail">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>
        </div>
    </div>;
};

export default Product;
