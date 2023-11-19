import express, { Response } from 'express';
import { listStacks } from '../models/stack';

const router = express.Router();

// list stacks
router.get('/', async (_, res: Response) => {
    try {
        const stacks = await listStacks();
        res.json(stacks);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
})

export default router;