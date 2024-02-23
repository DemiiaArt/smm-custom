import React from "react";
import Header from "../Containers/Header/Header.jsx";
import Footer from "../Containers/footer/Footer.jsx";
import Hero from "../Components/Hero_additional/Hero.jsx";
import Options from "../Components/Options/Options.jsx";
import MessageKurator from "../Components/MessageKurator/MessageKurator.jsx";

import { Outlet } from "react-router-dom";

export default function More() {
  return (
    <>
      <Header />
      <Hero />
      <Options />

      <Outlet />

      <MessageKurator />
      <Footer />
    </>
  );
}
