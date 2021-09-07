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
      <PageTitleBox />
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
            {/* <div className="col-lg-6">
              <div className="banner-frame">
              <img
              className="img-thumbnail img-fluid"
              src="images/nosotros/11.jpg"
              alt=""
              />
              </div>
            </div> */}
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
          {/* <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
            <div className="service-block-inner">
            <h3>We are Trusted</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            </div>
            <div className="col-sm-6 col-lg-4">
            <div className="service-block-inner">
            <h3>We are Professional</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            </div>
            <div className="col-sm-6 col-lg-4">
            <div className="service-block-inner">
            <h3>We are Expert</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            </div>
            </div>
          <OurTeam /> */}
          {/* <Servicios /> */}
        </div>
      </div>
      <FormWork />


    </>
  );
}
