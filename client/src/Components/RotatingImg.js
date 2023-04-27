import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const images = [
  "/pictures/maison.png",
  "/pictures/minutieux.png",
  "/pictures/innovation.png",
  "/pictures/tranquilité.png",
];

const RotatingImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowImage(false);
      setTimeout(() => {
        if (currentIndex === images.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        setShowImage(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <Container>
      <Img
        src={images[currentIndex]}
        alt=""
        style={{ opacity: showImage ? 1 : 0 }}
      />
    </Container>
  );
};

const Img = styled.img`
  width: 100vw;
  height: 600px;
  object-fit: cover;
  margin: 0;
  transition: opacity 1s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin: 0;
`;

export default RotatingImg;


