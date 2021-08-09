import React from "react"

import { VStack } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { FiClipboard, FiDollarSign, FiUser } from "react-icons/fi"

import { Head } from "./Head"
import { ResetPrompt } from "./ResetPrompt"
import { StepButtons } from "./StepButtons"

import { FirstStep } from "@components/steps/FirstStep"
import { SecondStep } from "@components/steps/SecondStep"
import { ThirdStep } from "@components/steps/ThirdStep"

const steps = [
  { label: "Step 1", content: <FirstStep />, icon: FiUser },
  { label: "Step 2", content: <SecondStep />, icon: FiClipboard },
  { label: "Step 3", content: <ThirdStep />, icon: FiDollarSign },
]

export const Stepper = (): JSX.Element => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <VStack width="100%" p={4}>
      <Head />
      <VStack width="100%">
        <Steps orientation="vertical" activeStep={activeStep}>
          {steps.map(({ label, content, icon }) => (
            <Step label={label} key={label} icon={icon}>
              {content}
            </Step>
          ))}
        </Steps>
        {activeStep === 3 ? (
          <ResetPrompt onReset={reset} />
        ) : (
          <StepButtons
            {...{ nextStep, prevStep }}
            prevDisabled={activeStep === 0}
          />
        )}
      </VStack>
    </VStack>
  )
}
