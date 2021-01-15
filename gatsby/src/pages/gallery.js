import React from 'react';
import { graphql } from 'gatsby';
import Nav from '../components/Nav';

export default function Gallery({ data }) {
  console.log(data);
  return (
    <div>
      <Nav />
      <p>Gallery Page</p>
    </div>
  );
}

export const query = graphql`
  query PaintingQuery {
    paintings: allSanityPaintings {
      nodes {
        title
        size
        circle
        image {
          asset {
            fluid(maxHeight: 10) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
