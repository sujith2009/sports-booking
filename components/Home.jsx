import React from "react";
import Oursports from "../components/Oursports";
import Gallery from "../components/Gallery";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      {/*--Header--*/}
      <Header />
      <Oursports />
      <Gallery />
    </div>
  );
};

export default Home;
