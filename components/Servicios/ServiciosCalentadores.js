import React from 'react';

const ServiciosCalentadores = () => {
    return (
        <>
             <section className="seccion "
                style={{ background: 'linear-gradient(to left, #0074ff, #0196c7);' }}

            >
               <div className="contenedor">

          {/* <h2 class="centrar-texto">Sobre Nosotros</h2> */}
            {/* <h2 className="noo-sh-title" style={{
                                color: '#fff',
                                fontSize: '50px',
                                textAlign: 'left'
                            }}> Sectores que servimos  publico y privado.
            </h2> */}
            <h2 className="noo-sh-title" style={{
                            color: '#fff',
                            fontSize: '50px',
                            // textAlign: 'left'
                        }}>
                            <span>Energia Solar en la agricultura, agrovoltaica</span>
                        </h2>
                                <div className="row my-5 wow bounceInDown ">
                                   
                                    
                                    <div className="col-lg-6">
                                        <p style={{ color: '#fff', textAlign: 'justify' }}>
                                        Calculamos el material y productos que puedes necesitar de acuerdo al ahorro de energía que busques, todo para que tu recuperación se vea reflejada en tu recibo.
                                        </p>
                                        <p style={{ color: '#fff', textAlign: 'justify' }}>
                                            - Asesoria.<br />
                                            - gestion y permisos.<br />
                                            - contratos ante CFE.<br />
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="banner-frame">
                                            <img
                                                className="img-fluid"
                                                src="https://media1.giphy.com/media/c3HczzhNAceOI/giphy.gif?cid=ecf05e47kfnovnw3q0qhpoyziyy8su22p0liox6oacnhourt&rid=giphy.gif&ct=g"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
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
                - Proyectos agricolas.<br />
                - Granjas agricolas solares.<br />
                - Bonbeo solar.<br />
                - Agua potable para comunidades.<br />
                
               
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
                - Agua potable para animales.<br />
                - riego.<br />
                - piscinas.<br />
                - Equipos de aspercion - goteo - filtro.<br />
                {/* - .<br /> */}
               
                </p>
              </div>
            </div>
            {/* <div className="columnas-4">
              <img src="img/invitados/invitado4.jpg" alt="Imagen Nosotros">
              <div className="caja" >
                <h3  className="noo-sh-title" style={{
                                color: '#fff',
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>BRINDAMOS ASESORÍA FISCAL</h3>
                <p>
                - industria.<br />
                - corporativo.<br />
                - Organismos de govierno.<br />
                - educativo.<br />

                </p>
              </div>
            </div> */}
            <div className="columnas-12">
              
            </div>
          </div>
        </div>
            </section>
        </>
    );
}

export default ServiciosCalentadores;
