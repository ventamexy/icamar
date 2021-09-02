import React from 'react';
import ShopCategories from "../ShopCategories/ShopCategories.container";
import Servicios from "../Servicios/Servicios";
import FlipCard from "../FlipCard/FlipCard";
import ServiciosParqueSolares from "../Servicios/ServiciosParqueSolares";

const Info = () => {

    return (
        <div>

            <section className="seccion "
                style={{
                    background: 'linear-gradient(to left, #fd9900, #955c04);'
                }}>
                <div className="contenedor">
                    {/* 
                <h2 className="noo-sh-title" style={{ color: '#fff',
                }}>
                   <span> paneles de control weeee weweee</span>
                </h2> */}
                    <h2 className="noo-sh-title" style={{
                        color: '#fff',
                        fontSize: '50px',
                        textAlign: 'left'
                    }}>
                        <span>
                        Construcción
                        </span>
                    </h2>
                    <div className="row my-5 wow bounceInDown ">
                        <div className="col-lg-6">
                            {/* <p style={{
                                color: '#fff',
                                textAlign: 'left',
                                fontSize: '1.5em'

                            }}>

                            </p><br /> */}
                            <p style={{
                                color: '#fff',
                                textAlign: 'justify',
                                fontSize: '1.5em'
                            }}>
                                Contribuimos al éxito de nuestros clientes desempeñándonos mediante nuestros recursos, procesos y buenas prácticas marcadas por los lineamientos por arriba del estándar de la industria. Adicionalmente somos responsables con una consciencia social y ambiental que apoyan al bienestar de México.
                            </p><br />

                        </div>

                        <div className="col-lg-6"

                        >

                            <div className="banner-frame img-thumbnail"
                                style={{
                                    // border: '2px solid #CCC',
                                }}>
                                <img
                                    className="img-fluid "
                                    src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                    alt=""
                                />
                            </div>
                        </div>


                    </div>
                    <h2 className="noo-sh-title" style={{
                        color: '#fff',
                        fontSize: '50px',
                        textAlign: 'left'
                    }}>
                        <span>
                        Capacidades
                        </span>
                    </h2>

                    <div className="row my-5 wow bounceInDown ">
                        <div className="col-lg-6">
                            <div className="banner-frame"
                                style={{
                                    // border: '2px solid #CCC',
                                }}>
                                <img
                                    className="img-fluid img-thumbnail"
                                    src="https://images.pexels.com/photos/4025501/pexels-photo-4025501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <p style={{
                                color: '#fff',
                                textAlign: 'left',
                                fontSize: '1.5em'

                            }}>

                            </p><br /> */}
                            <p style={{
                                color: '#fff',
                                textAlign: 'justify',
                                fontSize: '1.5em'
                            }}>
                                Nuestra capacidad como constructora, no está limitada, hemos realizado proyectos de hasta 200,000 m2. Contamos con el personal necesario para atender las necesidades del cliente.
                                <br />
                                Tenemos la capacidad de realizar proyectos especiales, tanto como en magnitud, impacto, complejidad o con requerimientos especiales.
                                <br />
                                Nuestro compromiso es una alta rentabilidad en los proyectos, usando de manera eficiente los recursos y adicionando un estándar alto de calidad, siendo una empresa socialmente responsable y con consciencia ambiental.
                            </p><br />
                            <p style={{
                                color: '#fff',
                                textAlign: 'justify',
                                fontSize: '1.5em'
                            }}>

                            </p><br />
                        </div>
                    </div>
                    {/* <h2 className="noo-sh-title" style={{
                        color: '#fff',
                        fontSize: '50px',
                        textAlign: 'left'
                    }}>
                        <span>

                        </span>
                    </h2> */}

                    {/* <div className="row my-5 wow bounceInDown ">

                        <div className="col-lg-6">
                            <p style={{
                                color: '#fff',
                                textAlign: 'left',
                                fontSize: '1.5em'

                            }}>

                            </p><br />
                            <p style={{
                                color: '#fff',
                                textAlign: 'justify',
                                fontSize: '1.5em'
                            }}>

                            </p><br />
                            <p style={{
                                color: '#fff',
                                textAlign: 'justify',
                                fontSize: '1.5em'
                            }}>

                            </p><br />
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-frame"
                                style={{
                                    border: '2px solid #CCC',
                                }}>
                                <img
                                    className="img-fluid img-thumbnail"
                                    src=""
                                    alt=""
                                />
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            {/* <FlipCard /> */}
            <section className="section" style={{
                backgroundImage: 'linear-gradient(180deg,#ffffff 28%,#f2f2f2 100%)!important;',

            }}>


                <div className="about-box-main">
                    <div className="container back-naranja">

                        <div className="row my-5  ">

                            <div className="col-lg-12">
                                <h2 className="noo-sh-title">
                                    Servicios<span></span>
                                </h2>
                                <ShopCategories />

                                <style jsx>{`
                       
                        `}
                                </style>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Info;