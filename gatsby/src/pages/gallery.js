import React from "react";
import { graphql } from "gatsby";
import Nav from "../components/Nav";
import PaintingList from "../components/PaintingList";

export default function Gallery({ data }) {
  console.log(data.allSanityPaintings.nodes);
  const paintings = data.allSanityPaintings.nodes;
  return (
    <div>
      <Nav />
      <p>Gallery Page</p>
      <PaintingList paintings={paintings} />
    </div>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 2) {
    allSanityPaintings(limit: $pageSize, skip: $skip) {
      nodes {
        title
        size
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              base64
              srcWebp
              srcSetWebp
            }
          }
        }
        categories {
          title
        }
      }
    }
  }
`;
