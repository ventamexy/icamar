import React from 'react';

const Servicios = () => {
  return (
    <>
      {/* <section className=" seccion" > */}
      <div className="contenedor">
        {/* <h2 class="centrar-texto">Sobre Nosotros</h2> */}
        <h2 className="noo-sh-title" style={{
          // color: '#fff',
          fontSize: '50px',
          textAlign: 'left'
        }}>
          SECTORES QUE SERVIMOS PÚBLICO Y PRIVADO.

        </h2>
        <div className="grid content-bg">
          <div className="columnas-4">
            {/* <img src="img/invitados/invitado4.jpg" alt="Imagen Nosotros"> */}
            <div className="caja" >
              {/* <h3 className="noo-sh-title" style={{
                                color: '#fff',
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>Publico </h3> */}
              <p>
                {/* - publico y privado.<br /> */}
                - PARTICULARES.<br />
                - SALUD.<br />
                - COMERCIAL.<br />
                - EMPRESAS.<br />
              </p>
            </div>
          </div>
          <div className="columnas-4">
            <div className="caja" >
              {/* <h3  className="noo-sh-title" style={{
                                color: '#fff',
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>Privado</h3> */}
              <p>
                - ENTRETENIMIENTO.<br />
                - AGRICOLA.<br />
                - INSTITUCIONES.<br />
                - MANUFACTURA.<br />
              </p>
            </div>
          </div>
          <div className="columnas-4">
            {/* <img src="img/invitados/invitado4.jpg" alt="Imagen Nosotros"> */}
            <div className="caja" >
              {/* <h3  className="noo-sh-title" style={{
                                color: '#fff',
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>brINDAMOS ASESORÍA FISCAL</h3> */}
              <p>
                - INDUSTRIA.<br />
                - CORPORATIVO.<br />
                - ORGANISMOS DE GOBIERNO.<br />
                - EDUCATIVO.<br />
              </p>
            </div>
          </div>
          <div className="columnas-12">

          </div>
        </div>
      </div>
      {/* </section>  */}
    </>
  );
}

export default Servicios;
