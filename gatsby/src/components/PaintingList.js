import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const GalleryGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const GridItem = styled.div`
  &:nth-child(2){
    width: 300px;
  }
  &:nth-child(4){
    width: 300px;
  }
  &:nth-child(6){
    width: 300px;
  }
`;
const ImageStyle = styled(Img)`
  flex: auto;
  min-height: 250px;
  min-width: 250px;
  margin: 0 8px 8px 0;
`;

export default function PaintingList({ paintings }) {
  return (
    <GalleryGrid>
      {paintings.map((painting) => (
        <GridItem key={painting.slug.current}>
          <ImageStyle fluid={painting.image.asset.fluid} />
        </GridItem>
      ))}
    </GalleryGrid>
  );
}
