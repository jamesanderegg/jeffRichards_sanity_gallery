import React, { useState } from "react";
import { graphql } from "gatsby";
import Nav from "../components/Nav";
import PaintingList from "../components/PaintingList";
import Categories from "../components/Categories";
import SEO from "../components/SEO";
import styled from "styled-components";
import Img from "gatsby-image";

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(100, 200px);
  grid-template-rows: repeat(4, 190px);
  max-width: 1100px;
  margin: auto;
  margin-top: 20px;
`;
const NavStyle = styled.div`
  
`;
const TitleCard = styled.div`
  color: var(--grey);
  margin: 20px;
  background-color: #7a0301;
  width: 800px;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
`;
const Title = styled.h2`
  font-style: italic;
  font-weight: bold;
  padding: 10px;
`;
const SubTitle = styled.h5`
  font-style: italic;
  margin: 10px;
  padding-bottom: 20px;
  padding-left: 25px;
`;
const ImageStyle = styled(Img)`
  grid-column: 4;
  grid-row: 1;
  min-height: 420px;
  min-width: 420px;
  margin-left: 40px;
  margin-top: 250px;
`;
const Description = styled.p`
  color: var(--grey);
  margin: 5px;
  margin-top: 100px;
  height: 350px;
  padding: 40px;
  background-color: #7a0301;
  grid-row: 2;
  grid-column: 1/4;
  z-index: 1;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
`;
const CategoryStyle = styled.div`
  grid-row: 4;
`;
const PaintingsStyle = styled.div`
  grid-row: 5;
`;

export default function Gallery({ data }) {
  const [category, setCategory] = useState("New Work");

  //sort gallery
  //function passed to categories component
  const clickCategory = (e) => {
    e.preventDefault();
    if (!e.target.id) {
      setCategory(e.target.parentElement.parentElement.parentElement.id);
    } else {
      setCategory(e.target.id);
    }
  };

  // console.log(data.allSanityPaintings);
  const paintings = data.allSanityPaintings.nodes;
  const categoriesList = [];
  const categoryImages = [];
  const sortedPaintings = [];
  paintings.forEach((element) => {
    if (element.categories[0]) {
      // get list of categories
      if (!categoriesList.includes(element.categories[0].title)) {
        categoriesList.push(element.categories[0].title);
        categoryImages.push(element.categories[0].categoryImage);
      }

      if (element.categories[0].title === category) {
        sortedPaintings.push(element);
      }
    }
  });
  // console.log(categories, categoryImages);

  return (
    <>
      <SEO title="Gallery Page" />
      <TopGrid>
        <NavStyle>
          <Nav />
        </NavStyle>
        <Title>
          <TitleCard>
            <Title>Galleries</Title>
            <SubTitle>
              Click a category below to sort my work. To find my newest work
              please click the image to the right.
            </SubTitle>
          </TitleCard>
        </Title>
        <ImageStyle fluid={paintings[6].image.asset.fluid} />
        <Description>
          These galleries show works inspired mostly by my interest in areas
          outside the normal discourse that takes place within the limiting
          parameters of the contemporary art world - meditation and spiritual
          discourse on the nature of conciousness, speculative scientific theory
          (the woo woo of it, so to speak), and the rather befuddling and
          provocative examples of contemporary and historical fugures who's
          lives challenge our assumptions. Also, of course, the rather
          befuddling and provocative experiences that pop up from time to time
          in my own life. To quote an inscription in Latin on the tomb of Carl
          Jung, "vocatus atgue non vocatus, deus aderit"; or in contemporary
          English, "called or not called, the gods rise".
        </Description>
      </TopGrid>
      <CategoryStyle>
        <Categories
          categoryList={categoriesList}
          categoryImages={categoryImages}
          clickCategory={clickCategory}
        />
      </CategoryStyle>
      <PaintingsStyle>
        <PaintingList paintings={sortedPaintings} />
      </PaintingsStyle>
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
            fluid(maxWidth: 1200) {
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
