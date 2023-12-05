import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { styled as CustomStyles } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { API_ENDPOINT } from "../../config";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});
const Input = CustomStyles("input")({
  display: "none",
});

const CardContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
`;
const TitleText = styled.p`
  font-weight: 800;
  font-size: 20px;
  color: #448bb4;
  margin-block-start: 5px;
  margin-block-end: 5px;
`;
const SubTitleText = styled.span`
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  color: #808080;
`;
const SubTitleTextForJobs = styled.span`
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  color: #808080;
`;
const TitleTextForJob = styled.p`
  font-weight: 800;
  font-size: 17px;
  color: #448bb4;
  margin-block-start: 5px;
  margin-block-end: 5px;
`;
const Hr = styled.div`
  background: #a4a4a459;
  border-radius: 1px;
  transform: matrix(1, 0, 0, -1, 0, 0);
  width: 100%;
  height: 1px;
  margin: 10px 0px;
`;
export default function OpeningCard({
  title,
  jobSpecification,
  qualificaiton,
  industry,
  experience,
  location,
  noOfOpenings,
  jobId,
}) {
  const [showMore, toggleShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [isApplying, setApply] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [resume, setResume] = React.useState(null);
  const sendEmail = async () => {
    try {
      setApply(true);
      const fileUploadData = new FormData();
      fileUploadData.append("file", resume);
      fileUploadData.append("name", name);
      fileUploadData.append("position", title);
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
  const handleFile = (event) => {
    setResume(event.target.files[0]);
  };
  let disabledButton = true;
  if (name.length > 0) {
    disabledButton = false;
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CardContainer key={`${title}-${jobId}`}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        sx={{ boxShadow: "none" }}
        message="I love snacks"
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Applied Successfully !!
        </Alert>
      </Snackbar>
      <TitleText>{title}</TitleText>
      <Hr />
      <Grid container spacing={3} justifyContent="center">
        {qualificaiton && (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SubTitleTextForJobs>Qualification</SubTitleTextForJobs>
            <TitleTextForJob>{qualificaiton}</TitleTextForJob>
          </Grid>
        )}
        {industry && (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SubTitleTextForJobs>Industry</SubTitleTextForJobs>
            <TitleTextForJob>{industry}</TitleTextForJob>
          </Grid>
        )}
        {experience && (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SubTitleTextForJobs>Experience</SubTitleTextForJobs>
            <TitleTextForJob>{experience}</TitleTextForJob>
          </Grid>
        )}
        {location && (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SubTitleTextForJobs>Location</SubTitleTextForJobs>
            <TitleTextForJob>{location}</TitleTextForJob>
          </Grid>
        )}
        {noOfOpenings && noOfOpenings > 1 && (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SubTitleTextForJobs>Openings</SubTitleTextForJobs>
            <TitleTextForJob>{noOfOpenings}</TitleTextForJob>
          </Grid>
        )}
      </Grid>
      <Hr />
      {jobSpecification && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TitleTextForJob
            style={{
              alignSelf: "flex-start",
              marginBottom: "10px",
            }}
          >
            Job Specification
          </TitleTextForJob>
          <SubTitleText>
            {jobSpecification.slice(0, 200)}
            {showMore && <span>{jobSpecification.slice(200)}</span>}
          </SubTitleText>
          {jobSpecification.length > 200 && (
            <Button
              onClick={() => toggleShow(!showMore)}
              sx={{ marginTop: "20px" }}
            >
              {showMore ? "Read Less..." : "Read More..."}
            </Button>
          )}
        </div>
      )}
      <div style={{ width: "100%", marginTop: "20px" }}>
        <TextField
          required
          size="small"
          label="Name"
          fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
          sx={{ marginBottom: "20px" }}
          placeholder="Name"
        />
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
              id={jobId}
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
            {isApplying ? "Applying..." : `Apply for ${title.slice(0, 15)}...`}
          </Button>
        </Stack>
      </div>
    </CardContainer>
  );
}
