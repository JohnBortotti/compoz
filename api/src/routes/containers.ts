import express, { Response } from 'express';
import { getContainers } from '../models/container';

const router = express.Router();

// list containers
router.get('/', async (_, res: Response) => {
    try {
        const containers = await getContainers();
        res.json(containers);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

export default router;