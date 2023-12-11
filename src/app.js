import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors';

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(cors());

routes(app);

export default app;


