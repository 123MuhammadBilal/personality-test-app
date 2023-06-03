import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Result = (props) => {
  const location = useLocation();

  return (
    <>
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
            wrap: "warp",
          }}
        >
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
                {location.state ? location.state : "Result"}
              </Typography>
              <Typography
                variant="h6"
                fontSize="16px"
                fontWeight="bold"
                color="#5e5a38"
                padding="10px 0px"
              >
                An introvert is a person with qualities of a personality type
                known as introversion, which means that they feel more
                comfortable focusing on their inner thoughts and ideas, rather
                than what's happening externally. They enjoy spending time with
                just one or two people, rather than large groups or crowds
              </Typography>
              <Button sx={{ bgcolor: "#2e937a" }} variant="primary">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={() => {
                    props.totalScore.length = 0;
                  }}
                  to={"/"}
                >
                  Rest!
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Result;