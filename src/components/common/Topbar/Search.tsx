import {
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'

export const Search = () => {
    return (
        <InputGroup w={'38%'}>
            <Input
                bg={'secondary'}
                h={'45px'}
                pr="4rem"
                type="text"
                placeholder="جستجو کنید"
            />
            <InputRightElement width="60px">
                <IconButton
                    size="sm"
                    ml={4}
                    mt={1}
                    fontSize={'20px'}
                    variant="solid"
                    aria-label="iconbutton"
                    icon={<HiOutlineMagnifyingGlass />}
                />
            </InputRightElement>
        </InputGroup>
    )
}
