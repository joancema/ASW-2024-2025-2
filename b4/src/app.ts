import express,  { Application } from 'express';

import { routerMenu, routerOpcion } from './routes'


const app: Application = express();
const port: number = 3000;

app.use(express.json());


app.use('/opciones', routerOpcion);
app.use('/menu', routerMenu);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



