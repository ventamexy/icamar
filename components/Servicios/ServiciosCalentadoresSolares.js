import React from 'react';

const ServiciosCalentadoresSolares = () => {
    return (
        <>
            <section className="seccion "
                style={{ background: 'linear-gradient( #e7e7e7, #4f4f4f);' }}

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
                        // color: '#fff',
                        fontSize: '40px',
                        // textAlign: 'left'
                    }}>
                        <span>Equipos de calentadores solares</span><br />
                        residencial - insustrial - comercial
                    </h2>
                    <div className="row my-5  ">


                        <div className="col-lg-6">
                            <h2 className="noo-sh-title" style={{
                                // color: '#fff',
                                fontSize: '20px',
                                textAlign: 'left'
                            }}>Venta, instalacion y mantenimiento de calentadores solares</h2>
                            <p style={{ 
                                // color: '#fff', 
                                textAlign: 'justify' }}>
                            </p>
                            <p style={{ 
                                // color: '#fff', 
                                textAlign: 'justify' }}>
                                - Albercas.<br />
                                - Hoteles.<br />
                                - Empresas.<br />
                                - Industrias.<br />
                                - Hospitales.<br />
                            </p>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="banner-frame">
                                <img
                                    className="img-fluid"
                                    src="https://media1.giphy.com/media/c3HczzhNAceOI/giphy.gif?cid=ecf05e47kfnovnw3q0qhpoyziyy8su22p0liox6oacnhourt&rid=giphy.gif&ct=g"
                                    alt=""
                                />
                            </div>
                        </div> */}
                    </div>
                    <div className="grid content-bg">
                        <div className="columnas-6">
                            {/* <img src="img/invitados/invitado4.jpg" alt="Imagen Nosotros"> */}
                            <div className="caja" >
                                <h3 className="noo-sh-title" style={{
                                // color: '#fff',
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>Suministro de agua caliente para: </h3>
                                <p>
                                    {/* - publico y privado.<br /> */}
                                    - Uso domestico.<br />
                                    - Hoteles.<br />
                                    - Clubes deportivos.<br />
                                    - Hospitales.<br />
                                    - Rastros.<br />
                                    - Fabricas.<br />
                                    - Procesos productivos.<br />
                                    - Calefacción.<br />


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

export default ServiciosCalentadoresSolares;
