export type containerStatus = "running" | "stopped";

export type ContainerCardProp = {
    id: string;
    name: string;
    status: containerStatus;
    stack: String
}

export type StackCardProp = {
    id: string;
    name: string;
    count: number;
}

export type ShowingType = "containers" | "stacks";

export type MaybeContainer = {
    container: ContainerCardProp | null;
};

export type MaybeStack = {
    stack: StackCardProp | null;
};