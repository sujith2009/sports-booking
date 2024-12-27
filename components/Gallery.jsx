import React, { useState, useEffect } from "react";
import GalleryCss from "../src/assets/css/Gallery.module.css";
import GalleryCarousel from "../pages/GalleryCarousel";

const Gallery = () => {
  return (
    <div style={{ backgroundColor: "#f1f3f2", paddingTop: "40px" }}>
      <div className="container px-5 py-3  bg-white rounded">
        <h4 className={`text pb-3 ${GalleryCss.MyGallery}`}>
          Our Sports Winner List
        </h4>
        {/*------------Carousel Slider------------*/}
        <GalleryCarousel />
      </div>
    </div>
  );
};

export default Gallery;
