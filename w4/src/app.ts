import express, { Application } from 'express';
import { optionRouter, userRouter } from './routes';

const app: Application = express();
const port: number = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/users', userRouter);
app.use('/options', optionRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
