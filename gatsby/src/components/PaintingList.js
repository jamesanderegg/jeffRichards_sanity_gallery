import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const PaintingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

export default function PaintingList({ paintings }) {
  return (
    <PaintingGrid>
      {paintings.map((painting) => (
        <div key={painting.slug.current}>{painting.title}</div>
      ))}
    </PaintingGrid>
  );
}
