import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import csrImg from "../../assets/csr.png";
import CSRCommitteee from '../../assets/csr/Composition of CSR Committeee.docx';
import CSRPolicy from "../../assets/csr/CSR Policy (1).docx";
import CSRExpenditure from "../../assets/csr/CSR Expenditure Policy &  Report_2020-21 Received Final.doc";

const TitleText = styled.p`
  font-weight: 600;
  font-size: 35px;
  color: #448bb4;
`;
const SubTitleText = styled.p`
  font-size: 16px;
  margin: 0px;
  color: #64676c;
  text-align: left;
  line-height: 1.6;
`;
const SubTitleTextLi = styled.li`
  font-size: 16px;
  color: #64676c;
  text-align: left;
  line-height: 1.6;
`;

const SubTitleTextLink = styled.a`
  font-size: 16px;
  color: #64676c;
  line-height: 1.6;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: #448bb4;
  }
`;
export default function Csr() {
  return (
    <div className="App" style={{ marginTop: "100px", marginBottom: "70px" }}>
      <Container>
        <Grid container spacing={3} sx={{ marginTop: "20px" }} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              src={csrImg}
              alt="lcepl csr"
              width="100%"
              style={{ borderRadius: "20px" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TitleText>CORPORATE SOCIAL RESPONSIBILITY</TitleText>
            <SubTitleText>
              Company recognizes that as a Corporate Entity, it has to adopt a
              balanced strategy benefiting the business it is in and the society
              in which it operates.
            </SubTitleText>
            <br />
            <SubTitleText>
              Company understands it’s accountability and consequently care in a
              responsible manner for the social issues which are relevant in the
              environment and geographical location where it operates.
            </SubTitleText>
            <br />
            <SubTitleText>
              Company fully commits to contribute its part for enhancing social,
              economic, & environmental issues which are relevant at different
              points of time through the following
            </SubTitleText>
            <ul>
              <SubTitleTextLi>
                Effective deployment of the affordable resources we can make
                available
              </SubTitleTextLi>
              <SubTitleTextLi>
                Enlisting the support of Strategic partners who are experienced
                in the class of service we choose to offer
              </SubTitleTextLi>
              <SubTitleTextLi>
                Use of technology for the efficient use of resources
              </SubTitleTextLi>
            </ul>
            <TitleText style={{ fontSize: "25px", textAlign: "left" }}>
              CSR Reposts
            </TitleText>
            <Stack direction="column" alignItems="flex-start">
              <SubTitleTextLink href={CSRExpenditure} target="_blank">
                CSR Expenditure Policy & Report_2020-21 (click to download/view)
              </SubTitleTextLink>
              <SubTitleTextLink href={CSRPolicy} target="_blank">
                CSR Policy (click to download/view)
              </SubTitleTextLink>
              <SubTitleTextLink href={CSRCommitteee} target="_blank">
                CSR Committee (click to download/view)
              </SubTitleTextLink>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
