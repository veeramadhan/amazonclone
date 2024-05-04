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


const Header = () => {
  return (
         <div className='container '>
          <div className='row headerMain'>


            <div className='col-lg-3 box1'>
            <h5>Shop All Deals</h5>
            <img src={offer} height={"300px"} width={"300px"}/>
            <a href="https://example.com/offers" >See All Offers</a>
             </div>




            <div className='col-lg-3 box2'>
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

            <div className='col-lg-4 box3'>
            <h5>Deals on smartphones that suits your budget</h5>
            <div className='d-flex brand'>
                <div className='brandtv'>
                  <img src={mi1} height={"180px"} width={"150px"}/>
                </div>

                <div className='brandtv'>
                  <img src={mi2} height={"180px"} width={"150px"}/>
                </div>
            </div>
            <br></br>

            <div className='d-flex brand'>
                <div className='brandtv'>
                  <img src={pro} height={"180px"} width={"150px"}/>
                </div>

                <div className='brandtv'>
                  <img src={pro2} height={"180px"} width={"150px"}/>
                </div>
            </div>
              <br></br>
            <a href="https://example.com/offers" >See All Offers</a>
            </div>

            {/* <div className='col-lg-3 box3'>
            <h1>dan</h1>
            </div> */}

          </div>

         </div>
  )
}

export default Header