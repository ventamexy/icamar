import React from 'react';
import Link from 'next/link'

const EnergiaFotovoltaica = () => {
  return (
      <div className="about-box-main">
        <div className="container">
          <h2 className="noo-sh-title">
            <span>Construcción</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="service-block-inner">
                <p>
                  Somos una constructora con más de 30 años de experiencia comprometidos con la calidad y seguridad en las obras que participamos.
                </p>
              </div>
              <p>
                Contribuimos al éxito de nuestros clientes desempeñándonos mediante nuestros recursos, procesos y buenas prácticas marcadas por los lineamientos por arriba del estándar de la industria. Adicionalmente somos responsables con una consciencia social y ambiental que apoyan al bienestar de México.
              </p>
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="https://www.esan.edu.pe/conexion/actualidad/2018/08/17/1120x630_sector_construccion.jpg"
                  alt=""
                  width="1000"
                  style={{ marginBottom: '5em' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p>
                Estamos enfocados en los segmentos industrial, edificación, comercial e infraestructura
              </p>
              <p style={{ fontWeight: 'bold' }}>
                ¿Qué construimos?
                <ul>
                  <li>
                    1.{" "}Naves industriales
                  </li>
                  <li>
                    2.{" "}Centros comerciales
                  </li>
                  <li>
                    3.{" "}Oficinas corporativas
                  </li>
                  <li>
                    4.{" "}Aeropuertos
                  </li>
                  <li>
                    5.{" "}Estacionamientos
                  </li>
                  <li>
                    6.{" "}Universidades
                  </li>
                  <li>
                    7.{" "}Obras públicas
                  </li>
                  <li>
                    8.{" "}Infraestructura
                  </li>
                  <li>
                    9.{" "}Etc.
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-lg-12">
              <h2 className="noo-sh-title">
                Capacidades
              </h2>
              <p>
                Nuestra capacidad como constructora, no está limitada, hemos realizado proyectos de hasta 200,000 m2. Contamos con el personal necesario para atender las necesidades del cliente.
              </p>
              <p>
                Tenemos la capacidad de realizar proyectos especiales, tanto como en magnitud, impacto, complejidad o con requerimientos especiales.
              </p>
              <p>
                Nuestro compromiso es una alta rentabilidad en los proyectos, usando de manera eficiente los recursos y adicionando un estándar alto de calidad, siendo una empresa socialmente responsable y con consciencia ambiental.
              </p>
            </div>
          </div>

          <div className="actions">
            <Link href="../">
              <a>regresar</a>
            </Link>
          </div>
          
          <style jsx>
            {`
                       
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
  );
}

export default EnergiaFotovoltaica;
