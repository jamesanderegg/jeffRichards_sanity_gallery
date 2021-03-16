import React, { useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const GalleryGrid = styled.div`
  padding: 6vh 16vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export default function PaintingList({ paintings, isOpen, clickPainting }) {
  return (
    <GalleryGrid>
      {paintings.map((painting) => (
        <Painting
          title={painting.title}
          size={painting.size}
          slug={painting.slug}
          fluid={painting.image.asset.fluid}
          key={painting.slug.current}
          isOpen={isOpen}
          clickPainting={clickPainting}
        />
      ))}
    </GalleryGrid>
  );
}

const Tile = styled.div`
  margin: 15px;
  cursor: pointer;
  overflow: hidden;
  width: 18vw;
  height: 18vw;
  &:hover {
    box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
  }
  img {
    width: 100%;
    transition: transform 2ms ease;
  }
`;

function Painting({ title, size, slug, fluid, isOpen, clickPainting }) {
  const [open, setOpen] = useState(false);

  let clickStyles = {};

  if (open) {
    clickStyles = {
      width: "62vw",
      position: "absolute",
      left: "50%",
      margin: "0",
      marginTop: "-50vw",
      marginLeft: "-31vw",
      boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
      transform: "none",
      zIndex: "5",
    };
  } else {
    clickStyles = {
      width: "18vw",
      height: "18vw",
    };
  }
  let textStyles = {};

  if (open) {
    textStyles = {
      maxWidth: "90px",
      color: "white",
      position: "absolute",
      left: "5%",
      top: "0%",
      zIndex: "6",
    };
  } else {
    textStyles = {
      display: "none",
    };
  }

  const clickHandler = (e) => {
    e.preventDefault();
    if (open === false) {
      clickPainting();
      setOpen(true);
    } else {
      clickPainting();
      setOpen(false);
    }
  };

  let textInformation;
  if (isOpen) {
    textInformation = (
      <div style={textStyles}>
        <h1>{title}</h1>
        <h2>{size}</h2>
      </div>
    );
  }
  return (
    <>
      <Tile onClick={clickHandler} id={slug} title={title}>
        <Img fluid={fluid} style={clickStyles} />
        {textInformation}
      </Tile>
    </>
  );
}
