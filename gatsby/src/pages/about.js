import { graphql } from "gatsby";
import React from "react";
import Nav from "../components/Nav";
import Img from "gatsby-image";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;
const TitleCard = styled.div`
  color: var(--grey);
  background-color: #7a0301;
  margin: 2% 10px;
  margin-right: 40px;
  z-index: 1;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
`;
const Title = styled.h1`
  font-style: italic;
  font-weight: bold;
  padding: 10px;
`;
const StyleGrid = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: 0.4fr 0.6fr;
`;
const CenterImage = styled.div`
  grid-row: 1;
  grid-column: 4 / 60;
  margin-top: 3rem
`;
const PortraitCard = styled.div`
  grid-row: 1;
  grid-column: 62 / 100;
  height: 250px;
  margin-top: 2rem;
  color: var(--grey);
  background-color: #7a0301;
  z-index: 1;
  box-shadow: -30px 46px 4px rgba(0, 0, 0, 0.25);
`;
const PortraitStyle = styled.div`
  margin: 2rem;
  display: grid;
  height: 80%;
  grid-template-columns: 1fr 1fr;
`;
const ProtraitText = styled.p`
  text-align: center;
  margin: auto 4px;
  font-size: 15px;
`;

const LongImage = styled.div`
  border: 1px solid blue;
  grid-row: 2;
  margin: 30px 10px;
`;
const DescriptionCard = styled.div`
  grid-row: 2;
  grid-column: 3 / 63;
  margin-top: 2rem;
  color: var(--grey);
  background-color: #7a0301;
  z-index: 1;
  box-shadow: -30px 46px 4px rgba(0, 0, 0, 0.25);
`;
const ExhibitionsCard = styled.div`
  grid-row: 2;
  grid-column: 65 / 100;
  margin: 40px 0;
  color: var(--grey);
  background-color: #999999;
  box-shadow: -30px 46px 4px rgba(0, 0, 0, 0.25);
`;
const ExhibitText = styled.h5`
  color: #222222;
  padding: 15px;
`;
const AboutTitle = styled.h2`
  padding: 10px 12px;
`;
const TextStyle = styled.p`
  font-size: 14px;
  padding: 10px 12px;
`;
export default function About({ data }) {
  const aboutPage = data.allSanityAboutPage.nodes[0];
 
  return (
    <Wrapper>
      <TitleCard>
        <Title>{aboutPage.title}</Title>
      </TitleCard>
      <StyleGrid>
        <Nav />
        <CenterImage>
          <Img fluid={aboutPage.centerPainting[0].image.asset.fluid} />
        </CenterImage>
        <PortraitCard>
          <PortraitStyle>
            <ProtraitText>
              Standing next to a portrait by Sharon Brown, from her series "The
              Creators".
            </ProtraitText>
            <Img fluid={aboutPage.portrait[0].image.asset.fluid} />
          </PortraitStyle>
        </PortraitCard>
        <LongImage>
          <Img fluid={aboutPage.bottomPainting[0].image.asset.fluid} />
        </LongImage>
        <DescriptionCard>
          <AboutTitle>Jeff Richards - Some of the Story</AboutTitle>
          <TextStyle>
            Standing at the abyss of existential despair and the prospect of a
            mid-life crisis at the tender age of 35, Jeff Richards decided a 180
            degree turn was in order - he sold his cabinetmaking business and
            embarked on a lifelong dream of becoming an artist, taking 7 years
            to complete a BA degree in Studio Art at San Francisco State
            University and an MFA degree in Sculpture from the San Francisco Art
            Institute. He then spent the next 7 years unlearning everything he’d
            learned in art school, at which point he began the real work.
          </TextStyle>
          <TextStyle>
            There were two major crossroads on that path through the labyrinth
            of meaningful creativity. The first appeared when an artist friend
            approached him with a box of industrial sewing thread spools,
            thrusting it in his hands with the admonition “I’ve had these for 2
            years and I don’t know what to do with them, you give it a try!”.
            Being a sculptor, and having never sewn in his life, Richards
            promptly placed the box on a shelf and forgot about it – until one
            day a voice drew him back to the forgotten container, and he began
            idly playing with the strange material, never expecting much to come
            of it. 2 years later sewing thread was his primary medium, proving
            once again the value of secondary processes.
          </TextStyle>
          <TextStyle>
            The second crossroad followed a series of uncanny synchronicities -
            some painful, some magical - over a period of 9 months which, woven
            together into a web of fate, created a catalyst that manifested on
            August 18, 2008. All of the years of work, of laborious exploration,
            of deep mining within the psyche, suddenly alchemized and thrust him
            into creative warp drive. Nothing has been the same since.
          </TextStyle>
        </DescriptionCard>
        <ExhibitionsCard>
          {aboutPage.exhibitions.map((item, index) => (
            <ExhibitText key={`${item}-${index}`}>&#8226;{item.title} - {item.date} </ExhibitText>
          ))}
        </ExhibitionsCard>
      </StyleGrid>
    </Wrapper>
  );
}
export const query = graphql`
  query AboutPageQuery {
    allSanityAboutPage {
      nodes {
        title
        centerPainting {
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        portrait {
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
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        exhibitions {
          title
          date
        }
      }
    }
  }
`;
