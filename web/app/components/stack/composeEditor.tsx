import CodeMirror from '@uiw/react-codemirror';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Text, Box } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';

// TODO: add a debounce to avoid too many hooks calls
export default function ComposeEditor(
    { value, savedStatus, setSavedStatus, setFileContent }: { value: string } & { savedStatus: any } & { setSavedStatus: any } & { setFileContent: any }) {
    const [isFileContentUpdated, setIsFileContentUpdated] = useState(false);
    // the fileSnapshot is the last saved version of the file (use to compare with the current version and detect changes)
    const fileSnapshot = useRef<string>("");

    // set the first snapshot (the prop is async so we need to wait for the first value)
    useEffect(() => {
        if (fileSnapshot.current == "" && value.length > 0) {
            fileSnapshot.current = value;
            return;
        }
    }, [value]);

    // update the snapshot when the file is saved
    useEffect(() => {
        if (savedStatus && isFileContentUpdated) {
            fileSnapshot.current = value;
            setIsFileContentUpdated(false);
        }
    }, [savedStatus, isFileContentUpdated]);

    const handleValueChange = useCallback((newValue: string) => {
        if (newValue == fileSnapshot.current) {
            setSavedStatus(true);
            setIsFileContentUpdated(false);
            return;
        }

        setSavedStatus(false);
        setFileContent(newValue);
        setIsFileContentUpdated(true);
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