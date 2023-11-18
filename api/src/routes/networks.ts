import express, { Request, Response } from 'express';
import { getAxiosInstance } from '../utils/axios';

const router = express.Router();

// list networks
router.get('/', async (_, res: Response) => {
    try {
        const response = await getAxiosInstance.get('/networks');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// inspect network
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const response = await getAxiosInstance.get(`/networks/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

export default router;
