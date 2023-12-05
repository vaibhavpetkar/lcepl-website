import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import logo from '../../assets/logo.png'

const FooterDiv = styled.div`
  background: #f5f9fb;
  padding-bottom: 20px;
`;
const TitleText = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: #448bb4;
`;
const SubTitleText = styled.span`
  font-size: 16px;
  color: #64676c;
  line-height: 1.6;
`;
const SubTitleTextLink = styled.a`
  font-size: 16px;
  color: #64676c;
  line-height: 1.6;
  text-decoration: none;
  &:hover {
    color: #448bb4;
  }
`;
export default function Footer() {
  return (
    <FooterDiv>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={3} md={3} lg={3}>
            <TitleText>Contact Us</TitleText>
            <SubTitleText>
              1148, E. Sykes Extension, Kolhapur 416 001, Maharashtra, India.
            </SubTitleText>
            <br />
            <br />
            <SubTitleText>
              Phone:{" "}
              <SubTitleTextLink href="tel:02312521554">
                0231-2521554, 2683900
              </SubTitleTextLink>
            </SubTitleText>
            <br />
            <br />
            <SubTitleText>
              Email:{" "}
              <SubTitleTextLink href="mailto:laxmikop@lcepl.com">
                laxmikop@lcepl.com
              </SubTitleTextLink>
            </SubTitleText>
          </Grid>
          <Grid item sm={3} md={3} lg={3}>
            <TitleText>Our Services</TitleText>
            <SubTitleText>Civil Construction</SubTitleText>
            <br />
            <br />
            <SubTitleText>Survey and Preliminary Studies</SubTitleText>
            <br />
            <br />
            <SubTitleText>Supply of Equipments</SubTitleText>
            <br />
            <br />
            <SubTitleText>Installations and Commissioning</SubTitleText>
            <br />
            <br />
            <SubTitleText>Operation and Maintenance Services.</SubTitleText>
          </Grid>
          <Grid item sm={3} md={3} lg={3}>
            <TitleText>More Links</TitleText>
            <SubTitleTextLink href="#home">Home</SubTitleTextLink>
            <br />
            <br />
            <SubTitleTextLink href="#aboutus">About Us</SubTitleTextLink>
            <br />
            <br />
            <SubTitleTextLink href="#projects">Projects</SubTitleTextLink>
            <br />
            <br />
            <SubTitleTextLink href="#services">Services</SubTitleTextLink>
            <br />
            <br />
            <SubTitleTextLink href="/career">Career</SubTitleTextLink>
            <br />
            <br />
            <SubTitleTextLink href="#contactus">Contact Us</SubTitleTextLink>
            <br />
            <br />
            <SubTitleTextLink href="/subcontractor">
              SubContractor
            </SubTitleTextLink>
          </Grid>
          <Grid item sm={3} md={3} lg={3}>
            <img
              src={logo}
              alt="lcepl"
              width="70px"
              style={{ marginBottom: "20px", marginTop: "20px" }}
            />
            <div>
              <SubTitleText>
                With over three decades of experience and a list of lucrative
                projects,
              </SubTitleText>
              <TitleText style={{ fontSize: "18px" }}>
                Laxmi Civil Engineering Services Pvt. Ltd.
              </TitleText>
            </div>
          </Grid>
        </Grid>
      </Container>
    </FooterDiv>
  );
}
