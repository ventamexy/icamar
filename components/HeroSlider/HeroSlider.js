import React from "react";

export default function HeroSlider() {
  return (
    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-right">
          <img src="" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    OFRECEMOS TRABAJOS DE ALTA CALIDAD<br />
                  </strong>
                </h1>
                <p className="m-b-40"></p>
                <p>
                  <a className="btn hvr-hover" href="/contact-us">
                    Contáctanos
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-left">
          <img src="" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    TRANSFORMAMOS LAS IDEAS EN GRANDES PROYECTOS<br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  <br />
                </p>
                <p>
                <a className="btn hvr-hover" href="/contact-us">
                    Contáctanos
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
