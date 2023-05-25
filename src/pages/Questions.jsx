import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  RadioGroup,
  Radio,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const [staper, setSteper] = useState(0);
  const [radio, setRadio] = useState("");
  //result on base of the radio
  const [result, setResult] = useState(0);
  console.log("result_____", result)

  const questions = [
    {
      id: Math.random(),
      questionHeading: "You are really busy at work and a colleague is telling you their life story and personal woes. You:",
      options: {
        q1: "Dont dare to interrupt them",
        q2: "Think its more important to give them some of your time; work can wait",
        q3: "Listen, but with only with half an ear",
        q4: "Interrupt and explain that you are really busy at the moment"
      },
    },
    {
      id: Math.random(),
      questionHeading: "You have been sitting in the doctor's waiting room for more than 25 minutes. You:",
      options: {
        q1: "Look at your watch every two minutes",
        q2: "Bubble with inner anger, but keep quiet",
        q3: "Explain to other equally impatient people in the room that the doctor is always running late",
        q4: "Complain in a loud voice, while tapping your foot impatiently",
      },
    },
    {
      id: Math.random(),
      questionHeading: "You are taking part in a guided tour of a museum. You:",
      options: {
        q1: "Are a bit too far towards the back so don't really hear what the guide is saying",
        q2: "Follow the group without question",
        q3: "Make sure that everyone is able to hear properly",
        q4: "Are right up the front, adding your own comments in a loud voice",
      },
    },
    {
      id: Math.random(),
      questionHeading: "During dinner parties at your home, you have a hard time with people who:",
      options: {
        q1: "Ask you to tell a story in front of everyone else",
        q2: "Talk privately between themselves",
        q3: "Hang around you all evening",
        q4: "Always drag the conversation back to themselves",
      },
    },
    {
      id: Math.random(),
      questionHeading: "You have been see a movie with your family and the reviews are mixed. You:",
      options: {
        q1: "Don't share your point of view with anyone",
        q2: "Didn't like the film, but keep your views to yourself when asked",
        q3: "State your point of view with enthusiasm",
        q4: "Try to bring the others round to your point of view",
      },
    },
  ];
  
  if (staper === staper){
    var itemToShow = questions[staper];
  }

  const navigate = useNavigate();

  // on next staper button click
  const onStaperIncrement = () => {
    if (radio) {
      onStaperAdd();
    } else {
      alert("please Select the Answer");
      return;
    }
  };
  // on pevious button click
  const onStaperDecrement = () => {
    onStaperMinus();
  };

  //called function on onStaperIncrement
  function onStaperAdd() {
    if (staper >= 3) {
      navigate("/result");
    } else {
      setSteper(staper + 1);
      //   setRadio("");
    }
  }

  //called function on onStaperDecrement
  function onStaperMinus() {
    if (staper <= 0) {
      return;
    } else {
      setSteper(staper - 1);
    }
  } 
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#2e937a",
        flexGrow: "1",
        flexWrap: "warp",
        flexDirection: "column",
      }}
    > 
      <Stepper activeStep={staper} alternativeLabel>
        <Step key={Math.random()}>
          <StepLabel>{"Question 1"}</StepLabel>
        </Step>
        <Step key={Math.random()}>
          <StepLabel>{"Question 2"}</StepLabel>
        </Step>
        <Step key={Math.random()}>
          <StepLabel>{"Question 3"}</StepLabel>
        </Step>
        <Step key={Math.random()}>
          <StepLabel>{"Question 4"}</StepLabel>
        </Step>
        <Step key={Math.random()}>
          <StepLabel>{"Question 5"}</StepLabel>
        </Step>
      </Stepper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          bgcolor: "#dcdcdb",
          padding: "20px 30px",
          width: "50%",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={radio}
            onChange={(e) => {
              setRadio(e.target.value);
              setResult(radio + e.target.value);
              
            }}
            name="radio-buttons-group"
          >
            <Typography
            key={itemToShow.key}
              variant="h4"
              fontSize="19px"
              fontWeight="bold"
              color="#2e937a"
            >
              {itemToShow.questionHeading}
            </Typography>
            <Box>
              <Box sx={{display:'flex' , justifyContent:'start' , alignItems:'center'}}>
              <Radio 
                value={10}
                label={itemToShow.options.q1}
              />
              <Typography>{itemToShow.options.q1}</Typography>
              </Box>
              <Box sx={{display:'flex' , justifyContent:'start' , alignItems:'center'}}>
              <Radio
                value={20}
                label={itemToShow.options.q2}
              />
              <Typography>{itemToShow.options.q2}</Typography>
              </Box>
              <Box sx={{display:'flex' , justifyContent:'start' , alignItems:'center'}}>
              <Radio
                value={30}
                label={itemToShow.options.q3}
              />
              <Typography>{itemToShow.options.q4}</Typography>
              </Box>
              <Box sx={{display:'flex' , justifyContent:'start' , alignItems:'center'}}>
              <Radio
                value={40}
                label={itemToShow.options.q4}
              />
              <Typography>{itemToShow.options.q4}</Typography>
              </Box>
            </Box>
            
          </RadioGroup>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              padding: "20px 30px 5px 0px",
            }}
          >
            <Button
              sx={{ bgcolor: staper ? "#2e937a" : "#fff", margin: "5px" }}
              variant="primary"
              onClick={onStaperDecrement}
            >
              Privious
            </Button>
            <Button
              sx={{ bgcolor:radio ? "#2e937a" : "#fff", margin: "5px" }}
              variant="primary"
              onClick={onStaperIncrement}
              >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
