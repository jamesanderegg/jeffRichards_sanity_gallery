import React from "react";
import { graphql } from "gatsby";
import Nav from "../components/Nav";
import PaintingList from "../components/PaintingList";
import SEO from "../components/SEO";

export default function Gallery({ data }) {
  // console.log(data.allSanityPaintings);
  const paintings = data.allSanityPaintings.nodes;
  const categories = [];
  const categoryImages = [];
  paintings.forEach((element) => {
    if (element.categories[0]) {
      if (!categories.includes(element.categories[0].title)) {
        categories.push(element.categories[0].title);
        categoryImages.push(element.categories[0].categoryImage);
      }
    }
  });
  // console.log(categories, categoryImages);
  return (
    <>
      <SEO title="Gallery Page" />
      <Nav />
      <p>Gallery Page</p>

      <PaintingList paintings={paintings} />
    </>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 40) {
    allSanityPaintings(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        title
        description
        size
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        categories {
          title
          categoryImage {
            image {
              asset {
                fluid(maxWidth: 100) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
