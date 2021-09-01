import React from 'react';

const EnergiaTermoSolar = () => {
  return (
    <>
      <div className="about-box-main">
        <div className="container">
          <h2 className="noo-sh-title">
            <span>¿CÓMO FUNCIONA LA ENERGÍA TERMOSOLAR?</span>
          </h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="https://www.sostenibilidad.com/media/39551/energia-termosolar-2.jpg"
                  alt=""
                  width="1000"
                  style={{ marginBottom: '5em' }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <p>
                La energía termosolar, también llamada termoeléctrica, aprovecha el calor del sol para producir electricidad limpia a gran escala. Hay diferentes maneras de absorber, almacenar y distribuir esa energía, siendo los dos más importantes las tecnologías de cilindros parabólicos y de torre central.
              </p>
              <h2 className="noo-sh-title">
                En este vídeo te mostramos cómo funcionan estos dos tipos de tecnología y cómo son capaces de crear electricidad a partir del calor del sol.
              </h2>
              <iframe width="1080" height="537" src="https://www.youtube.com/embed/-_y8mJD7Mms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>
                Apostar por energías renovables como la solar, en sus diferentes variantes tecnológicas, es sin duda una forma muy efectiva de frenar las emisiones de gases de efecto invernadero provenientes de combustibles fósiles, causantes del cambio climático derivado del  calentamiento global.
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

export default EnergiaTermoSolar;
