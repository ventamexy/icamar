import React from 'react';

const PreConstruccion = () => {
  return (
    <>
      <div className="about-box-main">
        <div className="container">
          <h2 className="noo-sh-title">
            <span>Pre-Construcción</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="https://www.gpconstruccion.com.mx/wp-content/uploads/2021/07/fondo-495x400-1.jpg.webp"
                  alt=""
                  width="1000"
                  style={{ marginBottom: '5em' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p>
                Las decisiones de costo, son generadas al principio de la obra, la pre-construcción es la parte temprana de un proyecto, que al tener una planeación seria, nos conduce al éxito.
              </p>
              <h2 className="noo-sh-title">

              </h2>

              <p>
                Al determinarse el alcance del proyecto, podemos dividirlo en varias etapas, esto nos permite tener mayor control de los riesgos y costos.
              </p>
              <p style={{ fontWeight: 'bold' }}>
                ¿Cómo lo hacemos?
                <ul>
                  <li>
                    1.{" "}Elaboramos un presupuesto inicial y siguientes dependiendo de la etapa de diseño en la que nos encontremos.
                  </li>
                  <li>
                    2.{" "}Creamos un plan en donde la comunicación con nuestro cliente es efectiva.
                  </li>
                  <li>
                    3.{" "}Utilizamos metodologías de última tecnología para que en tiempo real, pueda el cliente ver los cambios solicitados.
                  </li>
                  <li>
                    4.{" "}Se aplican planes de calidad solicitando encuestas de inicio, intermedio y final para ajustar y crear mejoras aún terminado el proyecto.
                  </li>

                </ul>
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

          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Ingeniería a detalle</h3>
                <p>
                  El proyecto ejecutivo. Desarrollamos el proyecto completo para generar los planos para construcción y fabricación. En este punto ya se ven incluidos modelos, marcas, cantidades, estudios y cálculos.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Ingeniería conceptual</h3>
                <p>
                  Desde la definición básica del proyecto, para la ubicación y exploración de las formas, layouts, etc. El diseño en este punto es muy flexible, pues es la etapa de definición primaria.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <h3>Ingeniería básica</h3>
                <p>
                  Después de aprobado el concepto, se comienzan a aplicar los reglamentos de la construcción, ya con una forma y planta congelada, elevaciones y selección de materiales.
                </p>
              </div>
            </div>
          </div>
          {/* <OurTeam /> */}
          {/* <Servicios /> */}
        </div>
      </div>
    </>
  );
}

export default PreConstruccion;
