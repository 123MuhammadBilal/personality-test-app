import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#2e937a",
          flexGrow: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexBasis: "60%",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            sx={{ height: 450, width: 410, margin: "50px 0px" }}
            src="https://personality-test-pd9c.vercel.app/static/media/test.fed0b2a7845988bd45204038a375f1f0.svg"
          />
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#dcdcdb",
                padding: "50px 30px",
                height: "80%",
                width: "75%",
                borderRadius: "15px",
              }}
            >
              <Box
                component="img"
                sx={{ height: 250, width: 250 }}
                src="https://personality-test-pd9c.vercel.app/static/media/Psychometric.07837013c10eefc2983f.png"
              />
              <Typography
                variant="h4"
                fontSize="19px"
                fontWeight="bold"
                color="#2e937a"
              >
                ARE YOU AN INTROVERT OR AN EXTROVERT?
              </Typography>
              <Typography
                variant="h6"
                fontSize="16px"
                fontWeight="bold"
                color="#5e5a38"
                padding="10px 0px"
              >
                Introverts are generally more sensitive to low-intensity stimuli
                - they are mentally alerted to inputs that extroverts may
                miss."-Laurie Helgoe.
              </Typography>
              <Button sx={{ bgcolor: "#2e937a" }} variant="primary">
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
