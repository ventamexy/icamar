import React from "react";
import useTranslation from 'next-translate/useTranslation';
// import Image from 'next/image';

export default function Gallery() {
  let { t } = useTranslation()
  // setTimeout('document.location.reload()',10000);
    const images = [
     
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Walt_Disney_Studios_Alameda_Entrance.jpg",
      "https://www.redusers.com/noticias/wp-content/uploads/2019/01/LG.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Googleplex_HQ_%28cropped%29.jpg",
      "https://www.mundiario.com/media/mundiario/images/2017/09/22/2017092205534396035.jpg",
      "https://cloudfront-eu-central-1.images.arcpublishing.com/larazon/MBMS5IGJ5RHGNKLGTWNNF3YNZU.jpg",
      "https://www.ecestaticos.com/image/clipping/10d39c860cac36c9cc5be9fb1f6a71e2/walmart-sanea-su-holding-fantasma-espanol-con-115-millones-del-negocio-en-argentina.jpg",
      "https://www.krones.cn/media/images/02_201606JE01_0063_Preview_Layout.jpg",
    ];

    
  
    return (
      <div className="about-box-main">
      
      <div className="container">
        <h2 className="noo-sh-title">{t("common:titleGallery")}</h2>
        <div className="swiper-container mySwiper2 color-nav">
          <div className="swiper-wrapper">
          {images.map((pic)=>
          <div className="swiper-slide" >
            <img 
              src={pic}
              width={1000}
              height={600}
              />
            
              {/* {pic} */}
            </div>
          )}
          </div> 
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
        <div  className="swiper-container mySwiper">
          <div className="swiper-wrapper">
              {images.map((pic)=>
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