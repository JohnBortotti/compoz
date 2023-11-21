import { CheckIcon, DeleteIcon, EditIcon, MoonIcon, RepeatIcon } from '@chakra-ui/icons';
import { Text, Box, ButtonGroup, Button } from '@chakra-ui/react';

export default function StackButtons({ saved, updateStack }: { saved: boolean } & { updateStack: any }) {
    return (
        <ButtonGroup>
            {
                saved ?
                    <Button size="sm" colorScheme='green' leftIcon={<CheckIcon />} isDisabled={true}>Saved</Button>
                    :
                    <Button size="sm" colorScheme='yellow' leftIcon={<EditIcon />} onClick={updateStack}>Save changes</Button>
            }
            <Button size="sm" colorScheme='gray' leftIcon={<RepeatIcon />}>Restart</Button>
            <Button size="sm" colorScheme='gray' leftIcon={<MoonIcon />}>Stop</Button>
            <Button size="sm" colorScheme='red' leftIcon={<DeleteIcon />}>Delete</Button>
        </ButtonGroup>
    )
}