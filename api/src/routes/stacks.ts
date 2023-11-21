import express, { Response } from 'express';
import { getStack, listStacks, updateStack } from '../models/stack';

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

// get stack by name
router.get('/:stackName', async (req, res: Response) => {
    try {
        const stackName = req.params.stackName;
        const stack = await getStack(stackName);
        if (!stack) {
            res.status(404).send('Stack not found');
            return;
        }

        res.json(stack);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
})


// update stack by name
router.put('/:stackName', async (req, res: Response) => {
    try {        
        const stackName = req.params.stackName;
        const stackContent = req.body.content;

        const stack = await updateStack(stackName, stackContent);
        if (!stack) {
            res.status(404).send('Stack not found');
            return;
        }

        res.json(stack);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
}
)

export default router;