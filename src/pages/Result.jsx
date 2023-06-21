import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import img from "../images/brain.png";
import bgImage from "../images/bg.png";
const Result = ({ totalScore }) => {
  const location = useLocation();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#11c4e0",
          flexGrow: "1",
          backgroundImage: `url(${bgImage})`,
          backgroundPosition:'center',
          backgroundSize:'cover',
          backgroundRepeat:"no-repeat",
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
                bgcolor: "#ffffff40",
                padding: "50px 30px",
                height: "80%",
                width: "75%",
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
                {location.state ? location.state : "Result"}
              </Typography>
              <Typography
                variant="h6"
                fontSize="16px"
                fontWeight="bold"
                color="#ffca3c"
                padding="10px 0px"
              >
                An introvert is a person with qualities of a personality type
                known as introversion, which means that they feel more
                comfortable focusing on their inner thoughts and ideas, rather
                than what's happening externally. They enjoy spending time with
                just one or two people, rather than large groups or crowds
              </Typography>
              <Button
                sx={{
                  outline: "0",
                  gridGap: "8px",
                  alignItems: "center",
                  border: "1px solid #11c4e0",
                  borderRadius: "4px",
                  cursor: "pointer",
                  display: "inline-flex",
                  flexShrink: "0",
                  fontSize: "16px",
                  gap: "8px",
                  justifyContent: "center",
                  lineHeight: "1.5",
                  overflow: "hidden",
                  padding: "12px 16px",
                  textDecoration: "none",
                  textOverflow: "ellipsis",
                  transition: "all .14s ease-out",
                  whiteSpace: "nowrap",
                  bgcolor: "#11c4e0",
                  "&:hover": {
                    boxShadow: "4px 4px 0 #11c4e0",
                  },
                  "&:active": {
                    outlineOffset: "1px",
                  },
                }}
                variant="primary"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={() => {
                    totalScore.length = 0;
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
