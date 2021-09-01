import React from 'react';
import Slider from "react-slick";

const ProductsFeed = () => {
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
            <section className="seccion "
                style={{ background: 'black' }}

            >
                <div>
                        {/* <h2> Single Item</h2> */}
                        <Slider {...settings}>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="https://static.grainger.com/rp/s/is/image/Grainger/3AZN8_AS01?$glgmain$"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="https://cdn.homedepot.com.mx/productos/140576/140576-d.jpg"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="https://www.steren.com.mx/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/175659284/reflector-led-de-30-w.jpg"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="https://images.todosai.com/1725-home_default/Bateria-AGM-de-12V-9Ah--HP12-9.jpg"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="https://calentadoresdelta.com/wp-content/uploads/2018/10/solar-960x960.jpg"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="https://images.ssstatic.com/lamparas-de-calle-led-300w-130lm-w-150lm-w-9517857z0-090449138.jpg"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="http://s.alicdn.com/@sc04/kf/Hd0daa6b5918e4a748a4601627f9cf319y.png"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="http://bmassolar.com/image/cache/data/products/Sistemas%20Autonomos/sistema-panel-solar-150-watts-bateria-115-ah-controlador-20-amper-inversor-450-watts-500x500.jpg"
                                    alt=""

                                />
                            </div>
                            {/* <div>
                                <img
                                    className="img-fluid"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAG-0Sn2iAIy23TnglFyiLnR4saCwXHyD02gfwS6FBf3CaRIqj-lN_h0hLFTBiwzOo64&usqp=CAU"
                                    alt=""

                                />
                            </div> */}
                            <div>
                                <img
                                    className="img-fluid"
                                    src="https://cdn.shopify.com/s/files/1/2997/4738/products/REFRIGERADOR_INDUSTRIAL_2_PUERTAS_46ft_CRT_GLOBAL_MBF8507@2x.jpg?v=1572540063"
                                    alt=""

                                />
                            </div>
                            {/* <div>
                                <img
                                    className="img-fluid"
                                    src="https://lh3.googleusercontent.com/proxy/WWviVZznxLzJF4owjNfnUtMFA58EaqpFQ6a8NoXK78D5aoENCC-RHjT4b8WDRnNr5MUqbj-zSpA54Kph5Xq3OUMDApEBXGiIMe9aFVPgt-3AoK9f7BM4buKv_9psvnHO1g4_yssPA_auXPM_YcWVj0A"
                                    alt=""

                                />
                            </div> */}
                        </Slider>
                    </div>
            </section>


        </>
    );
}

export default ProductsFeed;
