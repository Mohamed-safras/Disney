import React, { useState } from "react";
import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";
import SideBar from "../../components/SideBar";
import { Continer } from "./styled";

import OverleyC from "../../components/Overley";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Continer>
      <Header toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />

      <ImageSlider />
      <OverleyC isOpen={isOpen} toggle={toggle} />
    </Continer>
  );
};

export default Home;
