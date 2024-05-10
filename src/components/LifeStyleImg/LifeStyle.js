import React from 'react'
import "./LifeStyle.css"

import shampo1 from "../../Assets/shampo1.jpg";
import shampo2 from "../../Assets/shampo2.jpg";
import shampo3 from "../../Assets/shampo3.jpg";
import shampo4 from "../../Assets/shampo4.jpg";
import shampo5 from "../../Assets/shampo5.jpeg";
import shampo6 from "../../Assets/shampo6.jpg";
import shampo7 from "../../Assets/shampo7.jpg";
import shampo8 from "../../Assets/shampo8.jpeg";
import shampo9 from "../../Assets/shampo9.jpg";

import shoe1 from "../../Assets/shoe1.jpg"
import shoe2 from "../../Assets/shoe2.jpg"
import shoe3 from "../../Assets/shoe3.jpg"
import shoe4 from "../../Assets/shoe4.jpeg"
import lugage1 from "../../Assets/lugage1.jpg"
import lugage2 from "../../Assets/lugage2.jpg"
import lugage3 from "../../Assets/lugage3.jpeg"
import lugage from "../../Assets/lugage.jpeg"
import handbag2 from "../../Assets/handbag2.jpg"
import handbag1 from "../../Assets/handbag1.jpg"



const LifeStyle = () => {
  return (
   <>
   <div className="lifeStyleMain">
   <div className="scroolImg2 container-fluid">
        <div className="d-flex">
          <h4>Highly rated skincare products from brands you might like</h4>{" "}
          <span>
            <p className="para">
              <a href="">Explore More</a>
            </p>
          </span>
        </div>
        <ul className="producthor">
          <li>
            <img src={shampo1} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shampo2} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shampo3} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shampo4} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shampo5} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shampo6} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shampo7} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shampo8} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shampo9} height={"180px"} width={"150px"} />
          </li>
        </ul>
      </div>

      <div className="scroolImg2 container-fluid">
        <div className="d-flex">
          <h4>Up to 70% off | Footwear, luggage & more</h4>{" "}
          <span>
            <p className="para">
              <a href="">Ultimate Brand Sale</a>
            </p>
          </span>
        </div>
        <ul className="producthor">
          <li>
            <img src={shoe1} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shoe2} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={handbag1} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={handbag2} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shoe3} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={shoe4} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={lugage} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={lugage1} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={lugage2} height={"180px"} width={"150px"} />
          </li>
          <li>
            <img src={lugage3} height={"180px"} width={"150px"} />
          </li>
        </ul>
      </div>

      </div>

   </>
  )
}

export default LifeStyle