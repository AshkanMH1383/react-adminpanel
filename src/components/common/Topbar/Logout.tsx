import { IconButton } from '@chakra-ui/react'
import { HiPower } from 'react-icons/hi2'

export const Logout = () => {
    return (
        <IconButton
            w={'45px'}
            h={'45px'}
            mr={4}
            fontSize={'22px'}
            color={'white'}
            bg={'danger'}
            variant="solid"
            aria-label="logout"
            icon={<HiPower />}
        />
    )
}
