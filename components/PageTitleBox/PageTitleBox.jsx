import React from "react";

export default function PageTitleBox() {
  return (
    <div className="all-title-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>
              Transformamos las ideas en grandes proyectos
            </h2>
            <p style={{color: '#fff'}}>
              SOMOS UNA CONSTRUCTORA COMPROMETIDA CON NUESTROS CLIENTES
            </p>
            <br />
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <i className="fa fa-phone" />{" "}
                <a href="contact-us">contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
