import React from "react";
import styled from "styled-components";
import { styled as CustomStyles } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormControl from "@mui/material/FormControl";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { API_ENDPOINT } from "../../config/index";

import OpeningCard from "../../components/OpeningCard";

const Input = CustomStyles("input")({
  display: "none",
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const TitleText = styled.p`
  font-weight: 600;
  font-size: 25px;
  text-align: left;
  color: #448bb4;
`;
const SubTitleText = styled.span`
  font-size: 16px;
  color: #64676c;
  text-align: left;
  line-height: 1.6;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const openings = [
  {
    title: "Assistant Project Manager",
    jobSpecification:
      "Should have experience in water supply/irrigation projects of pipeline, project Management ",
    qualificaiton: "Mtech,/Btech/BE Civil",
    experience: "12 Years",
    location: "Sangli",
    jobId: 0,
    noOfOpenings: 4,
  },
  {
    title: "Billing & Planning Engineer",
    jobSpecification:
      "Should have experience in departmental Billing, subcontractor billing  for Water Supply/Irrigation projects. ",
    qualificaiton: "Mtech,/Btech/BE Civil+NICMAR ",
    experience: "5 Years",
    location: "Sangli",
    jobId: 1,
    noOfOpenings: 6,
  },
   {
    title: "Engineer QA/QC",
    jobSpecification:
      "Should have experience in water supply/irrigation in quality control, ensuring proper inspection, verifying the various QC tests, installation of QC procedures, QC audits.",
    qualificaiton: "Btech/BE Civil",
    experience: "5-7 Years",
    location: "Sangli",
    jobId: 2,
    noOfOpenings: 4,
  },
  {
    title: "Jr.& Sr. Engineer (Structure)",
    jobSpecification:
      "Should have structural experience in water supply/irrigation, pump house, MBR and pipeline work ",
    qualificaiton: "B Tech/BE Civil",
    experience: "3-10 Years",
    location: "Sangli",
    jobId: 3,
    noOfOpenings: 12,
  },
  {
    title: "Jr.Engineer (Pipeline)",
    jobSpecification:
      "Should have experience in water supply/irrigation of MS, HDPE pipelines etc. ",
    qualificaiton: "BE/Diploma Civil",
    experience: "3-5 Years",
    location: "Sangli",
    jobId: 4,
    noOfOpenings: 6,
  },
  {
    title: "Supervisor (Structure)",
    jobSpecification:
      "Should have structural experience in water supply/irrigation, pump house, MBR and pipeline work",
    qualificaiton: "HSC and above",
    experience: "3-5 Years",
    location: "Sangli",
    jobId: 5,
    noOfOpenings: 8,
  },
  {
    title: "Supervisor (Pipeline)",
    jobSpecification:
      "Should have experience in water supply/irrigation of pipeline",
    qualificaiton: "HSC and above/ITI",
    experience: "3-5 Years",
    location: "Sangli",
    jobId: 6,
    noOfOpenings: 8,
  },
  {
    title: "Store & Account Executive",
    jobSpecification:
      "Should have experience in water supply/irrigation of pipeline in store management, accounting, computer and Tally",
    qualificaiton: "B Com/M Com",
    experience: "5-7 Years",
    location: "Sangli",
    jobId: 7,
    noOfOpenings: 2,
  },
  {
    title: "Lab Assistant/Technician",
    jobSpecification:
      "Should have experience in water supply/irrigation projects in various routine tests like slump test, concrete test, Cube test, Flow test etc.",
    qualificaiton: "Diploma in Civil",
    experience: "3-5 Years",
    location: "Sangli",
    jobId: 8,
    noOfOpenings: 2,
  },
  {
    title: "Liasonar",
    jobSpecification:
      "Should have experience in liasoning with various government departments, maintain the relations",
    qualificaiton: "Any Graduate",
    experience: "5 Years",
    location: "Sangli",
    jobId: 9,
    noOfOpenings: 2,
  },
  {
    title: "HR & Admin Executive",
    jobSpecification:
      "Should have experience in Human Resource dept., project site administration work, manpower management",
    qualificaiton: "Any Graduate",
    experience: "3 Years",
    location: "Sangli",
    jobId: 10,
    noOfOpenings: 2,
  },
  {
    title: "Insurance Executive",
    jobSpecification:
      "Should have experience in project insurance, WC policy, quotation, negotiation, co-ordination with insurance companies, clients, claim follow-up, claim record maintaining",
    qualificaiton: "Any Graduate",
    experience: "3-5 Years",
    location: "Kolhapur",
    jobId: 11,
    noOfOpenings: 2,
  },
  {
    title: "Assistant-Accounts",
    jobSpecification:
      "Having good knowledge.of GST ,Income Tax, T.D.S. provisions.",
    qualificaiton: "Any Graduate",
    experience: "2-3 Years",
    location: "Kolhapur",
    jobId: 12,
    noOfOpenings: 4,
  },
];
export default function Career() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [isApplying, setApply] = React.useState(false);
  const [resume, setResume] = React.useState(null);
  const [positions, setPositions] = React.useState([]);
  const handleFile = (event) => {
    setResume(event.target.files[0]);
  };
  const handleChangeForTypeofWork = (event) => {
    const {
      target: { value },
    } = event;
    setPositions(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const sendEmail = async () => {
    try {
      setApply(true);
      const fileUploadData = new FormData();
      fileUploadData.append("file", resume);
      fileUploadData.append("name", name);
      fileUploadData.append("experience", experience);
      fileUploadData.append("qualification", qualification);
      fileUploadData.append("location", location);
      fileUploadData.append("position", positions.toString());
      const defaultAPiLink = `${API_ENDPOINT}/apply`;
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
  const handleClose = () => {
    setOpen(false);
  };
  let disabledButton = true;
  if (name.length > 0 && resume) {
    disabledButton = false;
  }
  return (
    <div className="App" style={{ marginTop: "100px", marginBottom: "70px" }}>
      <Container>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={handleClose}
          sx={{ boxShadow: "none" }}
          message="I love snacks"
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Applied Successfully !!
          </Alert>
        </Snackbar>
        <InfoContainer>
          <TitleText>Career in LCEPL :</TitleText>
          <SubTitleText>
            A career at LCEPL is an opportunity that enables an individual to
            create an identity for self, carefully amalgamating the best of
            experience practices, skills, knowledge and enabling the portrayal
            of a dynamic profile which can be proudly carried forward. From
            Water Supply to Lift Irrigation, STP to WTP, there are enough
            opportunities for our employees to build their careers, as we race
            to be among the most successful infrastructure companies on the
            continent.
          </SubTitleText>
        </InfoContainer>
        <InfoContainer>
          <TitleText>Opportunities :</TitleText>
          <SubTitleText>
            The pan-India presence of LCEPL and our blazing growth in business
            provides ample opportunities for our employees to build careers with
            LCEPL, opportunities have never been a constraint for the deserving,
            as ours is a company where Potential and Performance have formed the
            pillars of career progression.
          </SubTitleText>
          <br />
          <SubTitleText>
            We believe in employee growth that goes beyond vertical movement,
            and foster an environment where everyone has opportunities for
            growth and elevation to higher cadres. We also provide our employee
            the benefit of diverse project location, in order to facilitate a
            better understanding of our business and enhance their personal and
            professional growth.
          </SubTitleText>
        </InfoContainer>
        <InfoContainer>
          <TitleText>Current Openings :</TitleText>
          <SubTitleText>
            LCEPL is constantly adding value to its team through ongoing
            recruitments, as our presence becomes larger and our perspective
            wider. We believe our entity is a human corporate and that the
            greatest asset of our institution is our employee. This is why there
            is always space in our organization for talent and outstanding
            skills. Join us and know the true feel of excellence created for our
            workforce.
          </SubTitleText>
          <br />
          <SubTitleText>
            Look below if you can fit in and we will evaluate your profile for
            the best considerations.
          </SubTitleText>
        </InfoContainer>
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              required
              label="Name"
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              label="Experience"
              fullWidth
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
              placeholder="Name"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              label="Qualification"
              fullWidth
              value={qualification}
              onChange={(event) => setQualification(event.target.value)}
              placeholder="Name"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              label="Location"
              fullWidth
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Name"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-chip-label">Positions</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                fullWidth
                value={positions}
                onChange={handleChangeForTypeofWork}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {openings.map((name) => (
                  <MenuItem
                    key={name.title}
                    value={name.title}
                    style={getStyles(name.title, positions, theme)}
                  >
                    {name.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              justifyContent="center"
            >
              <label>
                <Input type="file" onChange={handleFile} />
                <Button
                  variant="outlined"
                  component="span"
                  // id={jobId}
                  startIcon={<PictureAsPdfIcon />}
                >
                  Upload Resume
                </Button>
              </label>
              <Button
                variant="contained"
                disabled={isApplying || disabledButton}
                onClick={sendEmail}
                endIcon={<ArrowForwardIosIcon />}
              >
                {isApplying ? "Applying..." : `Apply for Positions`}
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <TitleText style={{ fontSize: "18px", marginTop: "40px" }}>
          Explore the openings below if you want to apply Individually to each
          Opening
        </TitleText>
        {openings && openings.length > 0 && (
          <Grid container spacing={3} sx={{ marginTop: "20px" }}>
            {openings.map((eachOpening) => (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <OpeningCard
                  {...eachOpening}
                  key={`${eachOpening.jobId}-${eachOpening.title}`}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}
