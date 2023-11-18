import express, { Request, Response } from 'express';
import { getAxiosInstance } from '../utils/axios';

const router = express.Router();

// list volumes
router.get('/', async (_, res: Response) => {
    try {
        const response = await getAxiosInstance.get('/volumes');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

export default router;