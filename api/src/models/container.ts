import { getAxiosInstance } from "../utils/axios";

export type Container = {
    id: string;
    name: string;
    service: string;
    image: string;
    state: string;
    status: string;
    stack: string;
}

export function toContainer(data: any): Container {
  return {
    id: data.Id,
    name: data.Names[0] ? data.Names[0].replace('/', '') : data.Image,
    service: data.Labels['com.docker.compose.service'] ? data.Labels['com.docker.compose.service'] : '',
    state: data.State,
    status: data.Status,
    stack: data.Labels['com.docker.compose.project'],
    image: data.Image,
  };
}

export async function getContainers(): Promise<Container[]> {
  const response = await getAxiosInstance.get('/containers/json?all=true');
  
  return response.data.map((data: any) => toContainer(data))
}