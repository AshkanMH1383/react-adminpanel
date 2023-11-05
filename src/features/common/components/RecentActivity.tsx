import { DefaultBox, HeadingComponent } from '@/components/CBox/DefaultBox'
import {
    Box,
    Flex,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'
import { HiCalendar } from 'react-icons/hi2'

export const RecentActivity = () => {
    const steps = [
        { title: 'First', description: 'Contact Info' },
        { title: 'Second', description: 'Date & Time' },
        { title: 'Third', description: 'Select Rooms' },
        { title: 'Third', description: 'Select Rooms' },
        { title: 'Third', description: 'Select Rooms' },
    ]
    const { activeStep } = useSteps({
        index: 2,
        count: 2,
    })
    return (
        <DefaultBox
            h={'fit-content'}
            w={'40%'}
            overflow={'auto'}
            rightHeading={
                <Flex>
                    <HiCalendar fontSize="22px" />
                    <HeadingComponent title={'آخرین فعالیت‌ها'} mr={3} />
                </Flex>
            }
        >
            <Stepper index={activeStep} orientation="vertical" gap="6">
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus />
                        </StepIndicator>

                        <Box flexShrink="0">
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>
                                {step.description}
                            </StepDescription>
                        </Box>

                        {/* <StepSeparator /> */}
                    </Step>
                ))}
            </Stepper>
        </DefaultBox>
    )
}
