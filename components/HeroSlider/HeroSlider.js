import React from "react";

export default function HeroSlider() {
  return (
    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-right">
          <img src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    OFRECEMOS TRABAJOS DE ALTA CALIDAD<br />
                  </strong>
                </h1>
                <p className="m-b-40">

                </p>
                <p>
                  <a className="btn hvr-hover" href="/contact-us">
                    Contactanos
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-left">
          <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Transformamos las ideas en grandes proyectos<br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  <br />
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        {/* <li className="text-center">
          <img src="http://www.drywallcontractorllc.com/wp-content/uploads/2018/10/7694747_orig.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    <br />
                  </strong>
                </h1>
                <p className="m-b-40">

                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li> */}

        {/* <li className="text-right">
          <img src="images/servicios/04-min.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  <br />
                  {" "}
                  <br />
                  
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li> */}

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
