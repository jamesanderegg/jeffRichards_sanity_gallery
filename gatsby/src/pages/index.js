import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Nav from "../components/Nav";
import SEO from "../components/SEO";
const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;
const TopGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(100, 1fr);
  margin: 20px 80px;
`;
const TitleCard = styled.div`
  color: var(--grey);
  background-color: #7a0301;
  grid-row: 1;
  grid-column: 1/60;
  margin: 2% 0;
  margin-right: 40px;
  z-index: 1;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
`;
const TitleImage = styled.div`
  grid-row: 1;
  grid-column: 50 / 101;
`;
const Title = styled.h1`
  font-style: italic;
  font-weight: bold;
  padding: 10px;
`;
const SubTitle = styled.h2`
  font-style: italic;
  padding-left: 25px;
`;
const SecondRow = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  max-width: 900px;
  margin: auto;
`;
const NavStyle = styled.div`
  grid-row: 1;
  grid-column: 1/8;

  z-index: 1;
`;
const CenterImage = styled.div`
  grid-row: 1;
  grid-column: 7/17;
  margin-top: 13px;
  margin-right: 30px;
`;
const ImageDesctription = styled.div`
  color: var(--grey);
  margin-top: -30px;
  background-color: #7a0301;
  grid-row: 1;
  grid-column: 16/24;
  z-index: 1;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
`;
const TextStyle = styled.p`
  padding: 4px 15px;
  font-size: 15px;
`;
const ThirdRow = styled.div`
  display: grid;
  margin: 40px;
  grid-template-columns: repeat(24, 1fr);
  max-width: 800px;
  margin: 40px auto;
`;
const MainContent = styled.div`
  color: var(--grey);
  margin-top: -40px;
  background-color: #7a0301;
  grid-row: 1;
  grid-column: 1/12;
  z-index: 1;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
`;
const BottomImage = styled.div`
  grid-row: 1;
  grid-column: 13/25;
`;
export default function HomePage({ data }) {
  console.log(data.homepage.nodes[0]);
  return (
    <>
      <SEO title="Home Page" />
      <Wrapper>
        <TopGrid>
          <TitleCard>
            <Title>{data.homepage.nodes[0].title}</Title>
            <SubTitle>{data.homepage.nodes[0].subTitle}</SubTitle>
          </TitleCard>
          <TitleImage>
            <Img fluid={data.homepage.nodes[0].topRight[0].image.asset.fluid} />
          </TitleImage>
        </TopGrid>
        <SecondRow>
          <NavStyle>
            <Nav />
          </NavStyle>
          <CenterImage>
            <Img
              fluid={data.homepage.nodes[0].centerPainting[0].image.asset.fluid}
            />
          </CenterImage>
          <ImageDesctription>
            <TextStyle>{data.homepage.nodes[0].centerDescription}</TextStyle>
          </ImageDesctription>
        </SecondRow>
        <ThirdRow>
          <MainContent>
            <TextStyle>
              Welcome to Hexagonart, the internet home of Jeff Richards, a
              Denver , Colorado based Visual Artist.
            </TextStyle>
            <TextStyle>
              Inside you'll find galleries of my art and a blog where I write
              about the thoughts, reveries and speculations that inform my work.
              In the "About Me" page I list current and future exhibitions and
              events I'll be taking part in.
            </TextStyle>
            <TextStyle>
              f you have further interest in my work, or care to comment or
              respond to my blog, please email me at:
            </TextStyle>
            <TextStyle>hexagonart@gmail.com</TextStyle>
          </MainContent>
          <BottomImage>
            <Img
              fluid={data.homepage.nodes[0].bottomPainting[0].image.asset.fluid}
            />
          </BottomImage>
        </ThirdRow>
      </Wrapper>
    </>
  );
}
export const query = graphql`
  query HomePageQuery {
    homepage: allSanityHomePage {
      nodes {
        title
        subTitle
        topRight {
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        centerDescription
        centerPainting {
          image {
            asset {
              fluid(maxWidth: 400) {
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
