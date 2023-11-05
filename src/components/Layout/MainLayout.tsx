import { Footer, Head, Sidebar, Topbar } from '@/components'

import {
    Box,
    Drawer,
    DrawerContent,
    Flex,
    Heading,
    useDisclosure,
} from '@chakra-ui/react'
import { CBreadcrumb } from '../CBreadcrumb'

type MainLayoutProps = {
    children: React.ReactNode
    title?: string
    description?: string
    cbreadcrumb?: Array<CBreadcrumb>
    settings?: React.ReactNode
    className?: string
}

type CBreadcrumb = {
    title: string
    href: string
}

export const MainLayout = ({
    children,
    title,
    description,
    cbreadcrumb,
    settings,
    className,
}: MainLayoutProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex className={className}>
            <Head title={title} description={description} />
            {/* Sidebar Section */}
            <Sidebar
                onClose={onClose}
                bg={'dark'}
                position={'fixed'}
                zIndex={9999}
                h="100vh"
                w={{ base: 0, md: '245px' }}
                display={{ base: 'none', md: 'block' }}
                overflowY="auto"
            />

            {/* Mobile Sidebar */}
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                isFullHeight
            >
                <DrawerContent>
                    <Sidebar onClose={onClose} />
                </DrawerContent>
            </Drawer>

            {/* End Of Sidebar Section */}

            <Box flex="1" pr={'245px'}>
                <Topbar onOpen={onOpen} />
                <Box as="main" p={4} w={'full'}>
                    <Flex
                        className="main-head"
                        alignItems={'center'}
                        pb={3}
                        mb={6}
                        borderBottom={'1px solid #ddd'}
                    >
                        <Heading fontFamily={'inherit'} fontSize={'28px'}>
                            {title}
                        </Heading>
                        <CBreadcrumb cbreadcrumb={cbreadcrumb} />
                        <Flex mr="auto">{settings}</Flex>
                    </Flex>

                    {children}

                    <Footer />
                </Box>
            </Box>
        </Flex>
    )
}
