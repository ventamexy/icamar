import React, { Component } from 'react'
import HeroSlider from "../components/HeroSlider/HeroSlider";
// import ShopCategories from "../components/ShopCategories/ShopCategories.container";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Mapa from "../components/Mapa/Mapa";
import Contacto from "../components/Contacto/Contacto";
import ServiciosCalentadores from "../components/Servicios/ServiciosCalentadores";
import ServiciosCalentadoresSolares from "../components/Servicios/ServiciosCalentadoresSolares";
import PageTitleBox from "../components/PageTitleBox/PageTitleBox";
import Info from "../components/Info/Info";
import Iconos from "../components/Iconos/Iconos";
import ProductsFeed from "../components/ProductsFeed/ProductsFeed";
import FormWork from "../components/FormWork/FormWork";
// import InstagramFeed from "../components/Layout/components/InstagramFeed/InstagramFeed";
// import RecipeCard from "../components/RecipeCard/RecipeCard";
import FlipCard from "../components/FlipCard/FlipCard";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <Info />
      {/* <FlipCard /> */}

      <Iconos />
      {/* <ProductsFeed /> */}

      {/* <ShopCategories /> */}
      <PageTitleBox />
      {/* <ServiciosCalentadores /> */}
      {/* <ServiciosCalentadoresSolares /> */}
      {/* <FeaturedProducts /> */}
      {/* <InstagramFeed /> */}
      <Mapa />
      <FormWork />
      <Contacto />
      {/* <ProductsFeed /> */}
    </>
  );
}
