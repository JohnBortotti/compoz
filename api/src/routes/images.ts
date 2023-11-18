import express, { Request, Response } from 'express';
import { getAxiosInstance } from '../utils/axios';

const router = express.Router();

// list images
router.get('/', async (_, res: Response) => {
    try {
        const response = await getAxiosInstance.get('/images/json');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

export default router;

// inspect image
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const response = await getAxiosInstance.get(`/images/${req.params.id}/json`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// delete image
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const response = await getAxiosInstance.delete(`/images/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});