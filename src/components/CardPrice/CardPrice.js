import React, { useState } from "react";
import "./CardPrice.css";
import g1 from "../../Assets/g1.jpg";
import g2 from "../../Assets/g2.jpg";
import g3 from "../../Assets/g3.jpg";
import g4 from "../../Assets/g4.jpg";
import g5 from "../../Assets/g5.jpg";
import g6 from "../../Assets/g6.jpg";
import g7 from "../../Assets/g7.jpg";

const CardPrice = () => {
  const images = [g1, g2, g3, g4, g5, g6, g7];
  const cardsPerPage = 4;

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + cardsPerPage >= images.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0
        ? images.length - cardsPerPage
        : prevIndex - 1
    );
  };

  return (
    <>
      <div className="Cardmain">
        <div className="CardImg container-fluid">
          <div className="d-flex align-items-center justify-content-between">
            <h4>Amazon LIVE - Watch, Chat & Shop LIVE</h4>
            <span>
              <p className="para">
                <a href="">See more from Amazon Live</a>
              </p>
            </span>
          </div>

          <div className="row">
            <div className="ipic col-lg-4">
              <iframe
                width="560"
                height="420"
                src="https://www.youtube.com/embed/_wclMKVGUHM?autoplay=1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <div className="d-flex col-lg-8 carousel slide" id="carouselExampleControls" data-bs-ride="carousel">
              {images.slice(startIndex, startIndex + cardsPerPage).map((img, index) => (
                <div key={index} className="card">
                  <img src={img} className="card-img-top" alt={`card-${index}`} />
                  <div className="card-body">
                    <h5 className="card-title">Rare Women Casual Knee-Length Dress</h5>
                    <p className="card-text d-flex gap-4">
                      <span style={{ fontSize:"25px", fontWeight:"600"}}>&#8377;900</span>
                      <span>
                        <del style={{color:"red", fontSize:"20px"}}>&#8377;1,799.00</del>
                      </span>
                    </p>
                  </div>
                </div>
              ))}
              <button
                className="carousel-control-prev"
                type="button"
                onClick={prevSlide}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                onClick={nextSlide}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPrice;
