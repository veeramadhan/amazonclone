import React from 'react'
import "./Header.css"
import offer from "../../Assets/offer.png"
import Mi from "../../Assets/Mi.jpg"
import oneplus from "../../Assets/one plus.jpg"
import apple from "../../Assets/apple.png"
import samsung from "../../Assets/samsung.png"
import pro from "../../Assets/pro.jpg"
import pro2 from "../../Assets/pro2.jpg"
import mi1 from "../../Assets/mi1.jpg"
import mi2 from "../../Assets/mi2.jpg"


import banner3 from "../../Assets/banner9.png";
import banner4 from "../../Assets/banner7.png";
import banner5 from "../../Assets/banner8.png";




const Header = () => {
  return (

    <>
    <div className="carouselMain">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner test">
            <div class="carousel-item active" data-bs-interval="5000">
              <img src={banner3} class="d-block ban" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src={banner4} class="d-block ban" alt="..." />
            </div>
            <div class="carousel-item">
              <img
                src={banner5}
                class="d-block ban"
                data-bs-interval="5000"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev  btncarousel"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next btncarousel"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon btnicon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
         <div className='container '>
          <div className='row headerMain'>


            <div className='col-lg-3 box1 col-sm-12'>
            <h5>Shop All Deals</h5>
            <div>   <img src={offer} height={"300px"} width={"300px"} className='img1'/></div>
         
            <a href="https://example.com/offers" >See All Offers</a>
             </div>




            <div className='col-lg-3 box2 col-sm-12'>
            <h5>Deals on accessories for your top smartphone brands</h5>
            <div className='d-flex brand'>
                <div className='brandtv'>
                  <img src={Mi} height={"80px"} width={"80px"}/>
                  <p  style={{fontSize:"9px", fontWeight:"750"}}>Xiaomi | Up to 75% off</p>
                </div>

                <div className='brandtv'>
                  <img src={oneplus} height={"80px"} width={"110px"}/>
                  <p  style={{fontSize:"9px", fontWeight:"750"}}>onePlus | Up to 50% off</p>
                </div>
            </div>
            <br></br>

            <div className='d-flex brand'>
                <div className='brandtv'>
                  <img src={apple} height={"65px"} width={"55px"}/>
                  <p  style={{fontSize:"9px", fontWeight:"750"}} className='mt-2'>Apple | offer</p>
                </div>

                <div className='brandtv'>
                  <img src={samsung} height={"60px"} width={"80px"}/>
                  <p  style={{fontSize:"9px", fontWeight:"750"}}>Samsung | Up to 50% off</p>
                </div>
            </div>
              <br></br>
            <a href="https://example.com/offers" >See All Offers</a>
            </div>

            <div className='col-lg-3 box3 col-sm-12'>
            <h5>Deals on smartphones that suits your budget</h5>
            <div className='d-flex brand'>
                <div className='brandtv'>
                  <img src={mi1} height={"120px"} width={"100px"}/>
                </div>

                <div className='brandtv'>
                  <img src={mi2} height={"120px"} width={"100px"}/>
                </div>
            </div>
            <br></br>

            <div className='d-flex brand'>
                <div className='brandtv'>
                  <img src={pro}height={"120px"} width={"100px"}/>
                </div>

                <div className='brandtv'>
                  <img src={pro2} height={"120px"} width={"100px"}/>
                </div>
            </div>
              {/* <br></br>
            <a href="https://example.com/offers" >See All Offers</a> */}
            </div>

            {/* <div className='col-lg-3 box3'>
            <h1>dan</h1>
            </div> */}

          </div>

          </div>

       
          </>
         
  )
}

export default Header