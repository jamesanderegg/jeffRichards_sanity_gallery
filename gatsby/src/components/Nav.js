import React from 'react';
import { Link } from 'gatsby';
// Link allows html push state
import styled from 'styled-components';

const ButtonStyle = styled.li`
  margin: 5px 0;
  color: var(--grey);
  background-color: #242424;
  height: 35px;
  width: 150px;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
  :hover {
    background-color: black;
  }
  border-bottom: dotted white 1px;
`;
const StyledLink = styled((props) => <Link {...props} />)`
  color: var(--grey);
  text-decoration: none;
  font-size: 18px;
`;
const ButtonText = styled.span`
  margin: auto;
`;

export default function Nav() {
  return (
    <nav>
      <ul>
        <StyledLink to="/">
          <ButtonStyle>
            <ButtonText>Home</ButtonText>
          </ButtonStyle>
        </StyledLink>
        <StyledLink to="/about">
          <ButtonStyle>
            <ButtonText>About</ButtonText>
          </ButtonStyle>
        </StyledLink>
        <StyledLink to="/contact">
          <ButtonStyle>
            <ButtonText>Contact</ButtonText>
          </ButtonStyle>
        </StyledLink>
        <StyledLink to="/gallery">
          <ButtonStyle>
            <ButtonText>Gallery</ButtonText>
          </ButtonStyle>
        </StyledLink>
        <StyledLink to="/blog">
          <ButtonStyle>
            <ButtonText>Blog</ButtonText>
          </ButtonStyle>
        </StyledLink>
        <StyledLink to="/gallery">
          <ButtonStyle>
            <ButtonText>New Works</ButtonText>
          </ButtonStyle>
        </StyledLink>
      </ul>
    </nav>
  );
}
