import './Welcome.css';
import { WelcomeStep1 } from './components/WelcomeStep1';
import { WelcomeStep2 } from './components/WelcomeStep2';
// import { useState } from 'react'

// export function Welcome() {

//     const [step, setStep] = useState(1)

//     function onAdvance() {
//         console.log('avançar')
//         setStep(step + 1)
//     }

//     switch(step) {
//         case 1: return <WelcomeStep1 onAdvance={onAdvance}/>
//         case 2: return <WelcomeStep2 />
//         default: return <></>
//     }
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function Welcome() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 2;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box height="100vh" display={'flex'} flexDirection={'column'}>
      <Box flex={1} overflow="auto">
        <SwipeableViews
          axis='x'
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          <WelcomeStep1 />
          <WelcomeStep2 />
        </SwipeableViews>
      </Box>
      <Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      </Box>
    </Box>
  );
}

// export default SwipeableTextMobileStepper;