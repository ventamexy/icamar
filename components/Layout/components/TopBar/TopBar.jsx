import React from "react";

export default function TopBar() {
  return (
    <div className="main-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-slid-box">
              <div id="offer-box" className="carouselTicker">
                <p></p>
                <ul className="offer-box">
                  <li>
                    
                  </li>
                  <li>
                  
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  {/* 
                  <li>
                    >
                  <li>
                    >
                  <li>
                                     </li>
                  <li>
                     */}
                </ul>
                
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            {/* <div className="custom-select-box">
              <select
                id="basic"
                className="selectpicker show-tick form-control"
                data-placeholder="$ USD"
              >
                <option>¥ JPY</option>
                <option>$ USD</option>
                <option>€ EUR</option>
              </select>
            </div> */}
            <div className="right-phone-box">
              <p>
                Contactanos:{" "}  
                <i className="fa fa-phone"></i>{" "}
                <a href="tel:7535371349"> +52 (753) 537 1349 </a>
               
              </p>
            </div>
            <div className="our-link">
              <ul>
                <li>
                  <a href="#" target="blank"><i class="fab fa-facebook" /></a>
                  {/* <a href="#">My Account</a> */}
                </li>
                <li>
                  <a href="#"><i class="fab fa-whatsapp" /></a>
                  {/* <a href="#">Our location</a> */}
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram" /></a>
                  {/* <a href="#">Contact Us</a> */}
                </li>
                <li>
                  <a href="mailto:info@.com"><i class="fas fa-envelope"/>{" "}info@.com</a>
                  {/* <a href="#">Contact Us</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
