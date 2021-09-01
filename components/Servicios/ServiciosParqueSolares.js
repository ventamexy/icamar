import React from 'react';

const ServiciosParqueSolares = () => {
  return (
    <>
      {/* <section className=" seccion" > */}
      <div className="contenedor">
        {/* <h2 class="centrar-texto">Sobre Nosotros</h2> */}
        {/* <h2 className="noo-sh-title" style={{
                                color: '#fff',
                                fontSize: '50px',
                                textAlign: 'left'
                            }}> Sectores que servimos  publico y privado.
            </h2> */}
        <div className="grid content-bg">
          <div className="columnas-6">
            {/* <img src="img/invitados/invitado4.jpg" alt="Imagen Nosotros"> */}
            <div className="caja" >
              {/* <h3 className="noo-sh-title" style={{
                                color: '#fff',
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>Publico </h3> */}
              <p>
                {/* - publico y privado.<br /> */}
                - Sistemas aislados e interconectados a CFE. <br />
                - Genera tu propia luz. <br />
                - Ahorra hasta un 100% en tu recibo de luz. <br />
                - Diseños de sistemas fotovoltaicos para naves industriales. <br />
                - Proyectos de alumbrado público solar. <br />
              </p>
            </div>
          </div>
          <div className="columnas-6">
            <div className="caja" >
              {/* <h3  className="noo-sh-title" style={{
                                color: '#fff',
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>Privado</h3> */}
              <p>
                - Proyectos de alumbrado público a 127v.<br />
                - Kit´s de alumbrado público y privado con luminaria LED.<br />
                - Postes metalicos para alumbrado público.<br />
                - Luminarias residenciales, comerciales e industriales.<br />
                - Kit´s de energía solar de emergencia.<br />
                - Sistemas de alarmas con energía solar.<br />
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

export default ServiciosParqueSolares;
