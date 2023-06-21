import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../images/brain.png";
import bgImage from "../images/bg.png";
const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:"no-repeat",
        flexGrow: "1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexBasis: "85%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#ffffff40",
              padding: "50px 30px",
              height: "80%",
              width: "95%",
              borderRadius: "15px",
              opacity: 0.9,
              borderLeft: '3px solid #11c4e0',
              borderRight: '6px solid #ffca3c',
              borderBottom:' 6px solid #ffca3c',
              borderTop:' 1px solid #11c4e0',
            }}
          >
            <Box
              component="img"
              sx={{ height: 300, width: 370, opacity: 0.8 }}
              src={img}
            />
            <Typography
              variant="h4"
              fontSize="19px"
              fontWeight="bold"
              color="#11c4e0"
            >
              ARE YOU AN INTROVERT OR AN EXTROVERT?
            </Typography>
            <Typography
              variant="h6"
              fontSize="16px"
              fontWeight="bold"
              color="#ffca3c"
              padding="10px 0px"
            >
              Introverts prefer to work independently, and solitude can be a
              catalyst to innovation.
            </Typography>
            <Button
              sx={{
                outline: '0',
                gridGap: '8px',
                alignItems: 'center',
                border: '1px solid #11c4e0',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'inline-flex',
                flexShrink: '0',
                fontSize: '16px',
                gap: '8px',
                justifyContent: 'center',
                lineHeight: '1.5',
                overflow: 'hidden',
                padding: '12px 16px',
                textDecoration: 'none',
                textOverflow: 'ellipsis',
                transition: 'all .14s ease-out',
                whiteSpace: 'nowrap',
                bgcolor: '#11c4e0',
                "&:hover": {
                  boxShadow: '4px 4px 0 #11c4e0',
                },
                "&:active":{
                  outlineOffset: '1px',
                }
              }}
              variant="primary"
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/questions"}
              >
                {" "}
                Let's Evaluate!{" "}
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
