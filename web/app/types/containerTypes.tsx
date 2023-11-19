export type containerState = "running" | "stopped";

export type ContainerType = {
    id: string,
    name: string,
    service: string,
    image: string,
    state: containerState,
    status: string,
    stack: string,
}

export type StackType = {
    id: string;
    name: string;
    content: string;
    containers: ContainerType[];
}

export type ShowingDetailsType = "containers" | "stacks";

export type MaybeContainer = {
    container: ContainerType | null;
};

export type MaybeStack = {
    stack: StackType | null;
};

export type ContainerOrStack = {
    type: "container" | "stack";
    item: ContainerType | StackType;
};

export interface setDetailsInterface {
    setDetails: (item: ContainerOrStack) => void;
}