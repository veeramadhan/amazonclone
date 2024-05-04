import React from "react";
import "./Nav.css";
import amazon from "../../Assets/amazon.png";
import location from "../../Assets/location.png";
import search from "../../Assets/search.png"
import flag from "../../Assets/flag.png"
import cart from "../../Assets/cart.png"
import burger from "../../Assets/burger.png"
import arrow from '../../Assets/arrow.png'
import banner3 from "../../Assets/banner3.jpg"
import banner4 from "../../Assets/banner4.jpg"
import banner5 from "../../Assets/banner5.jpg"
import Header from "../Header/Header";

const Nav = () => {
  return (
    <>
    <div className="container-fluid mainNav d-flex">
      <div>
        <a>
          <img className="imgLogo" src={amazon} height={"55px"} width={"140px"}></img>
        </a>
      </div>

      <div className="locationicon">
        <img
          src={location}
          className="locicon"
          height={"20px"}
          width={"20px"}
        />

        <p className="location">Delivering to Coimbatore 641012</p>
      </div>

      <div class="search-container">
  <select class="search-filter">
    <option value="all">All</option>
  </select>
  <input type="search" class="searchbar" placeholder="Search..."/>
  {/* <option value="all"> <img src={search} height="20px" width="20px" alt="Search Icon"/>
  </option> */}
</div>


<div className="d-flex flg">
    <img src={flag}  height="20px" width="25px" />
    <p className="paraflg">EN</p>
</div>



<div className="profile ">
    <p className="textp">Hello,sign in
    <h5 className="textH5">Account & Lists</h5></p>
</div>

<div className="profile ">
    <p className="textp">Returns
    <h5  className="textH5">&Orders</h5></p>
</div>

<div className="d-flex cart">
    <img src={cart}  height="20px" width="25px" />
    <p className="paraflg">Cart</p>
</div>
    </div>


<div className="megaMenu">
    
        
    

    <ul className="d-flex">
    <img src={burger} height="20px" width="25px"  className="burgericon"/>
        <li>
            Fresh
        </li>
        <li>
            Amazon MiniTV
        </li>
        <li>
            Sell
        </li>
        <li>
            Best Seller
        </li>
        <li>
            Mobiles
        </li>
        <li>
            Today's Deals
        </li>
        <li>
            Prime
        </li>
        <li>
            Customer Service
        </li>
        <li>
           Electronics
        </li>
        <li>
           New Releases
        </li>
        <li>
           Home & Kitchen
        </li>

        <div className="ms-auto">
        <h5>
            Great Summer Sale <span>|</span> Shop Now
            <img src={arrow} height="20px" width="25px"/>
        </h5>
        
    </div>
    </ul>
</div>


<div className="carouselMain">
<div id="carouselExampleInterval" class="" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={banner3} class="d-block ban" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={banner4} class="d-block ban" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner5} class="d-block ban" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev  btncarousel" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next btncarousel" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon btnicon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="headerMain">
<Header />
</div>

</div>





</>
  );
};

export default Nav;
