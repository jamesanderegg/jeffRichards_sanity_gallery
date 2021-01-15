import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

export default function Footer() {
  return (
    <Wrapper>
      <p> &copy; 2021 Jeff Richards</p>
    </Wrapper>
  );
}
