import { Box, BoxProps, Flex, Heading, HeadingProps } from '@chakra-ui/react'

interface DefaultBox extends BoxProps {
    rightHeading: React.ReactNode
    leftHeading?: React.ReactNode
    children: React.ReactNode
}

interface CHeadingProps extends HeadingProps {
    title: string
}

export const HeadingComponent = ({ title, ...rest }: CHeadingProps) => {
    return (
        <Heading as={'h5'} fontFamily={'inherit'} fontSize={'20px'} {...rest}>
            {title}
        </Heading>
    )
}

export const DefaultBox = ({
    rightHeading,
    leftHeading,
    children,
    ...rest
}: DefaultBox) => {
    return (
        <Box
            bg="white"
            border={'1px solid'}
            borderColor={'border-secondary'}
            borderRadius={15}
            p={'25px'}
            {...rest}
        >
            {rightHeading && (
                <Flex h={'45px'}>
                    <Flex>{rightHeading}</Flex>
                    {leftHeading && <Flex mr={'auto'}>{leftHeading}</Flex>}
                </Flex>
            )}
            <Flex>{children}</Flex>
        </Box>
    )
}
