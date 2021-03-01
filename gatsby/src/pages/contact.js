import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import Nav from "../components/Nav";

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  border: 1px solid blue;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(10, 280px);
`;
const TitleCard = styled.h1`
  grid-area: 1 / 1 / 2 / 40;
  color: var(--grey);
  font-style: italic;
  font-weight: bold;
  padding: 10px;
  background-color: #7a0301;
  margin: 60px 20px;
  z-index: 1;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavStyle = styled.div`
  grid-column: 5 / 10;
  grid-row: 1/2;
  margin-top: 230px;
  z-index: 1;
`;
const TopImage = styled.div`
  grid-column: 40 / 98;
  grid-row: 1 /2;
  margin-top: 40px;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
`;
const BottomImage = styled.div`
  grid-column: 1 / 32;
  margin-top: 230px;
  grid-row: 2.5;
`;
const FormCard = styled.div`
  grid-row: 2 /4;
  grid-column: 36 / 100;
  max-height: 350px;
  display: grid;
  border: 1px solid red;
  margin: 40px 0;
  color: var(--grey);
  z-index: 1;
  background-color: #999999;
  box-shadow: -30px 46px 4px rgba(0, 0, 0, 0.25);
`;

export default function Contact({ data }) {
  const contactPage = data.allSanityContactPage.nodes[0];

  console.log(contactPage);
  return (
    <Wrapper>
      <TitleCard>Contact Jeff</TitleCard>
      <TopImage>
        <Img fluid={contactPage.topPainting[0].image.asset.fluid} />
      </TopImage>
      <NavStyle>
        <Nav />
      </NavStyle>
      <FormCard>{contactPage.name}</FormCard>
      <BottomImage>
        <Img fluid={contactPage.bottomPainting[0].image.asset.fluid} />
      </BottomImage>
    </Wrapper>
  );
}

export const query = graphql`
  query ContactPageQuery {
    allSanityContactPage {
      nodes {
        name
        id
        email
        address
        phoneNumber
        topPainting {
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        bottomPainting {
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
