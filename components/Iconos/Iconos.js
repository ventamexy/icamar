import React from 'react';

const Iconos = () => {
    return (
        <>
            <section className="seccion"
                style={{ background: 'linear-gradient(to left,   #59009c, #901eec, #bd21ff);' }}
            >
                <div className="contenedor">
                    <h2 className="noo-sh-title" style={{
                        color: '#fff',
                        fontSize: '30px',
                        // textAlign: 'left'
                    }}
                    >
                        
                    </h2>

                    <p style={{
                        color: '#fff',
                        fontSize: '20px',
                        marginBottom: '4em'
                        // textAlign: 'left'
                    }}
                    >

                    </p>

                    <div className="grid">
                        <div className="servicio  columnas-2">
                            <div className="iconos wow fadeInUp" data-wow-duration="2s" >
                                <img src="" alt="" />
                                {/* <i class="fas fa-city"></i> */}
                            </div>
                            <p style={{ fontSize: "x-large", color: '#fff' }}></p>
                            <p style={{ fontSize: 'small', color: '#fff' }}>
                            </p>
                        </div>
                        <div className="servicio  columnas-2">
                            <div className="iconos wow fadeInUp" data-wow-duration="2s">
                                <img src="" alt="" />
                                {/* <i class="fas fa-industry"></i> */}
                            </div>
                            {/* <p>Plomería en general.</p> */}
                            <p style={{ fontSize: "x-large", color: '#fff' }}></p>
                            <p style={{ fontSize: 'small', color: '#fff' }}>
                              
                            </p>
                        </div>
                        <div className="servicio  columnas-2">
                            {/* <h3>Social Media </h3> */}
                            <div className="iconos wow fadeInUp" data-wow-duration="2s">
                                <img src="" alt="" />
                                {/* <i class="fas fa-construction"></i> */}
                            </div>
                            {/* <p>Recolección de residuos de grasa o septicos.</p> */}
                            <p style={{ fontSize: "x-large", color: '#fff' }}></p>
                            <p style={{ fontSize: 'small', color: '#fff' }}>
                         
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Iconos;
