type Container = {
    id: string;
    name: string;
    state: string;
    status: string;
}
  
export function toContainer(data: any): Container {
  return {
    id: data.Id,
    name: data.Image,
    state: data.State,
    status: data.Status,
  };
}