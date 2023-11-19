import fs from 'fs/promises';
import { Container, toContainer } from './container';
import { getAxiosInstance } from '../utils/axios';

type Stack = {
    id: string;
    name: string;
    path: string;
    content: string;
    containers: Container[];
}

async function getContainersForComposeFile(stackName: string): Promise<Container[]> {
    const containers = 
        (await getAxiosInstance.get('/containers/json'))
            .data.map((data: any) => toContainer(data));

    return containers.filter((container: Container) => 
      container.stack == stackName
    );
}

export async function listStacks(): Promise<Stack[]> {
    // TODO: add path as env variable
    const stacksPath = "/home/joao/workspace/test-compoz-stacks/";
    if (!stacksPath) {
        throw new Error('STACKS_PATH env variable not set');
    }
    const stacks = await fs.readdir(stacksPath);

    return Promise.all(stacks.map(async (stack) => {
        const path = `${stacksPath}/${stack}`;
        const content = await fs.readFile(path, 'utf8');
        const stack_name = stack.replace('.yml', ''); 
        return {
            id: "1",
            name: stack_name,
            path: path,
            content,
            containers: await getContainersForComposeFile(stack_name)
        };
    }));
}