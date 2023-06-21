import React, { useState } from "react";
import bgImage from "../images/bg.png";
import {
  Box,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  {
    question:
      "You are really busy at work and a colleague is telling you their life story and personal woes. You:",
    options: [
      {
        title: "Dont dare to interrupt them",
        score: 2,
        id: "Q1",
      },
      {
        title:
          "Think its more important to give them some of your time; work can wait",
        score: 4,
        id: "Q11",
      },
      {
        title: "Listen, but with only with half an ear",
        score: 6,
        id: "Q111",
      },
      {
        title: "Interrupt and explain that you are really busy at the moment",
        score: 8,
        id: "Q1111",
      },
    ],
  },

  {
    question:
      "You have been sitting in the doctor's waiting room for more than 25 minutes. You:",
    options: [
      {
        title: "Look at your watch every two minutes",
        score: 2,
        id: "Q2",
      },
      {
        title: "Bubble with inner anger, but keep quiet",
        score: 4,
        id: "Q22",
      },
      {
        title:
          "Explain to other equally impatient people in the room that the doctor is always running late",
        score: 6,
        id: "Q222",
      },
      {
        title: "Complain in a loud voice, while tapping your foot impatiently",
        score: 8,
        id: "Q2222",
      },
    ],
  },

  {
    question: "You are taking part in a guided tour of a museum. You:",
    options: [
      {
        title:
          "Are a bit too far towards the back so don't really hear what the guide is saying",
        score: 2,
        id: "Q3",
      },
      { title: "Follow the group without question", score: 4, id: "Q33" },
      {
        title: "Make sure that everyone is able to hear properly",
        score: 6,
        id: "Q333",
      },
      {
        title:
          "Are right up the front, adding your own comments in a loud voice",
        score: 8,
        id: "Q3333",
      },
    ],
  },

  {
    question:
      "During dinner parties at your home, you have a hard time with people who:",
    options: [
      {
        title: "Ask you to tell a story in front of everyone else",
        score: 2,
        id: "Q4",
      },

      {
        title: "Talk privately between themselves",
        score: 4,
        id: "Q44",
      },

      {
        title: "Hang around you all evening",
        score: 6,
        id: "Q444",
      },
      {
        title: "Always drag the conversation back to themselves",
        score: 8,
        id: "Q4444",
      },
    ],
  },

  {
    question:
      "You have been see a movie with your family and the reviews are mixed. You:",
    options: [
      {
        title: "Don't share your point of view with anyone",
        score: 2,
        id: "Q5",
      },
      {
        title:
          "Didn't like the film, but keep your views to yourself when asked",
        score: 4,
        id: "Q55",
      },
      {
        title: "State your point of view with enthusiasm",
        score: 6,
        id: "Q555",
      },
      {
        title: "Try to bring the others round to your point of view",
        score: 8,
        id: "Q5555",
      },
    ],
  },
];
const STEPS = [
  {
    label: "Question 1",
  },
  {
    label: "Question 2",
  },
  {
    label: "Question 3",
  },
  {
    label: "Question 4",
  },
];

const Questions = ({ totalScore, setTotalScore }) => {
  const [activeStep, setActiveStep] = useState(0);
  // array of target ids
  const [targetItemList, setTargetItemList] = useState(QUESTIONS.map(() => null));
  //use for navigation
  const navigate = useNavigate();
  //get the length of steps items
  const maxSteps = STEPS.length;
  //getting the object base on stepper
  var obj = QUESTIONS[activeStep];

  // on option selection
  const onOptionSelection = (e) => {
    if (QUESTIONS[activeStep] === obj) {
      // first of all set the value on change
      setTargetItemList([...targetItemList, e.target.value]);
      // after that get the item by index(index is equal to activeStep)
      const index = targetItemList.at(activeStep);
      //find the index of array item by (item)
      const itemIndex = targetItemList.indexOf(index);
      //after that used splice and removed the item form arry on the base of index and set the new target id
      targetItemList.splice(itemIndex, 1, e.target.value);
      //set the array with current changes
      setTargetItemList([...targetItemList]);
    }
  };

  // on next button click
  const onNextButtonClick = () => {
    setActiveStep(activeStep + 1);
    const selectedId = obj.options.find(
      (item) => item.id === targetItemList[activeStep]
    );
    setTotalScore([...totalScore, selectedId.score]);
    if (activeStep === maxSteps) {
      onResult();
    }
  };

  //result
  const onResult = () => {
    //getting the sum
    const scoreSum = totalScore.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    //when activeStep equal to maxSteps()
    if (scoreSum >= 20) {
      navigate("/result", { state: "You are an Introvert!" });
    } else {
      navigate("/result", { state: "You are an Extrovert!" });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#11c4e0",
        flexGrow: "1",
        flexWrap: "warp",
        width: "1000px !importan",
        backgroundImage: `url(${bgImage})`,
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:"no-repeat",
      }}
    > 
      <Stepper
        sx={{ flexDirection: "column" }}
        activeStep={activeStep}
        alternativeLabel
        orientation="vertical"
      >
        {STEPS.map((item) => (
          <Step>
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          bgcolor: "#ffffff40",
          padding: "20px 30px",
          width: "50%",
          borderRadius: "15px",
          variant: "h4",
          fontSize: "19px",
          fontWeight: "bold",
          color: "#ffca3c",
          opacity: 0.9,
          borderLeft: '3px solid #11c4e0',
          borderRight: '6px solid #ffca3c',
          borderBottom:' 6px solid #ffca3c',
          borderTop:' 1px solid #11c4e0',
        }}
      >
        <RadioGroup
          column
          defaultValue=""
          name="radio-buttons-group"
          onChange={(e) => onOptionSelection(e)}
        >
          <Typography
            variant="h4"
            fontSize="19px"
            fontWeight="bold"
            color="#11c4e0"
          >
            {obj?.question}
          </Typography>

          {obj?.options.map((item) => (
            <FormControlLabel
              checked={targetItemList.includes(item.id) ? true : false}
              value={item.id}
              control={<Radio />}
              label={item.title}
            />
          ))}
        </RadioGroup>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              padding: "20px 30px 5px 0px",
            }}
          >
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
                            margin:'3px',
                            bgcolor: '#11c4e0',
                            "&:hover": {
                              boxShadow: '4px 4px 0 #11c4e0',
                            },
                            "&:active":{
                              outlineOffset: '1px',
                            }
                          }}
              variant="primary"
              onClick={() => {
                setActiveStep(activeStep - 1);
              }}
              disabled={activeStep === 0}
            >
              Privious
            </Button>
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
                            margin:'3px',
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
              onClick={onNextButtonClick}
              disabled={targetItemList[activeStep] === null ? true : false}
            >
              {activeStep === maxSteps ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
