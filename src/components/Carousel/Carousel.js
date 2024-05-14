import React from "react";
import "./Carousel.css";
import jai from  "../../Assets/jai.jpg"
import fall from  "../../Assets/fall.jpeg"
import prime from  "../../Assets/prime.jpg"

const Carousel = () => {
  return (
    <>
      <div className="Cardmain">
        <div className="CarouselImg container-fluid">
          <div className="d-flex">
            <h4>Prime Video: Recommended for you</h4>{" "}
            <span>
              <p className="para">
                <a href="">See more from Amazon Prime</a>
              </p>
            </span>
          </div>

          <div className="row">
            <div className="ipic col-lg-5 ">
              <iframe
                width="660"
                height="320"
                src="https://www.youtube.com/embed/lDJrt5hZ-2Q?autoplay=1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <div className="d-flex col-lg-7">
         <ul className="d-flex primeImg">
         <li >
            <img src={jai} height={"320px"} width={"230px"} />
          </li>
          <li>
            <img src={fall} height={"320px"} width={"240px"}  />
          </li>
          <li>
            <img src={prime} height={"320px"} width={"240px"}  />
          </li>
         
        </ul>
        
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Carousel;
