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
                    background: 'linear-gradient(to left, #1d7562, #10473c);'
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
                                
                            </p><br />

                        </div>

                        <div className="col-lg-6"

                        >

                            <div className="banner-frame "
                                style={{
                                    // border: '2px solid #CCC',
                                }}>
                                <img
                                    className="img-fluid "
                                    src=""
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
                                    src=""
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
                                
                            </p><br />
                            <p style={{
                                color: '#fff',
                                textAlign: 'justify',
                                fontSize: '1.5em'
                            }}>
                                
                            </p><br />
                        </div>
                    </div>
                    <h2 className="noo-sh-title" style={{
                        color: '#fff',
                        fontSize: '50px',
                        textAlign: 'left'
                    }}>
                        <span>
                           
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
                                    // border: '2px solid #CCC',
                                }}>
                                <img
                                    className="img-fluid img-thumbnail"
                                    src=""
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FlipCard />
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