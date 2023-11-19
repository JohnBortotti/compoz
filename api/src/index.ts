import express from 'express';
import containersRouter from './routes/containers';
import stacksRouter from './routes/stacks';
import cors from 'cors';

const app = express();
const port = process.env.API_PORT || 3030;

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
}));

app.use('/api/containers', containersRouter);
app.use('/api/stacks', stacksRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});