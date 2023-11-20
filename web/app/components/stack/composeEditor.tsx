import CodeMirror from '@uiw/react-codemirror';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Text, Box } from '@chakra-ui/react';
import { useCallback, useEffect, useRef } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';

export default function ComposeEditor(
    { value, setSavedStatus, setFileContent }: { value: string } & { setSavedStatus: any } & { setFileContent: any }) {
    const fileSnapshot = useRef<string>("");

    useEffect(() => {
        if (fileSnapshot.current == "" && value.length > 0) {
            fileSnapshot.current = value;
            return;
        }
    }, [value]);

    const handleValueChange = useCallback((newValue: string) => {
        if (newValue == fileSnapshot.current) {
            setSavedStatus(true);
            return;
        }

        setSavedStatus(false);
        setFileContent(newValue);
    }, []);

    return (
        <Box fontSize="sm">
            <CodeMirror
                value={value}
                height="500px"
                theme={githubLight}
                extensions={[langs.yaml()]}
                onChange={handleValueChange}
            />
        </Box>
    );
}