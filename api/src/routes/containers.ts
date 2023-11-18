import express, { Request, Response } from 'express';
import { getAxiosInstance } from '../utils/axios';
import { toContainer } from '../models/container';

const router = express.Router();

// list containers
router.get('/', async (_, res: Response) => {
    try {
        const response = await getAxiosInstance.get('/containers/json');
        const containers = 
            response.data.map((data: any) => toContainer(data));

        res.json(containers);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// inspect container
// router.get('/:id', async (req: Request, res: Response) => {
//     try {
//         const response = await getAxiosInstance.get(`/containers/${req.params.id}/json`);
//         res.json(response.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred');
//     }
// });

// run container
// stop container
// update container

export default router;