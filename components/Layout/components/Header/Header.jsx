import React from "react";
import Link from "next/link";

import TopBar from "../TopBar/TopBar";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItemsCount = useSelector((state) => state.cart.length);
  return (
    <>
      <TopBar />
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-default bootsnav">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="/">
                <img src="/images/logos/logo.png" 
                className="logo" 
                alt=""  
                height={90}/>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Inicio</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/nosotros">
                    <a className="nav-link">Nosotros</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link"
                  href="/galeria">Galeria</a>
                </li>
                <li className="nav-item">
                  <Link href="/contacto">
                    <a className="nav-link">Contacto</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
