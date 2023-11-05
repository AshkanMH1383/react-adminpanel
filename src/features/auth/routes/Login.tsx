// import { useNavigate } from 'react-router-dom'

import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Text,
    HStack,
    Input,
    Stack,
} from '@chakra-ui/react'

import { EmptyLayout, Logo } from '@/components'
import { PasswordField } from '../components/PasswordField'
// import { LoginForm } from '../components/LoginForm'

export const Login = () => {
    //const navigate = useNavigate()

    return (
        <EmptyLayout
            title="ورود به پنل مدیریت"
            description="ورود به پنل مدیریت"
        >
            <Container
                maxW="lg"
                py={{ base: '12', md: '24' }}
                px={{ base: '0', sm: '8' }}
            >
                <Stack spacing="8">
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg.surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">
                            <Logo />
                            <Stack
                                spacing={{ base: '2', md: '3' }}
                                textAlign="center"
                            >
                                <Text
                                    // size={{ base: 'xs', md: 'sm' }}
                                    fontFamily={'inherit'}
                                    fontSize={'15px'}
                                >
                                    خوش آمدید!!! لطفا نام کاربری و کلمه عبور را
                                    وارد نمایید.
                                </Text>
                            </Stack>

                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">
                                        نام کاربری
                                    </FormLabel>
                                    <Input id="email" type="email" />
                                </FormControl>
                                <PasswordField />
                            </Stack>
                            <HStack justify="space-between">
                                <Checkbox defaultChecked>
                                    منو به یاد داشته باش
                                </Checkbox>
                                <Button variant="text" size="sm">
                                    فراموشی کلمه عبور?
                                </Button>
                            </HStack>
                            <Button backgroundColor={'primary'} color={'white'}>
                                ورود
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </EmptyLayout>
    )
}
