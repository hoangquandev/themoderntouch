import React, { useState } from 'react'
import Slider from "react-slick";
// import { useState } from 'react'
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../assets/images/slider/slider1.png"
import image2 from "../../../assets/images/slider/banner2.png"
import image3 from "../../../assets/images/slider/banner-3.png"
import beforeMobile from "../../../assets/images/banner mobile/beforeMobile.png"



const Banner = () => {
    const [zoom, setZoom] = useState(false)
    const zoomable = () => {
        if (window.scrollY > 1) {
            setZoom(true)
        }
    }

    const settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        draggable:false
    };

    window.addEventListener("scroll", zoomable)

    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);

        React.useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
        }, []);

        return { width };
    };
    
    const viewPort = useViewport();
    const isMobile = viewPort.width <= 640;
    if (isMobile) {
        return (
            <div className='bannerMoblie'>
                <div className='image' id='parallax'>
                    <img src={beforeMobile} alt='' />
                </div>
                <div className='text'>
                    <p className='subSlogan'> Become the leading <br/>
                  
                    
                    Design Consulting Company in the Segment
                    </p>
                    <h4 className='slogan'>"Premium & Luxury"</h4>
                </div>
                
            </div>
        )
    }

    return (
        <div className='container'
            data-aos="zoom-out"
            data-aos-duration="1000"
            style={zoom ? { transform: "scale(1)", transition: "all 1s linear" } : { transform: "scale(2.7)", transition: "all 1s linear" }}
        >
            <div className='zoom'>
                <Slider className='slider' {...settings}>
                    <div className='sliderItem'>
                        <img src={image1} alt="" />
                    </div>
                    <div className='sliderItem'>
                        <img src={image2} alt="" />
                    </div>
                    <div className='sliderItem'>
                        <img src={image3} alt="" />
                    </div>
                </Slider>
            </div>
        </div >
    )
}

export default Banner