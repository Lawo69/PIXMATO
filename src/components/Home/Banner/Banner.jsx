import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <p>
                    <span className="s1">AN EMPTY ROOM</span><br></br>
                    <span className="s2">IS A STORY WAITING TO</span><br></br>
                    <span className="s3">HAPPEN</span>
                    <span className="s2"> AND</span><br></br>
                    <span className="s4">YOU'RE THE AUTHOR.</span>
                </p>
                <div className="ctas">
                <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
