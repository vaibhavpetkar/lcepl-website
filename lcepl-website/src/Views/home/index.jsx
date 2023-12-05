import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Slider from "react-slick";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ServicesCard from "../../components/ServicesCard/index";
import ProjectCard from "../../components/ProjectCard/index";
import waterSupplyIcoin from "../../assets/003-water-supply.png";
import electricSubstationIcon from "../../assets/001-power-plant.png";
import roadsIcon from "../../assets/004-road.png";
import automationIcon from "../../assets/005-automation.png";
import sewageIcon from "../../assets/002-clean-water.png";
import electricSlide from "../../assets/electrical_substation_2-1.jpg";
import roadConstructionSlide from "../../assets/road-construction-update.jpg";
import sewageSlide from "../../assets/Sewage-WT1.jpg";
import welcomeSlide from "../../assets/Welcome-Slide.jpg";
import elevated_service_res_p4PJo from "../../assets/projects/elevated_service_res_p4PJo.jpg";
import Jack_wells from "../../assets/projects/Jack-wells.jpg";
import Non_conventional_water_treatment_plants from "../../assets/projects/Non-conventional-water-treatment-plants-.jpg";
import Pump_installations_Transmission_lines from "../../assets/projects/Pump-installations-Transmission-lines.jpg";
import Regional_water_supply_lift_irrigation_schemes from "../../assets/projects/Regional-water-supply-lift-irrigation-schemes.jpg";
import Reservoirs_Barrages_across_major_rivers from "../../assets/projects/Reservoirs-Barrages-across-major-rivers.jpg";
import roads from "../../assets/projects/Road-2-1024x678.jpg";
import water_treatment_plan_QDiP2 from "../../assets/projects/water_treatment_plan_QDiP2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_ENDPOINT } from "../../config";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

const TitleText = styled.p`
  font-weight: 600;
  font-size: 35px;
  color: #448bb4;
`;
const ContactUsTitleText = styled.p`
  font-weight: 600;
  font-size: 25px;
  margin-block-start: 10px;
  margin-block-end: 10px;
  color: #448bb4;
  border-bottom: 1px solid #ddd8e29e;
  width: 100%;
  padding-bottom: 10px;
`;
const SubTitleText = styled.span`
  font-size: 16px;
  color: #64676c;
  text-align: center;
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
const ContactUsCard = styled.div`
  border-radius: 10px;
  display: flex;
  padding: 0px 10px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
  margin-bottom: 20px;
`;
const PinContainer = styled.div`
  cursoo: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const projesct = [
  {
    title: "Water treatment plants",
    image: water_treatment_plan_QDiP2,
    subtitle:
      "We offer Drinking water solutions for your day to day requirements. We ensure that you get clean and pure drinking water from the supply pipeline installed by our company",
  },
  {
    title: "Jack wells / Intake wells",
    image: Jack_wells,
    subtitle:
      "We offer Drinking water solutions for your day to day requirements. We ensure that you get clean and pure drinking water from the supply pipeline installed by our company",
  },
  {
    title: "Elevated service reservoirs",
    image: elevated_service_res_p4PJo,
    subtitle:
      "We offer Drinking water solutions for your day to day requirements. We ensure that you get clean and pure drinking water from the supply pipeline installed by our company",
  },
  {
    title: "Roads",
    image: roads,
    subtitle:
      "We offer Drinking water solutions for your day to day requirements. We ensure that you get clean and pure drinking water from the supply pipeline installed by our company",
  },
  {
    title: "Non-conventional Water Treatment Plants",
    image: Non_conventional_water_treatment_plants,
    subtitle:
      "We offer Drinking water solutions for your day to day requirements. We ensure that you get clean and pure drinking water from the supply pipeline installed by our company",
  },
  {
    title: "Reservoirs & Barrages across major rivers",
    image: Reservoirs_Barrages_across_major_rivers,
    subtitle:
      "We offer Drinking water solutions for your day to day requirements. We ensure that you get clean and pure drinking water from the supply pipeline installed by our company",
  },
  {
    title: "Pump installations & Transmission lines",
    image: Pump_installations_Transmission_lines,
    subtitle:
      "We offer Drinking water solutions for your day to day requirements. We ensure that you get clean and pure drinking water from the supply pipeline installed by our company",
  },
  {
    title: "Regional water supply & lift irrigation schemes",
    image: Regional_water_supply_lift_irrigation_schemes,
    subtitle:
      "We offer Drinking water solutions for your day to day requirements. We ensure that you get clean and pure drinking water from the supply pipeline installed by our company",
  },
];
function App() {
  const navigate = useNavigate();
  const [contactUs, setsetContactUsData] = React.useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });
  const [isApplying, setApply] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settingsForProjects = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const scrollToProjects = () => {
    const scrollElement = document.getElementById("projects");
    if (scrollElement) {
      window.scrollTo({
        top: scrollElement.offsetTop - 10,
        behavior: "smooth",
      });
    }
  };
  const handleText = (event, type) => {
    setsetContactUsData({
      ...contactUs,
      [type]: event.target.value,
    });
  };
  let disabledButton = true;
  if (
    contactUs.name &&
    contactUs.name.length > 0 &&
    contactUs.email &&
    contactUs.email.length > 0
  ) {
    disabledButton = false;
  }
  const handleClose = () => {
    setOpen(false);
  };
  const onContactUs = async () => {
    try {
      setApply(true);
      const fileUploadData = new FormData();
      fileUploadData.append("name", contactUs.name);
      fileUploadData.append("email", contactUs.email);
      fileUploadData.append("subject", contactUs.subject);
      fileUploadData.append("message", contactUs.message);
      const defaultAPiLink = `${API_ENDPOINT}/getInTouch`;
      const settings = {
        method: "POST",
        body: fileUploadData,
      };
      const response = await fetch(defaultAPiLink, settings);
      const json = await response.json();
      if (json && json.success) {
        setOpen(true);
      }
      setApply(false);
    } catch (error) {
      console.error(error);
      setApply(false);
    }
  };
  return (
    <div className="App" style={{ marginTop: "70px", marginBottom: "70px" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        sx={{ boxShadow: "none" }}
        message="I love snacks"
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Query Submitted Successfully
        </Alert>
      </Snackbar>
      <div style={{ padding: "20px" }} id="home">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TitleText>
              Welcome To Laxmi Civil Engineering Services Pvt. Ltd.
            </TitleText>
            {false && (
              <SubTitleText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget augue eget tortor efficitur interdum. Etiam sollicitudin,
                massa ac vestibulum sodales, odio urna varius felis, id
                tincidunt lorem augue id sapien.
              </SubTitleText>
            )}
            <SubTitleText style={{ fontWeight: "800" }}>
              To work with LCEPL as a subcontractor, click "Get in Touch" to
              contact us directly.
            </SubTitleText>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              sx={{
                marginTop: "20px",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
            >
              <Button
                sx={{ whiteSpace: "nowrap" }}
                variant="contained"
                onClick={scrollToProjects}
                endIcon={<KeyboardArrowRightIcon />}
              >
                Explore Projects
              </Button>
              <Button
                sx={{ whiteSpace: "nowrap" }}
                variant="outlined"
                onClick={() => navigate('subcontractor')}
              >
                Get in Touch
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Slider {...settings}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={sewageSlide}
                  alt="slide1"
                  width="100%"
                  style={{
                    objectFit: "contain",
                    borderRadius: "25px",
                    boxShadow: "0 1px 5px 0 rgb(0 0 0 / 10%)",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={roadConstructionSlide}
                  alt="slide1"
                  width="100%"
                  style={{
                    objectFit: "contain",
                    borderRadius: "12px",
                    boxShadow: "0 1px 5px 0 rgb(0 0 0 / 10%)",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={electricSlide}
                  alt="slide1"
                  width="100%"
                  style={{
                    objectFit: "contain",
                    borderRadius: "12px",
                    boxShadow: "0 1px 5px 0 rgb(0 0 0 / 10%)",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={welcomeSlide}
                  alt="slide1"
                  width="100%"
                  style={{
                    objectFit: "contain",
                    borderRadius: "12px",
                    boxShadow: "0 1px 5px 0 rgb(0 0 0 / 10%)",
                  }}
                />
              </div>
            </Slider>
          </Grid>
        </Grid>
      </div>
      <Container>
        <div id="aboutus">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TitleText>About Us</TitleText>
              <SubTitleText>
                We have a finest blend of Architects, Civil, Structural,
                Mechanical, Electrical Engineers and Quantity Surveyors as the
                stamp of distinctive genius for clarity and precision in the
                projects we execute. The combination of the wide range of
                knowledge and experience in this field allows us for a creative
                and practical engineering solutions and implementations.We have
                grown exponentially and have always maintained commitment to
                provide the best craftsmanship and level of expertise to meet
                our client’s requirements. With over three decades of experience
                and a list of lucrative projects, Laxmi Civil Engineering
                Services Pvt. Ltd. is a name which is reckoned for quality,
                assurance, safety, reliability, timely services and engineering
                proficiency.
              </SubTitleText>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    ' <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_qcrbuch7.json" background="transparent" speed="1" style="width: 100%;" loop autoplay></lottie-player>',
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="xl">
        <div id="projects" sty>
          <TitleText>Our Projects</TitleText>
          <Slider {...settingsForProjects}>
            {projesct &&
              projesct.map((eachProject) => <ProjectCard {...eachProject} />)}
          </Slider>
        </div>
      </Container>
      <Container>
        <div id="services">
          <TitleText>Our Services</TitleText>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ServicesCard
                title="Water Supply Schemes"
                subtitle="We offer Drinking water solutions for your day to day requirements. We ensure that you get clean and pure drinking water from the supply pipeline installed by our company, we work in collaboration with government bodies to commission the installation, setup and maintenance of these pipelines. We have expanded the drinking water business by extending its geographical limits, covering town after town, district after district."
                image={waterSupplyIcoin}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ServicesCard
                title="Sewage Water Treatment"
                subtitle="We strive to maintain excellence and sustainability in the provision of potable water and the safe disposal of wastewater to the satisfaction of our customers whilst safeguarding health and the environment. We will seek to strengthen our workforce by introducing innovative products and services, complimentary to our core operations, in existent and potential markets."
                image={sewageIcon}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ServicesCard
                title="Lift Irrigation Scheme"
                subtitle="Construction of dams and canals helped tremendously to increase the irrigated area lying at lower level than the dam level, but scarcity of water remained the problem for higher level areas. In Lift Irrigation System water is lifted from lower level to higher level with the help of pumps and other equipments. We have constructed several dams and canals in collaboration with the government and our expertise make us stand apart and deliver the best."
                image={waterSupplyIcoin}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ServicesCard
                title="Roads"
                subtitle="The Roads & Bridges construction services that we present are simply outstanding and well appreciated among the clients for its engineering value and a defined way of infrastructure development and construction. The services that we render are based upon new age techniques, improvised machines and quality materials. Civil engineers with a sense of fine infrastructural development and a skill to use the tools and techniques effectively forms our team and come together at work to deliver their best. We adhere to all the standard norms and guidelines in order to maintain perfect and sturdy roads and bridges."
                image={roadsIcon}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ServicesCard
                title="Electrical Substation"
                subtitle="We have the necessary know-how and project experience for creating turnkey high-voltage installations. Depending on the job to be done, we take on responsibility for the whole project; from problem analysis and finding solutions to commissioning and handover to the customer. At Laxmil civil, We are able to provide a complete electrical Substation installation from high voltage switchgear and transformers to low voltage distribution circuits."
                image={electricSubstationIcon}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ServicesCard
                title="Instrumentation and Automation"
                subtitle="We deal in manufacturing and supply of Instrument control panels, Instrument automation, supply, erection & commissioning of Instrumentation works, Calibration works. repairs and services of field instruments & accessories related to process plants & machines, pressure & temperature controlling systems, Process indicators & controllers, testing & calibration equipment, transmitters, pressure – temperature level & flow handheld Instruments."
                image={automationIcon}
              />
            </Grid>
          </Grid>
        </div>
        <div id="contactus">
          <TitleText>Contact Us</TitleText>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ContactUsCard>
                <SubTitleText style={{ marginBottom: "20px" }}>
                  Say hello! Don’t be shy
                </SubTitleText>
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  fullWidth
                  onChange={(event) => handleText(event, "name")}
                  sx={{ marginBottom: "30px" }}
                  placeholder="Name"
                />
                <TextField
                  required
                  id="outlined-disabled"
                  label="Email"
                  fullWidth
                  type="email"
                  onChange={(event) => handleText(event, "email")}
                  sx={{ marginBottom: "30px" }}
                  placeholder="Email"
                />
                <TextField
                  required
                  id="outlined-disabled"
                  label="Subject"
                  fullWidth
                  onChange={(event) => handleText(event, "subject")}
                  sx={{ marginBottom: "30px" }}
                  placeholder="Subject"
                />
                <TextField
                  required
                  id="outlined-disabled"
                  label="Message"
                  fullWidth
                  multiline
                  onChange={(event) => handleText(event, "message")}
                  rows={4}
                  sx={{ marginBottom: "30px" }}
                  placeholder="Message"
                />
                <Button
                  disabled={isApplying || disabledButton}
                  variant="contained"
                  onClick={onContactUs}
                >
                  {isApplying ? "Processing..." : " Get in Touch"}
                </Button>
              </ContactUsCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    ' <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_2yqxcdkb.json" background="transparent" speed="1" style="width: 100%;" loop autoplay></lottie-player>',
                }}
              />
            </Grid>
          </Grid>
          <TitleText>Office Locations</TitleText>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContactUsCard>
                <ContactUsTitleText>Registered Office</ContactUsTitleText>
                <PinContainer>
                  <LocationOnIcon style={{ color: "#EA4335" }} />
                  <SubTitleText style={{ fontSize: "22px", color: "#448bb4" }}>
                    KOLHAPUR
                  </SubTitleText>
                </PinContainer>
                <SubTitleText>
                  1148, E. Sykes Extension, Kolhapur 416 001, Maharashtra,
                  India.
                </SubTitleText>
                <br />
                <SubTitleText>
                  Phone:{" "}
                  <SubTitleTextLink href="tel:02312686910">
                    0231-2686910/11
                  </SubTitleTextLink>
                </SubTitleText>
                <br />
                <SubTitleText>
                  Email:{" "}
                  <SubTitleTextLink href="mailto:laxmikop@lcepl.com">
                    laxmikop@lcepl.com
                  </SubTitleTextLink>
                </SubTitleText>
              </ContactUsCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContactUsCard>
                <ContactUsTitleText>Corporate Office</ContactUsTitleText>
                <PinContainer>
                  <LocationOnIcon style={{ color: "#EA4335" }} />
                  <SubTitleText style={{ fontSize: "22px", color: "#448bb4" }}>
                    KOLHAPUR
                  </SubTitleText>
                </PinContainer>
                <SubTitleText>
                  C.S.NO. 1031 / K2 , E Ward, 3rd Floor, Sterling Tower, Gavat
                  Mandai Road, Kolhapur-416001, Maharashtra, India.
                </SubTitleText>
                <br />
                <SubTitleText>
                  Phone:{" "}
                  <SubTitleTextLink href="tel:02312686910">
                    0231-2686910/11
                  </SubTitleTextLink>
                </SubTitleText>
                <br />
                <SubTitleText>
                  Email:{" "}
                  <SubTitleTextLink href="mailto:laxmikop@lcepl.com">
                    laxmikop@lcepl.com
                  </SubTitleTextLink>
                </SubTitleText>
              </ContactUsCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContactUsCard>
                <ContactUsTitleText>Branch Office</ContactUsTitleText>
                <PinContainer>
                  <LocationOnIcon style={{ color: "#EA4335" }} />
                  <SubTitleText style={{ fontSize: "22px", color: "#448bb4" }}>
                    PUNE
                  </SubTitleText>
                </PinContainer>
                <SubTitleText>
                  A.J. Residency” 5th Floor, Flat No. 502, S.No. 4711, Plot No.
                  6, Tawre Colony, Near Chougule Showroom, Pune-411009,
                  Maharashtra, India.
                </SubTitleText>
                <br />
                <SubTitleText>
                  Phone:{" "}
                  <SubTitleTextLink href="tel:02024217538">
                    020-24217538
                  </SubTitleTextLink>
                </SubTitleText>
                <br />
                <SubTitleText>
                  Email:{" "}
                  <SubTitleTextLink href="mailto:puneoffice@lcepl.com">
                    puneoffice@lcepl.com
                  </SubTitleTextLink>
                </SubTitleText>
              </ContactUsCard>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ContactUsCard>
                <ContactUsTitleText>Regional Office</ContactUsTitleText>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <PinContainer>
                      <LocationOnIcon style={{ color: "#EA4335" }} />
                      <SubTitleText
                        style={{ fontSize: "22px", color: "#448bb4" }}
                      >
                        Mumbai
                      </SubTitleText>
                    </PinContainer>
                    <SubTitleText>
                      F-1 / 6/ 4, Pariwar Society, Above Ramdev Hotel, Sector 4
                      / 5, Washi, Navi Mumbai -400703 Maharashtra
                    </SubTitleText>
                    <br />
                    <SubTitleText>
                      Phone:{" "}
                      <SubTitleTextLink href="tel:02227825181">
                        022-27825181
                      </SubTitleTextLink>
                    </SubTitleText>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <PinContainer>
                      <LocationOnIcon style={{ color: "#EA4335" }} />
                      <SubTitleText
                        style={{ fontSize: "22px", color: "#448bb4" }}
                      >
                        Banglore
                      </SubTitleText>
                    </PinContainer>
                    <SubTitleText>
                      32/1, Vasistha Paradise 1st Temple Road, between 10 & 11th
                      cross, Near Canara bank, Kondandarampuram, Malleshwaram,
                      Bangalore - 560 003 Karnataka
                    </SubTitleText>
                    <br />
                    <SubTitleText>
                      Phone:{" "}
                      <SubTitleTextLink href="tel:08023440303">
                        080-23440303
                      </SubTitleTextLink>
                    </SubTitleText>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <PinContainer>
                      <LocationOnIcon style={{ color: "#EA4335" }} />
                      <SubTitleText
                        style={{ fontSize: "22px", color: "#448bb4" }}
                      >
                        NAGPUR
                      </SubTitleText>
                    </PinContainer>
                    <SubTitleText>
                      244, 2nd Floor, Hill Road, Narayani House, Ram Nagar,
                      Dharampeth Extension, Nagpur – 440010, Maharashtra, India
                    </SubTitleText>
                    <br />
                    <SubTitleText>
                      Phone:{" "}
                      <SubTitleTextLink href="tel:07122244099">
                        0712 -2244099 / 2244299
                      </SubTitleTextLink>
                    </SubTitleText>
                    <br />
                    <SubTitleText>
                      Email:{" "}
                      <SubTitleTextLink href="mailto:nagpuroffice@lcepl.com">
                        nagpuroffice@lcepl.com
                      </SubTitleTextLink>
                    </SubTitleText>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <PinContainer>
                      <LocationOnIcon style={{ color: "#EA4335" }} />
                      <SubTitleText
                        style={{ fontSize: "22px", color: "#448bb4" }}
                      >
                        Bhopal
                      </SubTitleText>
                    </PinContainer>
                    <SubTitleText>
                      E-3/165, Arera Colony, BHOPAL-462016, Madhya Pradesh
                    </SubTitleText>
                    <br />
                    <SubTitleText>
                      Phone:{" "}
                      <SubTitleTextLink href="tel:07554294995">
                        0755-4294995
                      </SubTitleTextLink>
                    </SubTitleText>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <PinContainer>
                      <LocationOnIcon style={{ color: "#EA4335" }} />
                      <SubTitleText
                        style={{ fontSize: "22px", color: "#448bb4" }}
                      >
                        GOA
                      </SubTitleText>
                    </PinContainer>
                    <SubTitleText>
                      Flat No. 201, 2nd Floor, “DUKALE HEAVEN” Tambadi Mati,
                      Taligaon, Panaji-403 003. Goa
                    </SubTitleText>
                    <br />
                    <SubTitleText>
                      Phone:{" "}
                      <SubTitleTextLink href="tel:08322421861">
                        0832-2421861
                      </SubTitleTextLink>
                    </SubTitleText>
                    <br />
                    <SubTitleText>
                      Email:{" "}
                      <SubTitleTextLink href="mailto:goa@lcepl.com">
                        goa@lcepl.com
                      </SubTitleTextLink>
                    </SubTitleText>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <PinContainer>
                      <LocationOnIcon style={{ color: "#EA4335" }} />
                      <SubTitleText
                        style={{ fontSize: "22px", color: "#448bb4" }}
                      >
                        BELGAUM
                      </SubTitleText>
                    </PinContainer>
                    <SubTitleText>
                      111, Mangalwar Peth, TilakWadi, Belgaum Karnataka
                    </SubTitleText>
                    <br />
                    <SubTitleText>
                      Phone:{" "}
                      <SubTitleTextLink href="tel:08312421501">
                        0831-2421501
                      </SubTitleTextLink>
                    </SubTitleText>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <PinContainer>
                      <LocationOnIcon style={{ color: "#EA4335" }} />
                      <SubTitleText
                        style={{ fontSize: "22px", color: "#448bb4" }}
                      >
                        CHHATTISGARH
                      </SubTitleText>
                    </PinContainer>
                    <SubTitleText>
                      Flat No. 202, Kashi Apartment, Geetanjali Nagar, Raipur-
                      492001 Chattisgarh
                    </SubTitleText>
                    <br />
                    <SubTitleText>
                      Phone:{" "}
                      <SubTitleTextLink href="tel:07714050216">
                        0771 – 4050216
                      </SubTitleTextLink>
                    </SubTitleText>
                  </Grid>
                </Grid>
              </ContactUsCard>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
