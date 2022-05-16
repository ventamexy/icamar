import React from "react";
import Slider from "react-slick";


export default function InstagramFeed() {
    const settings = {
        centerMode: true,
        centerPadding: '60px',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        // nextArrow: false,
        // prevArrow: false
    };
    return (
        <>
            <section className="seccion">
                <div>
                    <h2 className="noo-sh-title" style={{}}> clientes que han confiado en nosotros</h2>
                    <Slider {...settings}>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.ingenieriaconstrumex.com/media/logos%20de%20clientes/logo-sedena.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.ingenieriaconstrumex.com/media/logos%20de%20clientes/logo-casageo.png"
                                alt=""

                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.ingenieriaconstrumex.com/media/logos%20de%20clientes/logo-stc.png"
                                alt=""

                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.ingenieriaconstrumex.com/media/logos%20de%20clientes/logo-kansas.png"
                                alt=""

                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.ingenieriaconstrumex.com/media/logos%20de%20clientes/api.png"
                                alt=""

                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.ingenieriaconstrumex.com/media/logos%20de%20clientes/casaara.png"
                                alt=""

                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.ingenieriaconstrumex.com/media/logos%20de%20clientes/logo-pemex.png"
                                alt=""

                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.ingenieriaconstrumex.com/media/logos%20de%20clientes/logo-mittal.jpg"
                                alt=""

                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.ingenieriaconstrumex.com/media/logos%20de%20clientes/logo-cfe.png"
                                alt=""

                            />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
}
