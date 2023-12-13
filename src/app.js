import express from 'express';
import routes from './routes/routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

routes(app);

export default app;


