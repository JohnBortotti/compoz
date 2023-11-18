export type containerState = "running" | "stopped";

export type ContainerCardType = {
    id: string;
    name: string;
    state: containerState;
    stack: String
}

export type StackCardType = {
    id: string;
    name: string;
    count: number;
}

export type ShowingDetailsType = "containers" | "stacks";

export type MaybeContainer = {
    container: ContainerCardType | null;
};

export type MaybeStack = {
    stack: StackCardType | null;
};

export type ContainerOrStack = {
    type: "container" | "stack";
    item: ContainerCardType | StackCardType;
};

export interface setDetailsInterface {
    setDetails: (item: ContainerOrStack) => void;
}