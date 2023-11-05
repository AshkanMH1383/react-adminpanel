import { Box, CloseButton, Flex } from '@chakra-ui/react'
import { SidebarContentProps } from './interface'
import { Logo, Navbar } from '@/components'

export const Sidebar = ({ onClose, ...rest }: SidebarContentProps) => {
    return (
        <Box {...rest}>
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Logo fontSize={'20px'} />
                <CloseButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onClose}
                />
            </Flex>
            <Navbar />
        </Box>
    )
}
