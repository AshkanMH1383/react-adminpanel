import {
    Avatar,
    Box,
    Flex,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react'
import { HiChevronDown } from 'react-icons/hi2'

export const Account = () => {
    return (
        <Menu>
            <MenuButton
                _hover={{ bg: 'secondary' }}
                px={2}
                py={1}
                borderRadius={'0.5rem'}
            >
                <Flex alignItems={'center'}>
                    <Avatar
                        w={'40px'}
                        h={'40px'}
                        name="اشکان مهدی زاده"
                        src="https://bit.ly/dan-abramov"
                    />
                    <Box mr={3} ml={2}>
                        <Text fontSize={'15px'}>اشکان مهدی زاده</Text>
                    </Box>
                    <HiChevronDown />
                </Flex>
            </MenuButton>
            <MenuList>
                <MenuItem>پروفایل</MenuItem>
                <MenuDivider />
                <MenuItem>فروشگاه شما</MenuItem>
                {/* <MenuDivider /> */}
                <MenuItem>
                    <Link href="https://github.com/AshkanMH1383">گیت هاب</Link>
                </MenuItem>
                <MenuItem>خروج</MenuItem>
            </MenuList>
        </Menu>
    )
}
