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

export default function PaintingList({ paintings }) {
  return (
    <GalleryGrid>
      {paintings.map((painting) => (
        <Painting
          fluid={painting.image.asset.fluid}
          key={painting.slug.current}
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
  img {
    width: 100%;
    transition: transform 500ms ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

function Painting({ fluid }) {
  const [open, setOpen] = useState(false);

  let clickStyles = {};

  if (open) {
    clickStyles = {
      width: "62vw",
      height: "62vw",
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "0",
      marginTop: "-31vw",
      marginLeft: "-31vw",
      boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
      transform: "none",
      zIndex: "1",
    };
  } else {
    clickStyles = {
      width: "18vw",
      height: "18vw",
    };
  }

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("hi");
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <Tile onClick={clickHandler}>
      <Img fluid={fluid} style={clickStyles} />
    </Tile>
  );
}
