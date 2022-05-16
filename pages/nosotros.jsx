import React from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import OurTeamLoader from "../components/OurTeam/OurTeamLoader";
import Acreditacion from "../components/Acreditacion/Acreditacion"
import FormWork from "../components/FormWork/FormWork"
import Servicios from "../components/Servicios/Servicios"
//import OurTeam from "";

const OurTeam = dynamic(
  () => import("../components/OurTeam/OurTeam.container"),
  {
    loading: () => <OurTeamLoader />,
    ssr: false,
  }
);

export default function About() {
  return (
    <>
      <PageTitleBox/>
      <div className="container">
        <div class="row justify-content-center">
            <div className="col-12">
              <h1 className="titulo-principal">ICAMAR</h1>
            </div>
            <p className="subtitulo b-b-3px-cp">Urbanización e Infraestructura</p>
        </div>
        <div className="row justify-content-center mt-5">
          <ul class="list-group">
            <li class="list-group-item item-ul-activo" aria-current="true">
              <i className="fa fa-check"></i>
              Obras Marítimas
            </li>
            <li class="list-group-item">
              <i className="fa fa-check"></i>
              Vias Ferreas
            </li>
            <li class="list-group-item">
              <i className="fa fa-check"></i>
              Pavimentación y Asfalto
            </li>
            <li class="list-group-item">
              <i className="fa fa-check"></i>
              Terracerías
            </li>
            <li class="list-group-item">
              <i className="fa fa-check"></i>
              Infraestructura
            </li>
            <li class="list-group-item">
              <i className="fa fa-check"></i>
              Buceo Ind.
            </li>
            <li class="list-group-item">
              <i className="fa fa-check"></i>
              Mantenimiento a Equipos Electrónico Marino
            </li>
            <li class="list-group-item">
              <i className="fa fa-check"></i>
              Mantenimiento Naval
            </li>
            <li class="list-group-item">
              <i className="fa fa-check"></i>
              Revestimiento
            </li>
            <li class="list-group-item">
              <i className="fa fa-check"></i>
              Alumbrado Público
            </li>
          </ul>
        </div>
      </div>
      <div className="about-box-main">
        <div className="container">
          <h2 className="noo-sh-title">
            <span>NOSOTROS</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="noo-sh-title">
                Misión
              </p>
              <p>
                Bien y a la primera, garantizado nuestro trabajo, con la calidad que nos distingue, apoyándonos en nuestra experiencia de más de 30 años en el mercado laboral, teniendo como referencia nuestros trabajos realizados a las distintas empresas y organizaciones , tanto públicas como privadas.
              </p>
              <p className="noo-sh-title">
                Visión
              </p>
              <p>
                Ser siempre de las primeras empresas en el rubro de la construcción, manteniendo nuestros estándares de calidad a la vanguardia, llendo de la mano con el avance tecnológico en todos nuestros proyectos y mantenernos en constante crecimiento ingresando a nuevos mercados, incluso internacionales.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                <span></span>
              </h2>
              <p>
              </p>
              <p>
              </p>
            </div>
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                <span></span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <FormWork/>
    </>
  );
}
