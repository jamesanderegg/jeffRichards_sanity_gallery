import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const CategoryGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 20px auto;
  max-width: 1100px;
`;
const CategoryItem = styled.div`
  margin: 15px;
  padding: 10px;
  background-color: white;
`;
const OverLay = styled.div`
  background-color: #7a0301;
  transition: 0.4s;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
  z-index: 4;
  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    z-index: 4;
    background-color: #440101;
  }
`;
const Item = styled.div`
  text-align: center;
  font-size: 18px;
  color: black;
  height: 40px;
  padding: 10px;
`;
const ImageStyle = styled(Img)`
  height: 90px;
  min-width: 90px;
  margin: auto;
`;
const Categories = ({ categoryList, categoryImages, clickCategory }) => {
  return (
    <CategoryGrid>
      {categoryList.map((item, i) => (
        <OverLay id={item} key={`${item}-category`} onClick={clickCategory}>
          <CategoryItem id={item}>
            <Item id={item}>{item}</Item>
            <ImageStyle fluid={categoryImages[i][0].image.asset.fluid} />
          </CategoryItem>
        </OverLay>
      ))}
    </CategoryGrid>
  );
};

export default Categories;
