import CodeMirror from '@uiw/react-codemirror';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Text, Box } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';

// this component is a text editor for the docker-compose.yml files
// is a basic block of text with syntax highlighting, where the user can
// edit the contents of the docker-compose.yml file
export default function ComposeEditor({ value }: {value: string} ) {
    return (
        <Box fontSize="sm">
        <CodeMirror 
            value={value}
            height="500px" 
            theme={githubLight}
            extensions={[langs.yaml()]}
        />
        </Box>
    )
}