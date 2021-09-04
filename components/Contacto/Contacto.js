import React from 'react';

const Contacto = () => {
    return (
        <div>
            <section class="contenedor seccion">
                <h2 class="fw-300 centrar-texto">Contáctanos</h2>
                {/* <!-- <div id="mapa" class="mapa"></div> --> */}
                <p>Dirección: Nicolás Bravo 341, Centro, Cd. L. Cárdenas, Mich., MX.</p>
                <p>Teléfonos: +52 (753) 537 1349, +52 (753) 181 1195 y +52 (753) 168 3407. </p>
                <p>Correo: 
                    <a href="mailto:info@icamar.com">info@icamar.com</a><br/>
                    <a href="mailto:construccionlc@yahoo.com">construccionlc@yahoo.com</a>
                </p>

                 {/* <nav class="redes-sociales">
                        <a target="_blank" href="https://www.facebook.com/AlbercasLC/"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=7531683407&amp;text=Hola!&nbsp;me&nbsp;pueden&nbsp;apoyar?"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>
                        <a target="_blank" href="https://www.instagram.com/friopolarhl/"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                </nav>  */}
            </section>
        </div>
    );
}

export default Contacto;
