import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                {/* ctas = call to action */}
                <div className="ctas" >
                    <div className="cta">Read More</div>
                    <div className="cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
        
    </div>;
};

export default Banner;
