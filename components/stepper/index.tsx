import React from "react"

import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Flex, VStack } from "@chakra-ui/react"
import { FiClipboard, FiDollarSign, FiUser } from "react-icons/fi"

import { Head } from './Head'
import { ResetPrompt } from './ResetPrompt'
import { StepButtons } from './StepButtons'

const content = (
  <Flex textAlign="left" py={2} px={4}>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus sed
    iaculis lectus pharetra diam in mi efficitur dictumst. Cursus vehicula
    ad senectus nisl convallis elit. Adipiscing gravida orci semper commodo
    enim adipiscing sed. Praesent posuere velit mus velit dapibus; eu porttitor
    nec. Dictum scelerisque fringilla ornare fringilla nunc nascetur mi
    quisque. Sollicitudin interdum quis penatibus sagittis euismod.
  </Flex>
)

const steps = [
  { label: "Step 1", content , icon: FiUser},
  { label: "Step 2", content , icon: FiClipboard},
  { label: "Step 3", content , icon: FiDollarSign},
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
