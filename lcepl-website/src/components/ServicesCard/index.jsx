import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
`;
const ImageContainer = styled.div`
  box-shadow: 0px 10px 30px -4px rgb(0 0 0 / 15%);
  border-radius: 50%;
  padding: 10px;
  width: fit-content;
`;
const TitleText = styled.p`
  font-weight: 800;
  font-size: 20px;
  color: #448bb4;
`;
const SubTitleText = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #808080;
`;
export default function ServicesCard({ image, title, subtitle }) {
  const [showMore, toggleShow] = React.useState(false);
  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt={title} width="70px" />
      </ImageContainer>
      <TitleText>{title}</TitleText>
      <SubTitleText>
        {subtitle.slice(0, 200)}
        {showMore && <span>{subtitle.slice(200)}</span>}
      </SubTitleText>
      <Button onClick={() => toggleShow(!showMore)} sx={{marginTop: '20px'}}>
        {showMore ? "Read Less..." : "Read More..."}
      </Button>
    </CardContainer>
  );
}
