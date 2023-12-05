import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import { STATE_LISTS, API_ENDPOINT } from "../../config/index";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

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

const names = [
  "Pipeline",
  "Overhead Tank / ESR",
  "Structure Work",
  "Electrical",
  "Mechanical",
  "Automation",
  "Tubewell ",
  "Road",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function SubContractor() {
  const theme = useTheme();
  const [state, setState] = React.useState("");
  const [stateData, setStateData] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [isApplying, setApply] = React.useState(false);
  const [typeofWork, setTypeOfWork] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const handleChange = (event) => {
    const stateInfo = STATE_LISTS.find(
      (state) => state.id === event.target.value
    );
    setStateData(stateInfo);
    setState(event.target.value);
  };
  const handleChangeForTypeofWork = (event) => {
    const {
      target: { value },
    } = event;
    setTypeOfWork(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleClose = () => {
    setOpen(false);
  };
  const sendEmail = async () => {
    try {
      setApply(true);
      const fileUploadData = new FormData();
      fileUploadData.append("typeOfWork", typeofWork.toString());
      fileUploadData.append("description", description);
      fileUploadData.append("name", name);
      fileUploadData.append("phone", phone);
      fileUploadData.append("email", email);
      fileUploadData.append("state", stateData.name);
      const defaultAPiLink = `${API_ENDPOINT}/subcontractor`;
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
  let disabledButton = true;
  if (
    name &&
    phone &&
    email &&
    name.length > 0 &&
    typeofWork &&
    typeofWork.length > 0 &&
    phone.length > 0 &&
    email.length > 0
  ) {
    disabledButton = false;
  }
  return (
    <div className="App" style={{ marginTop: "100px", marginBottom: "70px" }}>
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
      <Container>
        <InfoContainer>
          <TitleText>
            Subcontractor Information - Join Our Network of Qualified
            Contractors
          </TitleText>
          <SubTitleText>
            Are you a subcontractor looking for new opportunities? Look no
            further! LCEPL is actively seeking qualified subcontractors to join
            our network of trusted contractors. If you have expertise in
            construction, engineering, or other related fields, we want to hear
            from you! Fill out the form to contact us directly and learn more
            about the subcontracting opportunities available with LCEPL. Our
            team is committed to building strong relationships with our
            subcontractors, and we offer competitive rates, flexible scheduling,
            and ongoing support to help you succeed. Join our network today and
            take your career to the next level!
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select State
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state}
                label="Select State"
                onChange={handleChange}
              >
                {STATE_LISTS.map((state) => (
                  <MenuItem value={state.id}>{state.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              required
              label="Phone"
              fullWidth
              value={phone}
              type="number"
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextField
              required
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-chip-label">
                Type of Work
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                fullWidth
                value={typeofWork}
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
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, typeofWork, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12}>
            <TextField
              label="Description"
              fullWidth
              value={description}
              rows={3}
              multiline
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Type of Work"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          disabled={isApplying || disabledButton}
          onClick={sendEmail}
          sx={{ marginTop: "20px" }}
          endIcon={<ArrowForwardIosIcon />}
        >
          {isApplying ? "Applying..." : "Join Our Network"}
        </Button>
      </Container>
    </div>
  );
}
