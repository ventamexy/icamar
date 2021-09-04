import React from 'react';
import Slider from "react-slick";

const ProductsFeed = () => {
    const settings = {
        centerMode: true,
        centerPadding: '-620px',
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '-200px',
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
                // style={{ background: 'black' }}

            >
                <div>
                        {/* <h2> Single Item</h2> */}
                        <Slider {...settings}>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 1.png"
                                    alt=""
                                    height="300"
                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 2.png"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 3.png"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 4.png"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 5.png"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 6.png"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 7.png"
                                    alt=""

                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 8.png"
                                    alt=""

                                />
                            </div>
                            {/* <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 1.pnghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAG-0Sn2iAIy23TnglFyiLnR4saCwXHyD02gfwS6FBf3CaRIqj-lN_h0hLFTBiwzOo64&usqp=CAU"
                                    alt=""

                                />
                            </div> */}
                            <div>
                                <img
                                    className="img-fluid"
                                    src="images/diseños/image 9.png"
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
