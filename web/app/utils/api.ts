import axios from 'axios';

const api = axios.create({
    baseURL: `http://192.168.0.105:3030/api`,
});

export const getContainers = async () => {
    try {
        const response = await api.get('/containers');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getStacks = async () => {
    try {
        const response = await api.get('/stacks');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getStack = async (stackName: string) => {
    try {
        const response = await api.get(`/stacks/${stackName}`);
        return response.data;
    } catch (error) {
        return null
    }
}

export const updateStack = async (stackName: string, stackContent: string) => {
    try {
        const response = await api.put(`/stacks/${stackName}`,
            { content: stackContent },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        return response.data;
    } catch (error) {
        return null
    }
}