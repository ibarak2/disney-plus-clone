import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"


export const ImgCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScrolls: 1,
        autoplay: true,
        centerMode: true
    }

    const imgs = [
        "/imgs/slider-scale.jpg",
        "/imgs/slider-scales.jpg",
        "/imgs/slider-badag.jpg",
        "/imgs/slider-badging.jpg"
    ]

    return (
        <Carousel {...settings}>
            {imgs.map((img, idx) => {
                return (
                    <Wrap key={idx}>
                        <div>
                            <img src={img}></img>
                        </div>
                    </Wrap>
                )
            })}


        </Carousel>
    )
}

const Carousel = styled(Slider)`
margin-top: 100px;

ul li button {
    &::before {
        font-size: 16px;
    }
}

li.slick-active button::before {
    color: white;
}
box-shadow: 1px 11px 39px 5px rgba(0,0,0,0.75);
`

const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;

div {
    border-radius: 4px;
    padding: 4px;
    img {
        min-height: 250px;
        width: 100%;
        height: 100%;
    }
    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 0.3s;
    }

}
`