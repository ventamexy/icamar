import React from 'react';
import ProductsFeed from "../components/ProductsFeed/ProductsFeed";


const LlaveEnMano = () => {
  return (
    <>
      <ProductsFeed />
      <div className="about-box-main">
        <div className="container">
        <div className="service-block-inner">
                  {/* <h3>We are Trusted</h3> */}
                  <p>
                    Esta solución integral, engloba desde el diseño hasta la construcción y puesta en marcha de las instalaciones.
                  </p>
                </div>
          <h2 className="noo-sh-title">
            <span>Proyectos llave en mano</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-frame">
               
                <img
                  className="img-thumbnail img-fluid"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiuM8odvJPAu_Lf-55B2HeVVZAt4yB08sxg&usqp=CAU"
                  alt=""
                width="400"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2>

              </h2>
              <p>
                En el desarrollo de los proyectos llave en mano, somos responsables del control total del proyecto de principio a fin y nos permite realizarlos en mejor tiempo.
              </p>
              <p>
                Utilizamos vistas en 3D de diseño detallado para su comprensión en tiempo real. Incorporamos la tecnología al diseño y la capacidad que tiene el cliente, le permite tener decisiones importantes desde esta etapa del proyecto, para asegurarse de la calidad o modificar el proyecto si se requiere.
              </p>
              <h2 className="noo-sh-title">

              </h2>
              <p>
                Aplicamos metodología del PMI con project managers certificados para el control y monitoreo cumpliendo la expectativa del cliente.
              </p>

            </div>
            {/* <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/nosotros/11.jpg"
                  alt=""
                />
              </div>
            </div> */}
          </div>

          {/* <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Trusted</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Professional</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>We are Expert</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div> */}
          {/* <OurTeam /> */}
          {/* <Servicios /> */}
        </div>
      </div>
    </>
  );
}

export default LlaveEnMano;
