import React from "react";
import Slider from "react-slick";


const Banner = () => {
    const images = [
        "/banner1.jpg",
        "/banner2.jpg",
        "/banner3.jpg"
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <Slider {...settings}>
            {images.map((img, i) => (
                <div key={i}>
                    <img src={img} alt={`banner-${i}`} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                </div>
            ))}
        </Slider>
    );
};

export default Banner;
