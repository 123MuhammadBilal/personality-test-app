import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stepper,
  Step,
  StepLabel,
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
  {
    label: "Question 5",
  },
];

const Questions = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  // array of target ids
  const [targetItemList, setTargetItemList] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);

  //use for navigation
  const navigate = useNavigate();

  //get the length of steps items
  const maxSteps = STEPS.length;

  //getting the object base on stepper
  var obj = QUESTIONS[activeStep];




  
  // on next button click
  const onNextButtonClick = () => {
    setActiveStep(activeStep + 1);
    // find item from object by target id
    const selectedId = obj.options.find(
      (item) => item.id === targetItemList[activeStep]
    );

    props.setTotalScore([...props.totalScore, selectedId.score]);
    setIsButtonDisable(false);
    //navigate the page base on score
    if (activeStep === maxSteps - 1) {
      //when activeStep equal to maxSteps()
      if (props.scoreSum >= 20) {
        navigate("/result", { state: "You are an Introvert!" });
      } else {
        navigate("/result", { state: "You are an Extrovert!" });
      }
    }
  };


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
        width: "1000px !importan",
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
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
          bgcolor: "#dcdcdb",
          padding: "20px 30px",
          width: "50%",
          borderRadius: "15px",
          variant: "h4",
          fontSize: "19px",
          fontWeight: "bold",
          color: "#111",
        }}
      >
        <RadioGroup
          column
          defaultValue=""
          name="radio-buttons-group"
          onChange={(e) => {
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
              // on checked allow enable next button
              setIsButtonDisable(true);
            }
          }}
        >
          <p style={{ color: "#2e937a" }}>{obj.question}</p>
          {obj.options.map((item) => (
            <FormControlLabel
              checked={targetItemList.includes(item.id) ? true : false}
              value={item.id}
              control={<Radio />}
              label={item.title}
            />
          ))}
        </RadioGroup>

        {/* <RadioGroup
          column
          defaultValue=""
          name="radio-buttons-group"
          onChange={(e) => {
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
              // on checked allow enable next button
              setIsButtonDisable(true);
            }
          }}
        >
          <p style={{ color: "#2e937a" }}>{obj.question}</p>
          <FormControlLabel
            checked={targetItemList.includes(obj.options[0].id) ? true : false}
            value={obj.options[0].id}
            control={<Radio />}
            label={obj.options[0].title}
          />
          <FormControlLabel
            checked={targetItemList.includes(obj.options[1].id) ? true : false}
            value={obj.options[1].id}
            control={<Radio />}
            label={obj.options[1].title}
          />
          <FormControlLabel
            checked={targetItemList.includes(obj.options[2].id) ? true : false}
            value={obj.options[2].id}
            control={<Radio />}
            label={obj.options[2].title}
          />
          <FormControlLabel
            checked={targetItemList.includes(obj.options[3].id) ? true : false}
            value={obj.options[3].id}
            control={<Radio />}
            label={obj.options[3].title}
          />
        </RadioGroup> */}

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
                bgcolor: "#2e937a",
                margin: "5px",
                color: "#d5d0d0",
              }}
              variant="primary"
              onClick={()=>{
                setActiveStep(activeStep - 1);
                console.log('setActiveStep',activeStep)
                console.log('props.totalScore.length',props.totalScore.length)
                if( setActiveStep <= props.totalScore.length){
                  setIsButtonDisable(true);
                }else{
                  setIsButtonDisable(false);
                }
              }}
              disabled={activeStep === 0}
            >
              Privious
            </Button>
            <Button
              sx={{
                bgcolor: "#2e937a",
                margin: "5px",
                color: "#d5d0d0",
              }}
              variant="primary"
              onClick={onNextButtonClick}
              disabled={!isButtonDisable}
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
