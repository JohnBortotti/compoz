import fs from 'fs/promises';
import { Container, getContainers } from './container';

type Stack = {
    id: string;
    name: string;
    path: string;
    content: string;
    containers: Container[];
}

async function getContainersForComposeFile(stackName: string): Promise<Container[]> {
    const containers = await getContainers();

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
            id: stack_name,
            name: stack_name,
            path: path,
            content,
            containers: await getContainersForComposeFile(stack_name)
        };
    }));
}

export async function getStack(stackName: string): Promise<Stack | null> {
    const stacks = await listStacks();
    const stack = stacks.find((stack) => stack.name == stackName);
    if (!stack) {
        return null;
    }
    
    return stack;
}

export async function updateStack(stackName: string, stackContent: string): Promise<Stack | null> {
    const stack = await getStack(stackName);
    if (!stack) {
        return null;
    }

    await fs.writeFile(stack.path, stackContent);
    return await getStack(stackName);
}