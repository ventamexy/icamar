import React from 'react';
import Link from 'next/link'

const Terracerías = () => {
  return (
    <>
      <div className="about-box-main">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="https://fortaingenieria.com/ind_content/uploads/2018/03/escavaciones-1024x530.jpg"
                  alt=""
                  style={{ marginBottom: '5em' }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <h2 className="noo-sh-title">
                <span>
                  Terracerías
                </span>
              </h2>
            </div>

            <div className="col-lg-6">

              <p style={{ textAlign: "justify" }}>
                Nuestras soluciones son de  construcción y administración de proyectos de terracerías y urbanización, fletes y acarreos.

              </p>

              <p style={{ fontWeight: 'bold' }}>
                Ventajas competitivas:
                <ul>
                  <li>
                    1.{" "}Experiencia en construcción
                  </li>
                  <li>
                    2.{" "}Equipo altamente capacitado
                  </li>
                  <li>
                    3.{" "}Capacidad financiera
                  </li>
                  <li>
                    4.{" "}Infraestructura para dar respuesta integral a las necesidades del proyecto
                  </li>
                  <li>
                    5.{" "}Respaldo de las mejores marcas de maquinaria e insumos
                  </li>
                </ul>
              </p>
              <p style={{ textAlign: "justify" }}>
                Contamos con un parque de maquinaria para cumplir con las necesidades de cualquier proyecto, contamos con excavadoras, motoconformadoras, bulldozer, camiones articulados, vibrocompactadores, camiones de volteo, camiones pipa, retroexcavadoras, cargadores frontales, gruas, torre, manipuladores telescópicos, minicargadores, entre otros.
              </p>
              <p style={{ textAlign: "justify" }}>
                Las obras en un inicio poseen la necesidad de la preparación del terreno, para que después sea el adecuado para la construcción, se realiza con maquinaria y bajo las normas requeridas.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="service-block-inner">
                {/* <h3>We are Trusted</h3> */}
                <p>
                  Nuestro compromiso es ofrecer soluciones en tiempo y forma para cumplir con los objetivos de cada proyecto garantizando la calidad en la ejecución, seguridad y servicio al cliente.
                </p>
              </div>
              <p style={{ fontWeight: 'bold' }}>
                Movimiento de tierras para:
                <ul>
                  <li>
                    1.{" "}Naves industriales
                  </li>
                  <li>
                    2.{" "}Estacionamientos
                  </li>
                  <li>
                    3.{" "}Centros comerciales
                  </li>
                  <li>
                    4.{" "}Vialidades
                  </li>
                </ul>
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Realizamos infraestructuras:
                <ul>
                  <li>
                    1.{" "}Agua
                  </li>
                  <li>
                    2.{" "}Luz
                  </li>
                  <li>
                    3.{" "}Tuberías
                  </li>
                  <li>
                    4.{" "}Drenaje sanitario
                  </li>
                  <li>
                    5.{" "}Drenaje pluvial
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="actions">
            <Link href="../">
              <a>regresar</a>
            </Link>
          </div>
          <style jsx>
            {
            `
              .actions {
                margin-top: 20px;
                display: flex;
                justify-content: flex-end;
              }
              .actions a {
                color: #fff;
                background: #f01b29;
                padding: 16px 24px;
                text-decoration: none;
              }
            `}
          </style>
        </div>
      </div>
    </>
  );
}

export default Terracerías;
