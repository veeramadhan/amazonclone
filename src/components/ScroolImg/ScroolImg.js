import React from "react";
import stand from "../../Assets/stand.jpg";
import charge from "../../Assets/charge.jpg";
import headphone from "../../Assets/headphone.jpg";
import tooth from "../../Assets/tooth.jpg";
import bluetooth from "../../Assets/bluetooth.jpg";
import tember from "../../Assets/tember.jpg";
import wire from "../../Assets/wire.jpg";
import shocket from "../../Assets/shocket.jpg";
import pouch from "../../Assets/pouch.jpg";
import wire2 from "../../Assets/wire2.jpg";
import solar from "../../Assets/solar.jpg";
import watch1 from "../../Assets/watch1.jpg";
import watch2 from "../../Assets/watch2.jpg";
import watch3 from "../../Assets/watch3.jpg";
import watch4 from "../../Assets/watch4.jpg";
import watch5 from "../../Assets/watch5.jpg";
import watch6 from "../../Assets/watch6.jpg";
import watch7 from "../../Assets/watch7.jpg";
import watch8 from "../../Assets/watch8.jpg";
import watch9 from "../../Assets/watch9.jpg";
import "./ScroolImg.css";


import pro from "../../Assets/pro.jpg"
import pro2 from "../../Assets/pro2.jpg"
import mi1 from "../../Assets/mi1.jpg"
import mi2 from "../../Assets/mi2.jpg"


import offerr from "../../Assets/offerr.jpg"



const ScroolImg = () => {
  return (
    <div className="scrollmain">
      <div className="scroolImg container-fluid">
        <div className="d-flex">
          <h4>Up to 80% off | Deals on mobile accessories</h4>{" "}
          <span>
            <p className="para">
              <a href="">Explore More</a>
            </p>
          </span>
        </div>
        <ul className="producthor">
          <li>
            <img src={stand} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={tooth} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={charge} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={bluetooth} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={headphone} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={tember} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={wire} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shocket} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={pouch} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={wire2} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={solar} height={"180px"} width={"150px"} />
          </li>
        </ul>
      </div>

      <div className="scroolImg2 container-fluid">
        <div className="d-flex">
          <h4>Up to 70% off on | Bestselling smartwatches</h4>{" "}
          <span>
            <p className="para">
              <a href="">Explore More</a>
            </p>
          </span>
        </div>
        <ul className="producthor">
          <li>
            <img src={watch1} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={watch2} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={watch3} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={watch4} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={watch5} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={watch6} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={watch7} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={watch8} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={watch9} height={"180px"} width={"150px"} />
          </li>
        </ul>
      </div>

      <div className=" container">
        <div className="row gap-4">
        <div className="col-lg-3 card1">
        <h5>Great Summer Sale | Brands in focus</h5>
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
        </div>



        <div className="col-lg-3 card2">
        <h5>Minimum 50% off | Amazon Brands & more</h5>
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
        </div>

        <div className="col-lg-3 card3">
        <h5>Up to 70% off | Amazon Renewed</h5>
            <div className=' brand'>

                <div className='brandtv'>
                  <img src={offerr} height={"280px"} width={"270px"}/>
                  <a href="https://example.com/offers" >See All Offers</a>
                </div>
            
        </div>
        </div>

        <div className="col-lg-2 card4">
        <p>veera</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ScroolImg;
