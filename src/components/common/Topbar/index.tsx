import { Flex, IconButton } from '@chakra-ui/react'
import { TopbarProps } from './interface'
import { HiBars3 } from 'react-icons/hi2'
import { Account } from './Account'
import { Logout } from './Logout'
import { Notification } from './Notification'
import { Search } from './Search'

export const Topbar = ({ onOpen }: TopbarProps) => {
    return (
        <Flex px={4} py={2} bg={'white'} alignItems={'center'}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<HiBars3 />}
            />
            <Search />
            <Flex mr="auto" alignItems={'center'}>
                <Notification />
                <Account />
                {/* <Logout /> */}
            </Flex>
        </Flex>
    )
}
