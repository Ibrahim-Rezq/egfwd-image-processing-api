import express from 'express';
import imgRoute from './Routes/index';

const app = express();
const port = 1337;

app.use(express.json());
app.use('/api/images', imgRoute);
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

export default app;
