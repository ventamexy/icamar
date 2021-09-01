import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>
      {/* <InstagramFeed /> */}
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-widget">
                  <h4>SOBRE PLAFONMEXY</h4>
                  <p>
                    Nicolás  Bravo 341, Centro, Cd. L. Cárdenas, Mich, Mx.
                    <br />
                    Horarios de atención.
                    <br />
                    Lunes a viernes de 7:00am a 8:00pm.
                    <br />
                    Sábados de 7:00am a 2:00pm.
                    <br />
                    Teléfonos:<br />+52 (753) 537 1349  <br />+52 (753) 181 1195  <br />+52 (753) 168 3407.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fab fa-google-plus"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fab fa-pinterest-p"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li> */}
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link">
                  <h4>ÚLTIMAS PUBLICACIONES</h4>
                  <div class="fb-page" data-href="https://www.facebook.com/Plafonmexy-106015155145559" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Plafonmexy-106015155145559" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Plafonmexy-106015155145559">Plafonmexy</a></blockquote></div>
                  {/* <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-link-contact">
                  <h4>VISITANOS EN NUESTROS SITIOS WEB</h4>
                  <ul>
                    <li>
                      <p>
                        <i className="fas fa-globe"></i>
                        <a href="https://icamar.com /">
                          www.icamar.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-globe"></i>{" "}
                        <a href="https://construriomar.com">
                          www.construriomar.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-globe"></i>{" "}
                        <a href="https://albercasdelmar.com">
                          www.albercasdelmar.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-globe"></i>{" "}
                        <a href="https://friopolar.com">
                          www.friopolar.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-globe"></i>{" "}
                        <a href="https://pozosriomar.com">
                          www.pozosriomar.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-globe"></i>{" "}
                        <a href="https://georiomar.com">
                          www.georiomar.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-globe"></i>{" "}
                        <a href="https://hlconstrucciones.com">
                          www.hlconstrucciones.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-globe"></i>{" "}
                        <a href="https://mantenimientomicasa.com">
                          www.mantenimientomicasa.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fas fa-globe"></i>{" "}
                        <a href="https://ingenieriaconstrumex.com">
                          www.ingenieriaconstrumex.com
                        </a>
                      </p>
                    </li>
                  </ul>



                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterCopyright />
    </>
  );
}
