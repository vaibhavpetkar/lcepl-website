import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/LCEPL-resized-logo.png";

export default function Header() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("home");
  const [mobileView, setMobileView] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleChange = (event, newValue) => {
    if (window.location.pathname !== "/carrer" && newValue === "career") {
      navigate("/career");
    } else if (window.location.pathname !== "/csr" && newValue === "csr") {
      navigate("/csr");
    } else if (
      window.location.pathname === "/csr" ||
      window.location.pathname === "/carrer"
    ) {
      navigate("/");
    } else {
      setValue(newValue);
      const scrollElement = document.getElementById(newValue);
      if (scrollElement) {
        window.scrollTo({
          top: scrollElement.offsetTop - 10,
          behavior: "smooth",
        });
      }
    }
  };
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    const setPath = () => {
      if (window.location.pathname === "/career") {
        setValue("career");
      } else if (window.location.pathname === "/") {
        setValue("home");
      }
    };
    setPath();
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id) => {
    if (id) {
      if (window.location.pathname !== "/carrer" && id === "carrer") {
        navigate("/career");
      } else if (window.location.pathname !== "/csr" && id === "csr") {
        navigate("/csr");
      } else if (
        window.location.pathname === "/csr" ||
        window.location.pathname === "/carrer"
      ) {
        navigate("/");
      } else {
        const scrollElement = document.getElementById(id);
        if (scrollElement) {
          window.scrollTo({
            top: scrollElement.offsetTop - 10,
            behavior: "smooth",
          });
        }
      }
    }
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar sx={{ background: "white" }}>
        <Container>
          <Toolbar>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {mobileView && (
                  <IconButton
                    sx={{ color: "#448bb4", marginRight: "20px" }}
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => handleClose("home")}>Home</MenuItem>
                  <MenuItem onClick={() => handleClose("aboutus")}>
                    About Us
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("projects")}>
                    Projects
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("services")}>
                    Services
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("carrer")}>
                    Career
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("subcontractor")}>
                    SubContractor
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("contactus")}>
                    Contact Us
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("csr")}>CSR</MenuItem>
                </Menu>
                <img
                  src={Logo}
                  alt="LCEPl"
                  width={mobileView ? "200px" : "300px"}
                />
              </div>
              {!mobileView && (
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="wrapped label tabs example"
                >
                  <Tab value="home" label="Home" />
                  <Tab value="aboutus" label="About Us" />
                  <Tab value="projects" label="Projects" />
                  <Tab value="services" label="Services" />
                  <Tab value="career" label="Career" />
                  <Tab value="contactus" label="Contact Us" />
                  <Tab value="csr" label="CSR" />
                </Tabs>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
