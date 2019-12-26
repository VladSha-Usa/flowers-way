import { useState } from 'react'
import Slider from "react-slick";

const PathfinderSlider = ({images}) => {
  
  const [ idx, setIndex ] = useState(0)
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (currentSlide) => setIndex(currentSlide)
  }
  return (<>
    <div className="pathfinder-image-gallery">
      <Slider {...settings}>
        {images.map(image => (
          <div>
            <img src={image} className="pathfinder-image" />
        </div>))}
      </Slider>
    </div>
   
    <div style={{ display: 'flex', justifyContent: "center" }} className="switcher">
      {images.map((image, index) => (<div key={index} className={idx == index ? "switcher-item-active" : "switcher-item"} />)) }
    </div>
    <style>{`
     
      .slick-slider {
          height: 320px;
      }
      .slick-list {
        border-radius: 25px;
        overflow: hidden;
      }
      .slick-list div {
        height: 320px;
      }
      @media only screen and (max-width: 1023px) {
        .slick-slider, .slick-list div {
          height: 280px;
        }
      }
    `}
    </style>
    <style jsx>{`
     .switcher-item-active {
        border-radius: 10px;
        margin:  0px 5px;
        height: 15px; 
        width: 15px; 
        background: rgb(24, 49, 170, 1);
      }
      .switcher-item {
       border-radius: 10px;
        margin: 2.5px 5px ;
        height: 10px; 
        width: 10px; 
        background: rgb(24, 49, 170, 0.25);
      }
     .pathfinder-image-gallery {
        width: 450px;
        height: 320px;
        border-radius: 25px;
        overflow: hidden;
        box-shadow: 4px 10px 30px 0 rgba(9, 21, 85, 0.18);
      }
      .pathfinder-image {
        width: 450px;
        height: 320px;
        object-fit: cover;
        overflow: hidden;
      }
  
      @media only screen and (max-width: 1023px) {
        .pathfinder-image-gallery {
          width: 335px;
          height: 280px;
        }
       .pathfinder-image {
          width: 335px;
          height: 280px;
        }
      }
      .switcher {
        margin-top: 15px;
        height: 15px;
      }
      `}</style>
    </>)
}
export default PathfinderSlider