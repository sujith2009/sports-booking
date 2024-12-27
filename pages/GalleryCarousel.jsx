import React, { useState, useEffect } from "react";
import GalleryCss from "../src/assets/css/Gallery.module.css";
import axios from "axios";

const GalleryCarousel = () => {
  const [details, setDetails] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/our-sports-get");
        setDetails(res.data);
      } catch (error) {
        console.log("Server Error", error);
      }
    };
    getDatas();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const chunkSize = isMobile ? 2 : 4;
    const chunkedCards = chunkCards(details, chunkSize); // Use `details` instead of `cards`
    setSlides(chunkedCards);
  }, [isMobile, details]);

  const chunkCards = (cards, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < cards.length; i += chunkSize) {
      chunks.push(cards.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className={`carousel-inner ${GalleryCss.carouselInner}`}>
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className={GalleryCss.carouselItems}>
              {slide.map((card) => (
                <div className={`card ${GalleryCss.cardCss}`} key={card._id}>
                  <img
                    src={card.imageUrl}
                    className="card-img-top"
                    alt={card.teamName}
                    height={"160px"}
                  />
                  <div className="card-body">
                    <h5
                      className={`card-title text-center ${GalleryCss.cardTeamName}`}
                    >
                      Team: {card.teamName}
                    </h5>
                    <h5
                      className={`card-title text-center ${GalleryCss.cardTeamName}`}
                    >
                      City: {card.teamCity}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className={`carousel-control-prev ${GalleryCss.carouselControlPrev}`}
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className={`carousel-control-prev-icon ${GalleryCss.carouselControlPrevIcon}`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={`carousel-control-next ${GalleryCss.carouselControlNext}`}
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className={`carousel-control-next-icon ${GalleryCss.carouselControlNextIcon}`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default GalleryCarousel;
