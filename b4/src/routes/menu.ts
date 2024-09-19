import  { Router, Request, Response } from 'express'


interface IMenu {
    id: number;
    descripcion: string;
}
const menu: IMenu[] = [
    { id: 1, descripcion: 'Menu 1' },
    { id: 2, descripcion: 'Menu 2' },
    { id: 3, descripcion: 'Menu 3' },
    { id: 4, descripcion: 'Menu 4' },
    { id: 5, descripcion: 'Menu 5' }
]

const router = Router();

//localhost:3000/menu/2

router.get('/', (req: Request , res:Response) => { 
    res.json(menu);
 });




 export default router;
