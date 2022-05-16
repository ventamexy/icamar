import React from "react";
// import useTranslation from 'next-translate/useTranslation';
// import Image from 'next/image';

export default function Gallery() {

  const images = [
    "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://www.berdinodiaz.com/wp-content/uploads/2019/06/empresa.jpg",
    "http://qualityconstructora.com/wp-content/uploads/2015/02/ind.jpg",
    "https://www.aceroform.com.mx/wp-content/uploads/2020/10/banner-construccion-1024x679.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwz_rmia3YmtDGg-6TL-Xz4TWs6f6RucEIw&usqp=CAU",
    "https://andujarynavarro.com/wp-content/uploads/2019/01/EMPRESA-CONSTRUCTORA-1030x380.jpg",
  ];

  return (
    <div className="about-box-main">

      <div className="container">
        <div className="swiper-container mySwiper2 color-nav">
          <div className="swiper-wrapper">
            {images.map((pic) =>
              <div className="swiper-slide" >
                <img
                  src={pic}
                  width={1000}
                  height={600}
                />
              </div>
            )}
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
        <div className="swiper-container mySwiper">
          <div className="swiper-wrapper">
            {images.map((pic) =>
              <div className="swiper-slide" >
                <img
                  src={pic}
                  width={500}
                  height={400}
                />
                {/* {pic} */}
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
         html,
         body {
           position: relative;
           height: 100%;
         }
   
         body {
           background: #eee;
           font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
           font-size: 14px;
           color: #000;
           margin: 0;
           padding: 0;
         }
   
         .swiper-container {
           width: 100%;
           height: 100%;
         }
   
         .swiper-slide {
           text-align: center;
           font-size: 18px;
           background: #fff;
   
           /* Center slide text vertically */
           display: -webkit-box;
           display: -ms-flexbox;
           display: -webkit-flex;
           display: flex;
           -webkit-box-pack: center;
           -ms-flex-pack: center;
           -webkit-justify-content: center;
           justify-content: center;
           -webkit-box-align: center;
           -ms-flex-align: center;
           -webkit-align-items: center;
           align-items: center;
         }
   
         .swiper-slide img {
           display: block;
           width: 100%;
           height: 100%;
           object-fit: cover;
         }
   
         body {
           background: #000;
           color: #000;
         }
   
         .swiper-container {
           width: 100%;
           height: 300px;
           margin-left: auto;
           margin-right: auto;
         }
   
         .swiper-slide {
           background-size: cover;
           background-position: center;
         }
   
         .mySwiper2 {
           height: 80%;
           width: 100%;
         }
   
         .mySwiper {
           height: 20%;
           box-sizing: border-box;
           padding: 10px 0;
         }
   
         .mySwiper .swiper-slide {
           width: 25%;
           height: 100%;
           opacity: 0.4;
         }
   
         .mySwiper .swiper-slide-thumb-active {
           opacity: 1;
         }
   
         .swiper-slide img {
           display: block;
           width: 100%;
           height: 100%;
           object-fit: cover;
         }
         `}
        </style>
      </div>
    </div>
  );
}