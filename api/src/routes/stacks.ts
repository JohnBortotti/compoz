import express, { Request, Response } from 'express';

const router = express.Router();

// list stacks
router.get('/', async (_, res: Response) => {
    try {
        res.json({ message: 'stacks' });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});