import "./styles.css";
import React, { useState } from "react";

const images = [
  "https://cc-prod.scene7.com/is/image/CCProdAuthor/design-carousels-sliders_00?$pjpeg$&jpegSize=300&wid=1440",
  "https://d25yuvogekh0nj.cloudfront.net/2020/11/mw1920_How-to-Create-Image-Carousels-_-Sliders-_And-Why-They_re-Awesome_-banner-1250x500.png",
  "https://smartslider3.com/wp-content/uploads/2019/01/imageslider-1-780x410.png",
  "https://smartslider3.com/wp-content/uploads/2019/05/sliderimages-780x410.png",
  "https://miro.medium.com/v2/resize:fit:1400/1*Bjxu6WQW1ZbIH6eObanXtQ.jpeg"
];

export default function App() {
  const [currentcount, Setcurrentcount] = useState(0);

  const nextSlide = () => {
    Setcurrentcount(currentcount === images.length - 1 ? 0 : currentcount + 1);
  };

  const prevSlide = () => {
    Setcurrentcount(currentcount === 0 ? images.length - 1 : currentcount - 1);
  };

  return (
    <div className="App">
      <h1>Carousel</h1>
      <div className="slider">
        <div className="left-arrow" onClick={nextSlide}>
          next
        </div>
        <div className="right-arrow" onClick={prevSlide}>
          prev
        </div>
      </div>

      {images.map(
        (image, index) =>
          currentcount === index && (
            <div key={image} className="slider">
              <img src={image} alt="images" />
            </div>
          )
      )}
    </div>
  );
}
