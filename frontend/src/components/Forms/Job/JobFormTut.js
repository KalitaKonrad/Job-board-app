import React from "react";
import BasicInfoTut from "./BasicInfoTut";
import LocationTut from "./LocationTut";
import { useSelector } from "react-redux";
import SkillsTut from "./SkillsTut";
import { Stepper } from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import Typography from "@material-ui/core/Typography";

const JobFormTut = () => {
  const step = useSelector((state) => state.jobForm.step);

  const steps = ["Basic Information", "Job Location", "Required Skills"];

  return (
    <div>
      <div className="container max-w-md pt-12">
        {(() => {
          switch (step) {
            case 0:
              return <BasicInfoTut />;
            case 1:
              return <LocationTut />;
            case 2:
              return <SkillsTut />;
            default:
              return <BasicInfoTut />;
          }
        })()}
      </div>
      <div className="container-lg">
        <Stepper activeStep={step}>
          {steps.map((currStep, index) => {
            return (
              <Step key={index}>
                <StepLabel className="font-bold text-red-600">
                  <Typography className="font-bold">{currStep}</Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </div>
  );
};

export default JobFormTut;
