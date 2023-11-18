import express from 'express';
import containersRouter from './routes/containers';
import imagesRouter from './routes/images';
import newtorksRouter from './routes/networks';
import volumesRouter from './routes/volumes';
import cors from 'cors';

const app = express();
const port = process.env.API_PORT || 3030;

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
}));

app.use('/api/containers', containersRouter);
app.use('/api/images', imagesRouter);
app.use('/api/networks', newtorksRouter);
app.use('/api/volumes', volumesRouter);

// STACKS (docker-compose.yml)
// list stacks
// get stack details
// edit stack
// run stack
// stop stack
// update stack
// delete stack

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});