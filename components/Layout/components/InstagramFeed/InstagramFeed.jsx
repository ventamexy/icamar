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
       <section className="seccion"
                // style={{ background: 'black' }}

            >
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
    
    // <div className="instagram-box">
    //   <div className="main-instagram owl-carousel owl-theme">
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://cdn.homedepot.com.mx/productos/140576/140576-d.jpg" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://static.grainger.com/rp/s/is/image/Grainger/3AZN8_AS01?$glgmain$" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://cdn.homedepot.com.mx/productos/500492/500492-a1.jpg" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://caterpillar.scene7.com/is/image/Caterpillar/CM20130721-58340-56745?$pcc-pdp2$" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_960,h_960/https://calentadoresdelta.com/wp-content/uploads/2018/10/solar-960x960.jpg" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://images.ssstatic.com/lamparas-de-calle-led-240w-130lm-w-150lm-w-9517850z0-090433138.jpg" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://image.made-in-china.com/202f0j10njrTmWbhHzUY/China-Hot-Sale-3D-Curved-PVC-Welded-Wire-Fencing-Ebay-Amazon.jpg" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://ambientesoluciones.com/wenv/file_image.php?id=5968&w=0&h=0&jpg=1&download=" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://cdn.shopify.com/s/files/1/2997/4738/products/REFRIGERADOR_INDUSTRIAL_2_PUERTAS_46ft_CRT_GLOBAL_MBF8507@2x.jpg?v=1572540063" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://www.assets.signify.com/is/image/PhilipsLighting/ae47d7f65cd94e629517aa5400e288d6?clipPathE=legacy_path&$pnglarge$" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div> */}
    //     <div className="item">
    //       <div className="ins-inner-box">
    //         <img src="https://lh3.googleusercontent.com/proxy/dv4gFbVOJvsjxZ8r394QZt5tv0muk81Jtk7A9mfeqhMGIv4RAazNEBL7m8moM_iIHfGMFCKepzvevfeDvUO0PukZbTaaLOCjAMAlsQ8k6QeqS0zQOeHL-cI-cLz9_Yyb3xnn4UrfFQt7L5kolByTVio" alt="" />
    //         <div className="hov-in">
    //           <a href="#">
    //             <i className="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
