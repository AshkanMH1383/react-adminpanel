import {
    Popover,
    IconButton,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
} from '@chakra-ui/react'
import { HiOutlineBell } from 'react-icons/hi2'

export const Notification = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <IconButton
                    w={'45px'}
                    h={'45px'}
                    fontSize={'25px'}
                    ml={1}
                    variant="outline"
                    aria-label="iconbutton"
                    border={'unset'}
                    icon={<HiOutlineBell />}
                />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverBody>no result</PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
