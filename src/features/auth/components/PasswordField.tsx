import {
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
} from '@chakra-ui/react'

import { HiEye, HiEyeDropper } from 'react-icons/hi2'
import { forwardRef, useRef } from 'react'

export const PasswordField = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        const { isOpen, onToggle } = useDisclosure()
        const inputRef = useRef<HTMLInputElement>(null)

        const mergeRef = useMergeRefs(inputRef, ref)
        const onClickReveal = () => {
            onToggle()
            if (inputRef.current) {
                inputRef.current.focus({ preventScroll: true })
            }
        }

        return (
            <FormControl>
                <FormLabel htmlFor="password">کلمه عبور</FormLabel>
                <InputGroup>
                    <InputRightElement>
                        <IconButton
                            variant="text"
                            size="sm"
                            aria-label={
                                isOpen ? 'Mask password' : 'Reveal password'
                            }
                            icon={isOpen ? <HiEye /> : <HiEyeDropper />}
                            onClick={onClickReveal}
                        />
                    </InputRightElement>
                    <Input
                        id="password"
                        ref={mergeRef}
                        dir="ltr"
                        name="password"
                        type={isOpen ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        {...props}
                    />
                </InputGroup>
            </FormControl>
        )
    }
)

PasswordField.displayName = 'کلمه عبور'
