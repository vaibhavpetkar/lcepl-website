import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  margin-bottom: 20px;
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
export default function ProjectCard({ image, title, subtitle }) {
  return (
    <CardContainer>
      <img
        src={image}
        alt={title}
        width="100%"
        style={{ borderRadius: "10px 10px 0px 0px" }}
      />
      <div style={{padding: '10px'}}>
        <TitleText>{title}</TitleText>
        <SubTitleText>{subtitle}</SubTitleText>
      </div>
    </CardContainer>
  );
}
