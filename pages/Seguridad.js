import React from 'react';
import Link from 'next/link'

const EnergiaHidraulica = () => {
  return (
    <>
      <div className="about-box-main">
        <div className="container">
          <h2 className="noo-sh-title">
            <span>Seguridad</span>
          </h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="https://concepto.de/wp-content/uploads/2014/01/sseguridad-industrial-1-e1551712014904.jpg"
                  alt=""
                  width="1000"
                  style={{ marginBottom: '5em' }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <p>
                La seguridad de nuestros colaboradores es muy importante, es por eso que contamos con un Sistema de Gestión en Seguridad, Salud y Medio Ambiente, estratégicamente diseñador para cumplir con la normatividad nacional e internacional y garantizar la seguridad de nuestros proyectos.
              </p>
              <p>
                Tenemos el compromiso de mantener  en constante capacitación a nuestro personal, fortaleciendo los comportamientos seguros y la participación en la prevención de accidentes.
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
          <div className="actions">
            <Link href="../">
              <a>regresar</a>
            </Link>
          </div>
          <style jsx>{`
                       
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

export default EnergiaHidraulica;
