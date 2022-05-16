import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>ICAMAR</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link
            rel="shortcut icon"
            href="images/logos/logo.png"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="" />
          {/* Mapa */}
          <link rel="stylesheet" href="/css/leaflet.css"/>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link 
          rel="stylesheet" 
          type="text/css" 
          href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
          <link 
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/responsive.css" />
          <link rel="stylesheet" href="/css/custom.css" />
          <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
          rel="stylesheet"/>
          <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
          <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
            {/* Mapa */}
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossorigin="anonymous"></script>
            <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
            <script src="https://wowjs.uk/dist/wow.min.js" />
            <script>
              new WOW().init();
            </script>
            <script src="/js/jquery-3.2.1.min.js"></script>
            <script src="/js/popper.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/jquery.superslides.min.js"></script>
            <script src="/js/bootstrap-select.js"></script>
            <script src="/js/inewsticker.js"></script>
            <script src="/js/bootsnav.js."></script>
            <script src="/js/images-loded.min.js"></script>
            <script src="/js/isotope.min.js"></script>
            <script src="/js/owl.carousel.min.js"></script>
            <script src="/js/baguetteBox.min.js"></script>
            <script src="/js/form-validator.min.js"></script>
            <script src="/js/contact-form-script.js"></script>
            <script src="/js/custom.js"></script>
            <script src="/js/mapa.js"></script>
            <script src="/js/swipe.js"></script>
            {/* Página de Facebook */}
            <div id="fb-root"></div>
            <script 
            async 
            defer 
            crossorigin="anonymous" 
            src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v10.0&appId=502654373424425&autoLogAppEvents=1" 
            nonce="IFGieTT6"></script>
            <script 
            type="text/javascript" 
            src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
            <link 
            rel="stylesheet" 
            type="text/css" 
            charset="UTF-8" 
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link 
            rel="stylesheet" 
            type="text/css" 
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <script src="http://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
