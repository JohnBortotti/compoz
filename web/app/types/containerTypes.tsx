export type containerStatus = "running" | "stopped";

export type ContainerCardProps = {
    name: string;
    status: containerStatus;
    stack: String
}

export type StackCardProps = {
    name: string;
    count: number;
}
