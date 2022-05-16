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
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="right-phone-box">
              <p>
                Contáctanos:{" "}
                <i className="fa fa-phone"></i>{" "}
                <a href="tel:7535371349"> +52 (753) 537 1349 </a>
              </p>
            </div>
            <div className="our-link">
              <ul>
                <li>
                  <a href="#" target="blank">
                    <i className="fab fa-facebook"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="mailto:info@icamar.com">
                    <i className="fas fa-envelope" />{" "}info@icamar.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
