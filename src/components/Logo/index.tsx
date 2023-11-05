import { Heading, Image } from '@chakra-ui/react'

export const Logo = ({ ...rest }) => {
    return (
        <>
            <Heading
                {...rest}
                w={'100vh'}
                textAlign={'center'}
                fontFamily={'inherit'}
            >
                <Image src="/images/logo.png" />
            </Heading>
        </>
    )
}
